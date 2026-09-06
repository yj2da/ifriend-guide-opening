import React from 'react';
import { BookOpen, Sparkles, Clock, Users } from 'lucide-react';
import { StarfishIcon, WaveDivider } from './BeachIcons';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface HeroProps {
  currentLang: Language;
  onOpenHowToPlay: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenHowToPlay }) => {
  const t = UI_TRANSLATIONS[currentLang];

  return (
    <div className="relative bg-gradient-to-b from-[#5abff7] to-[#42b0f4] text-white pt-6 pb-0 overflow-hidden">
      {/* Sun & Beach Starfish decorations */}
      <div className="absolute top-2 right-4 opacity-90 animate-star">
        <StarfishIcon size={36} />
      </div>
      <div className="absolute top-12 right-12 opacity-80 scale-75 animate-star">
        <StarfishIcon size={24} />
      </div>

      <div className="max-w-xl mx-auto px-5 text-center relative z-10">
        {/* Spectrum Pill from Slide 1 */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/25 backdrop-blur-md border border-white/40 text-[#092247] text-xs font-black tracking-wider uppercase mb-2.5 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>{t.spectrumTag}</span>
        </div>

        {/* Big Crisp Title - Deep Marine Navy for High Contrast Readability */}
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0a2347] drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)] mb-1 leading-tight flex items-center justify-center gap-2">
          <span>{t.heroTitle}</span>
        </h1>

        <p className="text-xs sm:text-sm font-black text-[#0f3460] tracking-wider mb-3.5 uppercase bg-white/30 inline-block px-3 py-0.5 rounded-full border border-white/30">
          {t.heroSubtitle}
        </p>

        {/* How to Play CTA Button - Clean, Fresh Bright White Pill */}
        <div className="mb-4">
          <button
            onClick={onOpenHowToPlay}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-sky-50 text-[#0f2b5c] font-black text-xs sm:text-sm shadow-md shadow-sky-950/10 transition-transform active:scale-95 border-2 border-white/80"
          >
            <BookOpen className="w-4 h-4 text-[#0284c7]" />
            <span>{t.howToPlayBtn}</span>
          </button>
        </div>

        {/* Fast Rules Strip */}
        <div className="grid grid-cols-3 gap-2 text-center pb-2 max-w-sm mx-auto">
          <div className="bg-white/25 backdrop-blur-xs rounded-2xl p-2 border border-white/30 text-[#0a2347]">
            <span className="text-[10px] font-bold opacity-80 block">{t.ruleTimeLabel}</span>
            <span className="text-xs font-black flex items-center justify-center gap-0.5 mt-0.5">
              <Clock className="w-3 h-3 text-amber-300" /> {t.ruleTimeValue}
            </span>
          </div>
          <div className="bg-white/25 backdrop-blur-xs rounded-2xl p-2 border border-white/30 text-[#0a2347]">
            <span className="text-[10px] font-bold opacity-80 block">{t.ruleStateLabel}</span>
            <span className="text-xs font-black flex items-center justify-center gap-0.5 mt-0.5">
              <Users className="w-3 h-3 text-sky-100" /> {t.ruleStateValue}
            </span>
          </div>
          <div className="bg-white/25 backdrop-blur-xs rounded-2xl p-2 border border-white/30 text-[#0a2347]">
            <span className="text-[10px] font-bold opacity-80 block">{t.ruleGoalLabel}</span>
            <span className="text-xs font-black flex items-center justify-center gap-0.5 mt-0.5">
              {t.ruleGoalValue}
            </span>
          </div>
        </div>
      </div>

      {/* Ocean Wave Divider transitioning to Sand Background */}
      <WaveDivider className="mt-2" />
    </div>
  );
};
