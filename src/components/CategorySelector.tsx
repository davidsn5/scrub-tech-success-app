
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
  { id: 'anatomy', name: 'Anatomy & Physiology', icon: Heart, color: 'bg-red-500' },
  { id: 'instruments', name: 'Surgical Instruments', icon: Scissors, color: 'bg-blue-500' },
  { id: 'procedures', name: 'Surgical Procedures', icon: Activity, color: 'bg-green-500' },
  { id: 'sterile', name: 'Sterile Technique', icon: Shield, color: 'bg-purple-500' },
  { id: 'patient-care', name: 'Patient Care', icon: Users, color: 'bg-orange-500' },
  { id: 'pharmacology', name: 'Pharmacology', icon: Zap, color: 'bg-yellow-500' },
  { id: 'pathology', name: 'Pathology', icon: Brain, color: 'bg-pink-500' },
  { id: 'technology', name: 'Surgical Technology', icon: Stethoscope, color: 'bg-indigo-500' }
];

const CategorySelector: React.FC<CategorySelectorProps> = ({ 
  selectedCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900">Study Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`p-4 h-auto flex flex-col items-center space-y-2 transition-all duration-200 ${
                selectedCategory === category.id 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'hover:bg-blue-50'
              }`}
              onClick={() => onCategoryChange(category.id)}
            >
              <div className={`p-2 rounded-lg ${
                selectedCategory === category.id 
                  ? 'bg-white/20' 
                  : category.color
              }`}>
                <Icon className={`h-5 w-5 ${
                  selectedCategory === category.id 
                    ? 'text-white' 
                    : 'text-white'
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
