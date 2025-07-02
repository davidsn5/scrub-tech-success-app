
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
  { id: 'anatomy', name: 'Anatomy & Physiology', icon: Heart, iconColor: 'text-rose-400', bgColor: 'bg-rose-50' },
  { id: 'instruments', name: 'Surgical Instruments', icon: Scissors, iconColor: 'text-sky-400', bgColor: 'bg-sky-50' },
  { id: 'procedures', name: 'Surgical Procedures', icon: Activity, iconColor: 'text-emerald-400', bgColor: 'bg-emerald-50' },
  { id: 'sterile', name: 'Sterile Technique', icon: Shield, iconColor: 'text-violet-400', bgColor: 'bg-violet-50' },
  { id: 'patient-care', name: 'Patient Care', icon: Users, iconColor: 'text-amber-400', bgColor: 'bg-amber-50' },
  { id: 'pharmacology', name: 'Pharmacology', icon: Zap, iconColor: 'text-lime-400', bgColor: 'bg-lime-50' },
  { id: 'pathology', name: 'Pathology', icon: Brain, iconColor: 'text-pink-400', bgColor: 'bg-pink-50' },
  { id: 'technology', name: 'Surgical Technology', icon: Stethoscope, iconColor: 'text-teal-400', bgColor: 'bg-teal-50' }
];

const CategorySelector: React.FC<CategorySelectorProps> = ({ 
  selectedCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Study Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`p-4 h-auto flex flex-col items-center space-y-2 transition-all duration-300 border-2 ${
                selectedCategory === category.id 
                  ? 'bg-gradient-to-br from-violet-300 to-pink-300 hover:from-violet-400 hover:to-pink-400 border-transparent shadow-lg' 
                  : 'hover:bg-gradient-to-br hover:from-white hover:to-violet-50 border-violet-200 hover:border-pink-300 hover:shadow-md'
              }`}
              onClick={() => onCategoryChange(category.id)}
            >
              <div className={`p-2 rounded-lg ${
                selectedCategory === category.id 
                  ? 'bg-white/20 backdrop-blur-sm' 
                  : category.bgColor
              }`}>
                <Icon className={`h-5 w-5 ${
                  selectedCategory === category.id 
                    ? 'text-white' 
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
