import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickJump } from './components/QuickJump';
import { FilterBar } from './components/FilterBar';
import { MissionCard } from './components/MissionCard';
import { HowToPlayModal } from './components/HowToPlayModal';
import { QRModal } from './components/QRModal';
import { MISSIONS, CATEGORIES } from './data/missions';
import { UI_TRANSLATIONS } from './data/translations';
import { CategoryId, Language } from './types';
import { ArrowUp, HelpCircle, BookOpen, QrCode, Waves } from 'lucide-react';
import { StarfishIcon } from './components/BeachIcons';

export function App() {
  // 1. Language state (persisted)
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('ifriend_lang');
    if (saved && ['ko', 'en', 'ja', 'zh'].includes(saved)) {
      return saved as Language;
    }
    const browserLang = navigator.language.slice(0, 2).toLowerCase();
    if (browserLang === 'ja') return 'ja';
    if (browserLang === 'zh') return 'zh';
    if (browserLang === 'en') return 'en';
    return 'ko';
  });

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('ifriend_lang', lang);
  };

  const t = UI_TRANSLATIONS[currentLang];

  // 2. Modals
  const [isHowToPlayOpen, setIsHowToPlayOpen] = useState(false);
  const [isQROpen, setIsQROpen] = useState(false);

  // 3. Search & Filter
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [activeMissionId, setActiveMissionId] = useState<number | null>(null);

  // Scroll to mission
  const scrollToMission = (id: number) => {
    setActiveMissionId(id);
    setTimeout(() => {
      const element = document.getElementById(`mission-${id}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => setActiveMissionId(null), 2500);
      }
    }, 50);
  };

  // Filtered missions
  const filteredMissions = useMemo(() => {
    return MISSIONS.filter((m) => {
      if (selectedCategory !== 'all' && m.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.trim().toLowerCase();
        if (m.id.toString() === query || `#${m.id}` === query) {
          return true;
        }
        const matchesKo =
          m.ko.title.toLowerCase().includes(query) ||
          m.ko.condition.toLowerCase().includes(query);
        const matchesEn =
          m.en.title.toLowerCase().includes(query) ||
          m.en.condition.toLowerCase().includes(query);
        const matchesJa =
          m.ja.title.toLowerCase().includes(query) ||
          m.ja.condition.toLowerCase().includes(query);
        const matchesZh =
          m.zh.title.toLowerCase().includes(query) ||
          m.zh.condition.toLowerCase().includes(query);
        const matchesTag = m.tag.toLowerCase().includes(query);

        return matchesKo || matchesEn || matchesJa || matchesZh || matchesTag;
      }
      return true;
    });
  }, [searchQuery, selectedCategory]);

  // Group by category when 'all' is selected
  const categoryGroups = useMemo(() => {
    const groups: { categoryId: CategoryId; items: typeof MISSIONS }[] = [
      { categoryId: 'appearance', items: [] },
      { categoryId: 'quiz', items: [] },
      { categoryId: 'activity', items: [] },
    ];

    filteredMissions.forEach((m) => {
      const g = groups.find((grp) => grp.categoryId === m.category);
      if (g) g.items.push(m);
    });

    return groups.filter((g) => g.items.length > 0);
  }, [filteredMissions]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fef8ee] text-slate-900 pb-28 font-sans selection:bg-sky-500 selection:text-white">
      {/* Top Header */}
      <Header
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onOpenHowToPlay={() => setIsHowToPlayOpen(true)}
        onOpenQR={() => setIsQROpen(true)}
      />

      <main>
        {/* Ocean Waves Hero */}
        <Hero
          currentLang={currentLang}
          onOpenHowToPlay={() => setIsHowToPlayOpen(true)}
        />

        {/* Lifebuoy 1~16 Quick Jump */}
        <QuickJump
          missions={MISSIONS}
          currentLang={currentLang}
          activeId={activeMissionId}
          onSelectMission={scrollToMission}
        />

        {/* Search & Category Filter Tabs */}
        <FilterBar
          currentLang={currentLang}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Mission Content List */}
        <div className="max-w-xl mx-auto px-4 space-y-6">
          {selectedCategory === 'all' && !searchQuery.trim() ? (
            // Grouped by Category
            categoryGroups.map((group) => {
              const catInfo = CATEGORIES[group.categoryId];
              return (
                <section key={group.categoryId} className="space-y-3.5">
                  {/* Category Header Card */}
                  <div className="p-4 rounded-[2rem] bg-white/95 border-2 border-sky-200 shadow-2xs transition-all">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <StarfishIcon size={20} />
                        <h2 className="text-base font-black text-[#0f2b5c] tracking-tight">
                          {catInfo.name[currentLang]}
                        </h2>
                      </div>
                      <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800">
                        {group.items.length}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 font-medium pl-6 leading-relaxed">
                      {catInfo.notice[currentLang]}
                    </p>
                  </div>

                  {/* Cards */}
                  <div className="space-y-3.5">
                    {group.items.map((mission) => (
                      <MissionCard
                        key={mission.id}
                        mission={mission}
                        currentLang={currentLang}
                      />
                    ))}
                  </div>
                </section>
              );
            })
          ) : filteredMissions.length > 0 ? (
            // Flat list
            <div className="space-y-3.5">
              {filteredMissions.map((mission) => (
                <MissionCard
                  key={mission.id}
                  mission={mission}
                  currentLang={currentLang}
                />
              ))}
            </div>
          ) : (
            // Empty State
            <div className="text-center py-14 px-4 bg-white/90 rounded-[2rem] border-2 border-sky-100 shadow-2xs">
              <HelpCircle className="w-10 h-10 text-sky-300 mx-auto mb-2" />
              <p className="text-sm font-black text-slate-700">
                {t.emptySearchTitle}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {t.emptySearchDesc}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-3 text-xs font-black text-[#0284c7] hover:underline"
              >
                {t.viewAllBtn}
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Floating Bottom Bar (High-Contrast Navy & Sky Blue) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 w-full max-w-sm px-4">
        <div className="bg-[#0f2b5c]/95 backdrop-blur-md rounded-full p-1.5 flex items-center justify-between text-white shadow-xl shadow-sky-950/25 border-2 border-white/40">
          {/* How to Play shortcut */}
          <button
            onClick={() => setIsHowToPlayOpen(true)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full hover:bg-white/15 transition-colors text-xs font-black text-white active:scale-95"
          >
            <BookOpen className="w-4 h-4 text-amber-300" />
            <span>{t.bottomHowToPlay}</span>
          </button>

          <div className="w-px h-5 bg-white/30" />

          {/* Guidebook QR button */}
          <button
            onClick={() => setIsQROpen(true)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full hover:bg-white/15 transition-colors text-xs font-black text-white active:scale-95"
          >
            <QrCode className="w-4 h-4 text-sky-300" />
            <span>{t.bottomQR}</span>
          </button>

          <div className="w-px h-5 bg-white/30" />

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full hover:bg-white/15 text-white/90 hover:text-white transition-colors"
            title={t.bottomTop}
          >
            <ArrowUp className="w-4 h-4 stroke-[3]" />
          </button>
        </div>
      </div>

      {/* Modals */}
      <HowToPlayModal
        isOpen={isHowToPlayOpen}
        onClose={() => setIsHowToPlayOpen(false)}
        currentLang={currentLang}
      />

      <QRModal
        isOpen={isQROpen}
        onClose={() => setIsQROpen(false)}
        currentLang={currentLang}
      />

      {/* Footer */}
      <footer className="text-center mt-12 px-4 max-w-xl mx-auto text-slate-400 text-xs">
        <div className="flex items-center justify-center gap-1 text-[#0284c7] mb-1">
          <Waves className="w-4 h-4" />
          <span className="font-black text-slate-600">I-FRIEND 27th OPENING CEREMONY</span>
        </div>
        <p className="font-medium text-slate-400">SPECTRUM : BLEND INTO ONE</p>
      </footer>
    </div>
  );
}

export default App;
