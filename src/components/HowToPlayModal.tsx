import React from 'react';
import { X, Clock, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { HOW_TO_PLAY_DATA } from '../data/howToPlay';
import { UI_TRANSLATIONS } from '../data/translations';
import { StarfishIcon } from './BeachIcons';

interface HowToPlayModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const HowToPlayModal: React.FC<HowToPlayModalProps> = ({ isOpen, onClose, currentLang }) => {
  if (!isOpen) return null;

  const t = UI_TRANSLATIONS[currentLang];
  const steps = HOW_TO_PLAY_DATA[currentLang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#fef8ee] w-full max-w-lg rounded-[2.5rem] p-6 shadow-2xl border-4 border-white flex flex-col max-h-[92vh] overflow-hidden relative">
        {/* Decorative Starfish in Header */}
        <div className="absolute top-4 left-5 opacity-90">
          <StarfishIcon size={30} />
        </div>
        <div className="absolute top-12 left-10 opacity-70 scale-75">
          <StarfishIcon size={20} />
        </div>

        {/* Modal Header matching Slide 11 */}
        <div className="flex items-start justify-between pb-3 pl-12">
          <div className="text-left">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0f2b5c] tracking-tight leading-none">
              {t.howToPlayTitle}
            </h2>
            <span className="text-sm sm:text-base font-black text-[#0284c7] tracking-wider uppercase block mt-1">
              {t.howToPlaySub}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/80 hover:bg-white text-slate-500 hover:text-slate-800 transition-colors shadow-2xs border border-sky-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 4 Step Cards matching Slide 11 */}
        <div className="overflow-y-auto py-3 space-y-3 pr-1">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-white/95 rounded-[1.8rem] p-4 sm:p-5 border border-sky-100 shadow-xs space-y-2"
            >
              {/* Step Pill Header */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#f0f9ff] text-[#0284c7] font-black text-xs sm:text-sm border border-sky-100">
                <span className="text-[#0f2b5c]">{s.step}.</span>
                <span>{s.title}</span>
              </div>

              {/* Step Descriptions */}
              <div className="space-y-1.5 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                {s.desc.map((line, i) => (
                  <p key={i} className="flex items-start gap-1.5">
                    <span className="text-[#0284c7] font-bold shrink-0">•</span>
                    <span>{line}</span>
                  </p>
                ))}
              </div>

              {/* Step 1 Time limit */}
              {s.timeLimit && (
                <div className="inline-flex items-center gap-1 text-xs font-black px-2.5 py-1 rounded-xl bg-sky-100 text-sky-800">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{s.timeLimit}</span>
                </div>
              )}

              {/* Step 4 Bingo Shout */}
              {idx === 3 && (
                <div className="text-xs font-extrabold text-emerald-900 bg-emerald-50 rounded-xl p-2.5 border border-emerald-200 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{s.desc[0]}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-sky-100 flex items-center justify-end">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#0f2b5c] hover:bg-[#1a3a6c] text-white font-black text-xs sm:text-sm shadow-md shadow-sky-950/20 transition-all"
          >
            {t.howToPlayClose}
          </button>
        </div>
      </div>
    </div>
  );
};
