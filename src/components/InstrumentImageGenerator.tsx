import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Download, Image as ImageIcon, RefreshCw } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { surgicalInstrumentFlashcards } from '@/data/flashcards/surgicalInstruments';

interface GeneratedImage {
  instrumentName: string;
  imageData: string;
  category: string;
}

const InstrumentImageGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [currentInstrument, setCurrentInstrument] = useState<string>('');

  const generateAllImages = async () => {
    setIsGenerating(true);
    setProgress(0);
    setGeneratedImages([]);
    
    const images: GeneratedImage[] = [];
    const totalInstruments = surgicalInstrumentFlashcards.length;

    try {
      for (let i = 0; i < totalInstruments; i++) {
        const instrument = surgicalInstrumentFlashcards[i];
        setCurrentInstrument(instrument.name);
        
        toast.info(`Generating image ${i + 1}/${totalInstruments}: ${instrument.name}`);

        try {
          const { data, error } = await supabase.functions.invoke('generate-instrument-image-hf', {
            body: {
              instrumentName: instrument.name,
              features: instrument.characteristics
            }
          });

          if (error) throw error;

          if (data?.image) {
            const generatedImage: GeneratedImage = {
              instrumentName: instrument.name,
              imageData: data.image,
              category: instrument.category
            };
            
            images.push(generatedImage);
            setGeneratedImages([...images]);
            toast.success(`Generated image for ${instrument.name}`);
          } else {
            throw new Error(`Failed to generate image for ${instrument.name}`);
          }
        } catch (instrumentError) {
          console.error(`Error generating ${instrument.name}:`, instrumentError);
          toast.error(`Failed to generate ${instrument.name}: ${instrumentError.message}`);
        }

        setProgress(((i + 1) / totalInstruments) * 100);
        
        // Add a small delay to avoid rate limiting
        if (i < totalInstruments - 1) {
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }

      toast.success(`Successfully generated ${images.length}/${totalInstruments} images!`);
    } catch (error) {
      console.error('Error generating images:', error);
      toast.error('Error generating images. Check console for details.');
    } finally {
      setIsGenerating(false);
      setCurrentInstrument('');
    }
  };

  const downloadImage = (imageData: string, instrumentName: string) => {
    const link = document.createElement('a');
    link.href = imageData;
    link.download = `${instrumentName.replace(/\s+/g, '-').toLowerCase()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success(`Downloaded ${instrumentName} image`);
  };

  const downloadAllImages = () => {
    generatedImages.forEach((image, index) => {
      setTimeout(() => {
        downloadImage(image.imageData, image.instrumentName);
      }, index * 500); // Stagger downloads
    });
  };

  const copyImagePaths = () => {
    const imagePaths = generatedImages.map(img => 
      `"${img.instrumentName}": "/src/assets/instruments/${img.instrumentName.replace(/\s+/g, '-').toLowerCase()}.png"`
    ).join(',\n');
    
    navigator.clipboard.writeText(imagePaths);
    toast.success('Image paths copied to clipboard!');
  };

  return (
    <div className="space-y-6 p-6 bg-white rounded-lg border">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-emerald-800 mb-2">
          Surgical Instrument Image Generator
        </h2>
        <p className="text-gray-600">
          Generate AI-powered realistic images for all surgical instruments
        </p>
      </div>

      <div className="flex justify-center space-x-4">
        <Button 
          onClick={generateAllImages}
          disabled={isGenerating}
          className="bg-emerald-600 hover:bg-emerald-700"
        >
          {isGenerating ? (
            <>
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <ImageIcon className="h-4 w-4 mr-2" />
              Generate All Images
            </>
          )}
        </Button>

        {generatedImages.length > 0 && (
          <>
            <Button 
              onClick={downloadAllImages}
              variant="outline"
              className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
            >
              <Download className="h-4 w-4 mr-2" />
              Download All
            </Button>
            
            <Button 
              onClick={copyImagePaths}
              variant="outline"
              className="border-blue-200 text-blue-700 hover:bg-blue-50"
            >
              Copy Paths
            </Button>
          </>
        )}
      </div>

      {isGenerating && (
        <div className="space-y-3">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">
              Currently generating: <span className="font-medium">{currentInstrument}</span>
            </p>
            <Progress value={progress} className="h-3" />
            <p className="text-xs text-gray-500 mt-1">
              {Math.round(progress)}% complete ({generatedImages.length}/{surgicalInstrumentFlashcards.length} images)
            </p>
          </div>
        </div>
      )}

      {generatedImages.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Generated Images ({generatedImages.length})
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
            {generatedImages.map((image, index) => (
              <div key={index} className="border rounded-lg p-3 space-y-2">
                <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
                  <img 
                    src={image.imageData} 
                    alt={image.instrumentName}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div className="space-y-1">
                  <h4 className="font-medium text-sm">{image.instrumentName}</h4>
                  <Badge variant="outline" className="text-xs">
                    {image.category}
                  </Badge>
                </div>
                
                <Button 
                  onClick={() => downloadImage(image.imageData, image.instrumentName)}
                  size="sm"
                  variant="outline"
                  className="w-full"
                >
                  <Download className="h-3 w-3 mr-1" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {!isGenerating && generatedImages.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <ImageIcon className="h-12 w-12 mx-auto mb-3 opacity-50" />
          <p>Click "Generate All Images" to create realistic surgical instrument photos</p>
        </div>
      )}
    </div>
  );
};

export default InstrumentImageGenerator;