
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Stethoscope, 
  Heart, 
  Scissors, 
  Shield, 
  Users, 
  Activity,
  Zap,
  Brain
} from 'lucide-react';

interface CategorySelectorProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'anatomy', name: 'Anatomy & Physiology', icon: Heart, iconColor: 'text-rose-500', bgColor: 'bg-rose-50' },
  { id: 'instruments', name: 'Surgical Instruments', icon: Scissors, iconColor: 'text-cyan-500', bgColor: 'bg-cyan-50' },
  { id: 'procedures', name: 'Surgical Procedures', icon: Activity, iconColor: 'text-emerald-500', bgColor: 'bg-emerald-50' },
  { id: 'sterile', name: 'Sterile Technique', icon: Shield, iconColor: 'text-indigo-500', bgColor: 'bg-indigo-50' },
  { id: 'patient-care', name: 'Patient Care', icon: Users, iconColor: 'text-amber-500', bgColor: 'bg-amber-50' },
  { id: 'pharmacology', name: 'Pharmacology', icon: Zap, iconColor: 'text-lime-500', bgColor: 'bg-lime-50' },
  { id: 'pathology', name: 'Pathology', icon: Brain, iconColor: 'text-purple-500', bgColor: 'bg-purple-50' },
  { id: 'technology', name: 'Surgical Technology', icon: Stethoscope, iconColor: 'text-teal-500', bgColor: 'bg-teal-50' }
];

const CategorySelector: React.FC<CategorySelectorProps> = ({ 
  selectedCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">Practice Questions</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Button
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
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySelector;
