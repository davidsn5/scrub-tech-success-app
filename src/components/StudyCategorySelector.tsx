
import React from 'react';
import LockedButton from './LockedButton';
import { 
  BookOpen,
  Users,
  Shield,
  Heart,
  Building,
  Zap,
  Microscope,
  ShieldCheck,
  AlertTriangle,
  Pill,
  Scissors,
  Bandage,
  Stethoscope
} from 'lucide-react';

interface StudyCategorySelectorProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'medical-terminology', name: 'Medical Terminology', icon: BookOpen, iconColor: 'text-blue-500', bgColor: 'bg-blue-50' },
  { id: 'surgical-technologist-role', name: 'Role of Surgical Technologist', icon: Users, iconColor: 'text-purple-500', bgColor: 'bg-purple-50' },
  { id: 'legal-ethics-risk', name: 'Legal Concepts, Ethics, Risk Management', icon: Shield, iconColor: 'text-amber-500', bgColor: 'bg-amber-50' },
  { id: 'surgical-patient', name: 'Surgical Patient', icon: Heart, iconColor: 'text-rose-500', bgColor: 'bg-rose-50' },
  { id: 'physical-environment-safety', name: 'Physical Environment and Safety', icon: Building, iconColor: 'text-emerald-500', bgColor: 'bg-emerald-50' },
  { id: 'technological-science', name: 'Technological Science Concepts', icon: Zap, iconColor: 'text-cyan-500', bgColor: 'bg-cyan-50' },
  { id: 'microbiology', name: 'Microbiology', icon: Microscope, iconColor: 'text-green-500', bgColor: 'bg-green-50' },
  { id: 'surgical-asepsis-sterility', name: 'Surgical Asepsis and Sterility', icon: ShieldCheck, iconColor: 'text-indigo-500', bgColor: 'bg-indigo-50' },
  { id: 'emergency-situations', name: 'Emergency Situations', icon: AlertTriangle, iconColor: 'text-red-500', bgColor: 'bg-red-50' },
  { id: 'pharmacology-anesthesia', name: 'Pharmacology and Anesthesia', icon: Pill, iconColor: 'text-violet-500', bgColor: 'bg-violet-50' },
  { id: 'instrumentation-equipment', name: 'Instrumentation Equipment and Supplies', icon: Scissors, iconColor: 'text-orange-500', bgColor: 'bg-orange-50' },
  { id: 'hemostasis-wound-healing', name: 'Hemostasis Wound Healing and Closure', icon: Bandage, iconColor: 'text-pink-500', bgColor: 'bg-pink-50' },
  { id: 'surgical-procedures', name: 'Surgical Procedures', icon: Stethoscope, iconColor: 'text-teal-500', bgColor: 'bg-teal-50' }
];

const StudyCategorySelector: React.FC<StudyCategorySelectorProps> = ({ 
  selectedCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">Study Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <LockedButton
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`p-4 h-auto flex flex-col items-center space-y-2 transition-all duration-300 border-2 ${
                selectedCategory === category.id 
                  ? 'bg-gradient-to-br from-slate-100 to-blue-100 hover:from-slate-200 hover:to-blue-200 border-blue-300 shadow-lg text-slate-700' 
                  : 'hover:bg-gradient-to-br hover:from-white hover:to-slate-50 border-slate-200 hover:border-blue-300 hover:shadow-md'
              }`}
              onClick={() => onCategoryChange(category.id)}
            >
              <div className={`p-2 rounded-lg ${
                selectedCategory === category.id 
                  ? 'bg-white/60 backdrop-blur-sm' 
                  : category.bgColor
              }`}>
                <Icon className={`h-5 w-5 ${
                  selectedCategory === category.id 
                    ? 'text-slate-600' 
                    : category.iconColor
                }`} />
              </div>
              <span className="text-xs font-medium text-center leading-tight">
                {category.name}
              </span>
            </LockedButton>
          );
        })}
      </div>
    </div>
  );
};

export default StudyCategorySelector;
