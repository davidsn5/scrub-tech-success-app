import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const VisualResources = () => {
  return (
    <div className="min-h-screen gradient-background">
      {/* Header */}
      <div className="bg-card/95 backdrop-blur-md shadow-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col items-center space-y-4">
            <Link to="/">
              <Button variant="outline" size="sm" className="hover:bg-slate-50">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500/80 to-orange-600/80">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div className="text-center">
                <h1 className="text-2xl sm:text-3xl font-bold text-primary">Visual Resources</h1>
                <p className="text-muted-foreground">Educational diagrams and reference materials</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">
            Medical Equipment & Supplies
          </h2>
          <p className="text-muted-foreground mb-6">
            Interactive diagrams showing labeled components of essential medical equipment and supplies used in surgical settings.
          </p>
          
          {/* Visual Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Syringe Diagram */}
            <Card className="p-4 sm:p-6 bg-gradient-to-br from-orange-50/90 to-orange-100/90 backdrop-blur-sm border-orange-200/60 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-square w-full bg-white rounded-lg overflow-hidden shadow-inner">
                <img 
                  src="/lovable-uploads/syringe-diagram-new.png" 
                  alt="Syringe Parts Diagram - Shows labeled components including Hub, Barrel, Flange, Plunger, Rubber Stopper, and Luer-Lock/Slip Tip"
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mt-3 text-center">Syringe Components</h3>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Essential parts of a medical syringe including hub, barrel, flange, plunger, and safety features.
              </p>
            </Card>

            {/* Hypodermic Needle Diagram */}
            <Card className="p-4 sm:p-6 bg-gradient-to-br from-orange-50/90 to-orange-100/90 backdrop-blur-sm border-orange-200/60 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-square w-full bg-white rounded-lg overflow-hidden shadow-inner">
                <img 
                  src="/lovable-uploads/hypodermic-needle-diagram-resized.png" 
                  alt="Hypodermic Needle Parts Diagram - Shows labeled components including Lumen, Bevel, Hub, Shaft, and Plastic Sheath/Needle Protective Cover"
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mt-3 text-center">Needle Components</h3>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Detailed anatomy of hypodermic needles showing lumen, bevel, hub, shaft, and protective covering.
              </p>
            </Card>

            {/* Medical Supplies Diagram */}
            <Card className="p-4 sm:p-6 bg-gradient-to-br from-orange-50/90 to-orange-100/90 backdrop-blur-sm border-orange-200/60 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-square w-full bg-white rounded-lg overflow-hidden shadow-inner">
                <img 
                  src="/lovable-uploads/medical-supplies-diagram-resized.png" 
                  alt="Medical Supplies Diagram - Shows labeled Vial, Ampule, Medication Tube, and Alcohol Wipe components"
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mt-3 text-center">Medical Supplies</h3>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Common medical supplies including vials, ampules, medication tubes, and antiseptic wipes.
              </p>
            </Card>

            {/* Cysto Instruments Diagram */}
            <Card className="p-4 sm:p-6 bg-gradient-to-br from-orange-50/90 to-orange-100/90 backdrop-blur-sm border-orange-200/60 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-square w-full bg-white rounded-lg overflow-hidden shadow-inner">
                <img 
                  src="/lovable-uploads/cysto-instruments-diagram-resized.png" 
                  alt="Cystoscopy Instruments Diagram - Shows labeled components including Obturator, Stop, Sheath, Biopsy Port, Stop Cock, Albarron Bridge, Ellik Adaptor, Resectoscope, and 12° Scope"
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mt-3 text-center">Cysto Instruments</h3>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Specialized cystoscopy instruments for urological procedures including scopes, obturators, resectoscopes, and adapters.
              </p>
            </Card>
          </div>
        </div>

        {/* Study Tips Section */}
        <Card className="p-6 sm:p-8 bg-gradient-to-br from-white/90 via-orange-50/80 to-orange-100/70 backdrop-blur-sm border-orange-200/50 shadow-xl">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">Study Tips</h3>
            <div className="max-w-3xl mx-auto">
              <ul className="text-left space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Study each diagram carefully and practice identifying all labeled components</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Use these visual references alongside your flashcard studies for better retention</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Quiz yourself by covering the labels and trying to name each component</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Understanding component functions helps with practical application in surgical settings</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default VisualResources;