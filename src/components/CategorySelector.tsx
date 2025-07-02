
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
  { id: 'anatomy', name: 'Anatomy & Physiology', icon: Heart, iconColor: 'text-rose-500', bgColor: 'bg-rose-100' },
  { id: 'instruments', name: 'Surgical Instruments', icon: Scissors, iconColor: 'text-blue-500', bgColor: 'bg-blue-100' },
  { id: 'procedures', name: 'Surgical Procedures', icon: Activity, iconColor: 'text-green-500', bgColor: 'bg-green-100' },
  { id: 'sterile', name: 'Sterile Technique', icon: Shield, iconColor: 'text-purple-500', bgColor: 'bg-purple-100' },
  { id: 'patient-care', name: 'Patient Care', icon: Users, iconColor: 'text-orange-500', bgColor: 'bg-orange-100' },
  { id: 'pharmacology', name: 'Pharmacology', icon: Zap, iconColor: 'text-yellow-500', bgColor: 'bg-yellow-100' },
  { id: 'pathology', name: 'Pathology', icon: Brain, iconColor: 'text-pink-500', bgColor: 'bg-pink-100' },
  { id: 'technology', name: 'Surgical Technology', icon: Stethoscope, iconColor: 'text-teal-500', bgColor: 'bg-teal-100' }
];

const CategorySelector: React.FC<CategorySelectorProps> = ({ 
  selectedCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold bg-gradient-to-r from-teal-600 to-orange-600 bg-clip-text text-transparent">Study Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`p-4 h-auto flex flex-col items-center space-y-2 transition-all duration-300 border-2 ${
                selectedCategory === category.id 
                  ? 'bg-gradient-to-br from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 border-transparent shadow-lg' 
                  : 'hover:bg-gradient-to-br hover:from-white hover:to-orange-50 border-orange-200 hover:border-teal-300 hover:shadow-md'
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
