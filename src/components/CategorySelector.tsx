
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
  { id: 'anatomy', name: 'Anatomy & Physiology', icon: Heart, color: 'from-rose-400 to-pink-500' },
  { id: 'instruments', name: 'Surgical Instruments', icon: Scissors, color: 'from-blue-400 to-cyan-500' },
  { id: 'procedures', name: 'Surgical Procedures', icon: Activity, color: 'from-green-400 to-emerald-500' },
  { id: 'sterile', name: 'Sterile Technique', icon: Shield, color: 'from-purple-400 to-violet-500' },
  { id: 'patient-care', name: 'Patient Care', icon: Users, color: 'from-orange-400 to-amber-500' },
  { id: 'pharmacology', name: 'Pharmacology', icon: Zap, color: 'from-yellow-400 to-orange-500' },
  { id: 'pathology', name: 'Pathology', icon: Brain, color: 'from-pink-400 to-rose-500' },
  { id: 'technology', name: 'Surgical Technology', icon: Stethoscope, color: 'from-teal-400 to-cyan-500' }
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
                  : `bg-gradient-to-br ${category.color}`
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
