import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, Download, Wand2, Copy } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const PRESETS = [
  { name: 'Scalpel #10', prompt: 'Scalpel with #10 blade' },
  { name: 'Mayo Scissors', prompt: 'Mayo scissors, curved surgical scissors' },
  { name: 'Allis Forceps', prompt: 'Allis tissue forceps with teeth' },
  { name: 'Bovie Pencil', prompt: 'Electrocautery pencil (Bovie)' },
  { name: 'Weitlaner Retractor', prompt: 'Weitlaner self-retaining retractor' },
  { name: 'Laparoscopic Grasper', prompt: 'Laparoscopic grasping forceps' },
];

const ASPECT_RATIOS = [
  { label: 'Square (1:1)', value: '1024x1024' },
  { label: 'Landscape (3:2)', value: '1536x1024' },
  { label: 'Portrait (2:3)', value: '1024x1536' },
];

export function InstrumentImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [count, setCount] = useState('1');
  const [aspect, setAspect] = useState('1024x1024');
  const [images, setImages] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateImages = async () => {
    if (!prompt.trim()) {
      toast.error('Please enter a prompt or select a preset');
      return;
    }

    setIsGenerating(true);
    setImages([]);

    try {
      const { data, error } = await supabase.functions.invoke('generate-instrument-image', {
        body: {
          prompt: prompt.trim(),
          count: parseInt(count),
          aspect: aspect,
        },
      });

      if (error) {
        console.error('Generation error:', error);
        throw new Error(error.message || 'Failed to generate images');
      }

      if (data?.images) {
        setImages(data.images);
        toast.success(`Generated ${data.images.length} image(s)`);
      } else {
        throw new Error('No images returned from API');
      }
    } catch (error) {
      console.error('Error generating images:', error);
      toast.error(`Failed to generate images: ${error.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadImage = async (imageUrl: string, index: number) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `surgical-instrument-${Date.now()}-${index + 1}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      URL.revokeObjectURL(url);
      toast.success('Image downloaded');
    } catch (error) {
      console.error('Download error:', error);
      toast.error('Failed to download image');
    }
  };

  const copyToClipboard = async (imageUrl: string) => {
    try {
      await navigator.clipboard.writeText(imageUrl);
      toast.success('Image URL copied to clipboard');
    } catch (error) {
      console.error('Copy error:', error);
      toast.error('Failed to copy to clipboard');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wand2 className="h-5 w-5" />
          Instrument Image Generator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Presets */}
        <div>
          <label className="text-sm font-medium mb-2 block">Quick Presets</label>
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((preset) => (
              <Badge
                key={preset.name}
                variant="outline"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                onClick={() => setPrompt(preset.prompt)}
              >
                {preset.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Custom Prompt */}
        <div>
          <label className="text-sm font-medium mb-2 block">Custom Prompt</label>
          <Input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the surgical instrument you want to generate..."
            className="w-full"
          />
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Count</label>
            <Select value={count} onValueChange={setCount}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 image</SelectItem>
                <SelectItem value="2">2 images</SelectItem>
                <SelectItem value="3">3 images</SelectItem>
                <SelectItem value="4">4 images</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Aspect Ratio</label>
            <Select value={aspect} onValueChange={setAspect}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {ASPECT_RATIOS.map((ratio) => (
                  <SelectItem key={ratio.value} value={ratio.value}>
                    {ratio.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Generate Button */}
        <Button
          onClick={generateImages}
          disabled={isGenerating || !prompt.trim()}
          className="w-full"
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Wand2 className="mr-2 h-4 w-4" />
              Generate Images
            </>
          )}
        </Button>

        {/* Generated Images */}
        {images.length > 0 && (
          <div>
            <label className="text-sm font-medium mb-3 block">Generated Images</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {images.map((imageUrl, index) => (
                <div key={index} className="relative group">
                  <img
                    src={imageUrl}
                    alt={`Generated surgical instrument ${index + 1}`}
                    className="w-full h-auto rounded-lg border shadow-sm"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => downloadImage(imageUrl, index)}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => copyToClipboard(imageUrl)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}