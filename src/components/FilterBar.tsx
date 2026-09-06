import React from 'react';
import { Search, X, Layers, Shirt, HelpCircle, Activity } from 'lucide-react';
import { CategoryId, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface FilterBarProps {
  currentLang: Language;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: CategoryId | 'all';
  onCategoryChange: (cat: CategoryId | 'all') => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  currentLang,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}) => {
  const t = UI_TRANSLATIONS[currentLang];

  const categories: { id: CategoryId | 'all'; label: string; icon: React.ReactNode }[] = [
    {
      id: 'all',
      label: t.filterAll,
      icon: <Layers className="w-3.5 h-3.5" />,
    },
    {
      id: 'appearance',
      label: t.filterCat1,
      icon: <Shirt className="w-3.5 h-3.5" />,
    },
    {
      id: 'quiz',
      label: t.filterCat2,
      icon: <HelpCircle className="w-3.5 h-3.5" />,
    },
    {
      id: 'activity',
      label: t.filterCat3,
      icon: <Activity className="w-3.5 h-3.5" />,
    },
  ];

  return (
    <div className="max-w-xl mx-auto px-4 mb-4 space-y-2.5">
      {/* Search Input with Multilingual Placeholder */}
      <div className="relative">
        <Search className="w-4 h-4 text-sky-600 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={t.searchPlaceholder}
          className="w-full pl-9 pr-9 py-2.5 bg-white/95 border-2 border-sky-200 rounded-2xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 shadow-2xs focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all font-medium"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 rounded-full"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Category Pills (Star mission removed) */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 px-0.5">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`flex-shrink-0 flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-black transition-all ${
                isSelected
                  ? 'bg-[#0f2b5c] text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-sky-100 hover:bg-sky-50 shadow-2xs'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
