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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Syringe Diagram */}
            <div className="text-center mt-8">
              <div className="relative">
                <img 
                  src="/lovable-uploads/syringe-diagram-cropped-blue.png" 
                  alt="Syringe Parts Diagram - Shows labeled components including Hub, Barrel, Flange, Plunger, Rubber Stopper, and Luer-Lock/Slip Tip"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg"
                />
                <div className="absolute bottom-1 right-1 text-[8px] text-white/30 font-light bg-black/15 px-1 py-0.5 rounded-sm">
                  © SurgicalTechReview.com
                </div>
              </div>
              <div className="mt-4 p-3 bg-gradient-to-br from-orange-50/90 to-orange-100/90 border border-orange-200/60 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 text-center">Syringe Components</h3>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  Essential parts of a medical syringe including hub, barrel, flange, plunger, and safety features.
                </p>
              </div>
            </div>

            {/* Hypodermic Needle Diagram */}
            <div className="text-center">
              <div className="relative">
                <img 
                  src="/lovable-uploads/needle-diagram-cropped-blue.png" 
                  alt="Hypodermic Needle Parts Diagram - Shows labeled components including Lumen, Bevel, Hub, Shaft, and Plastic Sheath/Needle Protective Cover"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg"
                />
                <div className="absolute bottom-1 right-1 text-[8px] text-white/30 font-light bg-black/15 px-1 py-0.5 rounded-sm">
                  © SurgicalTechReview.com
                </div>
              </div>
              <div className="mt-4 p-3 bg-gradient-to-br from-orange-50/90 to-orange-100/90 border border-orange-200/60 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 text-center">Needle Components</h3>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  Detailed anatomy of hypodermic needles showing lumen, bevel, hub, shaft, and protective covering.
                </p>
              </div>
            </div>

            {/* Medical Supplies Diagram */}
            <div className="text-center">
              <div className="relative">
                <img 
                  src="/lovable-uploads/supplies-diagram-cropped-blue.png" 
                  alt="Medical Supplies Diagram - Shows labeled Vial, Ampule, Medication Tube, and Alcohol Wipe components"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg"
                />
                <div className="absolute bottom-1 right-1 text-[8px] text-white/30 font-light bg-black/15 px-1 py-0.5 rounded-sm">
                  © SurgicalTechReview.com
                </div>
              </div>
              <div className="mt-4 p-3 bg-gradient-to-br from-orange-50/90 to-orange-100/90 border border-orange-200/60 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 text-center">Medical Supplies</h3>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  Common medical supplies including vials, ampules, medication tubes, and antiseptic wipes.
                </p>
              </div>
            </div>

            {/* Cysto Instruments Diagram */}
            <div className="text-center">
              <div className="relative">
                <img 
                  src="/lovable-uploads/cysto-diagram-cropped-blue.png" 
                  alt="Cystoscopy Instruments Diagram - Shows labeled components including Obturator, Stop, Sheath, Biopsy Port, Stop Cock, Albarron Bridge, Ellik Adaptor, Resectoscope, and 12° Scope"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg"
                />
                <div className="absolute bottom-1 right-1 text-[8px] text-white/30 font-light bg-black/15 px-1 py-0.5 rounded-sm">
                  © SurgicalTechReview.com
                </div>
              </div>
              <div className="mt-4 p-3 bg-gradient-to-br from-orange-50/90 to-orange-100/90 border border-orange-200/60 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 text-center">Cysto Instruments</h3>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  Specialized cystoscopy instruments for urological procedures including scopes, obturators, resectoscopes, and adapters.
                </p>
              </div>
            </div>

            {/* Blade Components Diagram */}
            <div className="text-center">
              <div className="relative">
                <img 
                  src="/lovable-uploads/blade-diagram.png" 
                  alt="Blade Components Diagram - Shows labeled blade parts including Handle, Shank, and Tip"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg"
                />
                <div className="absolute bottom-1 right-1 text-[8px] text-white/30 font-light bg-black/15 px-1 py-0.5 rounded-sm">
                  © SurgicalTechReview.com
                </div>
              </div>
              <div className="mt-4 p-3 bg-gradient-to-br from-orange-50/90 to-orange-100/90 border border-orange-200/60 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 text-center">Blade Components</h3>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  Basic anatomy of surgical blades showing handle, shank, and tip components.
                </p>
              </div>
            </div>

            {/* Scalpel Components Diagram */}
            <div className="text-center">
              <div className="relative">
                <img 
                  src="/lovable-uploads/scalpel-diagram.png" 
                  alt="Scalpel Components Diagram - Shows labeled parts including Shank, Shaft, Tip, Lockbox, and Grip Handle"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg"
                />
                <div className="absolute bottom-1 right-1 text-[8px] text-white/30 font-light bg-black/15 px-1 py-0.5 rounded-sm">
                  © SurgicalTechReview.com
                </div>
              </div>
              <div className="mt-4 p-3 bg-gradient-to-br from-orange-50/90 to-orange-100/90 border border-orange-200/60 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 text-center">Scalpel Components</h3>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  Detailed scalpel anatomy including shank, shaft, tip, lockbox, and ergonomic grip handle.
                </p>
              </div>
            </div>

            {/* Probe Components Diagram */}
            <div className="text-center">
              <div className="relative">
                <img 
                  src="/lovable-uploads/probe-diagram.png" 
                  alt="Probe Components Diagram - Shows labeled parts including Handle, Shaft, and Tip"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg"
                />
                <div className="absolute bottom-1 right-1 text-[8px] text-white/30 font-light bg-black/15 px-1 py-0.5 rounded-sm">
                  © SurgicalTechReview.com
                </div>
              </div>
              <div className="mt-4 p-3 bg-gradient-to-br from-orange-50/90 to-orange-100/90 border border-orange-200/60 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 text-center">Probe Components</h3>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  Surgical probe structure showing handle, shaft, and specialized tip for precise tissue manipulation.
                </p>
              </div>
            </div>

            {/* Forceps Components Diagram */}
            <div className="text-center">
              <div className="relative">
                <img 
                  src="/lovable-uploads/forceps-diagram.png" 
                  alt="Forceps Components Diagram - Shows labeled parts including Tip, Shaft, and Attachment"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg"
                />
                <div className="absolute bottom-1 right-1 text-[8px] text-white/30 font-light bg-black/15 px-1 py-0.5 rounded-sm">
                  © SurgicalTechReview.com
                </div>
              </div>
              <div className="mt-4 p-3 bg-gradient-to-br from-orange-50/90 to-orange-100/90 border border-orange-200/60 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 text-center">Forceps Components</h3>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  Forceps anatomy featuring tip for grasping, shaft for control, and attachment mechanism.
                </p>
              </div>
            </div>

            {/* Scissors Components Diagram */}
            <div className="text-center">
              <div className="relative">
                <img 
                  src="/lovable-uploads/scissors-diagram.png" 
                  alt="Scissors Components Diagram - Shows labeled parts including Finger Ring, Ratchet, Jaws, Boxlock, Shank, and Tip"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg"
                />
                <div className="absolute bottom-1 right-1 text-[8px] text-white/30 font-light bg-black/15 px-1 py-0.5 rounded-sm">
                  © SurgicalTechReview.com
                </div>
              </div>
              <div className="mt-4 p-3 bg-gradient-to-br from-orange-50/90 to-orange-100/90 border border-orange-200/60 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 text-center">Scissors Components</h3>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  Complete scissors anatomy showing finger rings, ratchet, jaws, boxlock, shank, and cutting tip.
                </p>
              </div>
            </div>
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