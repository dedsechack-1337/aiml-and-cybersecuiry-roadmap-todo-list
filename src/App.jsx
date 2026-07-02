import { useMemo, useState } from 'react';
import { ROADMAP, itemId } from './data/roadmap';
import { useLocalStorage } from './hooks/useLocalStorage';

import Hero from './components/Hero';
import Legend from './components/Legend';
import ProgressCard from './components/ProgressCard';
import Controls from './components/Controls';
import PriorityFilters from './components/PriorityFilters';
import PhaseCard from './components/PhaseCard';
import GlanceGrid from './components/GlanceGrid';
import Footer from './components/Footer';

export default function App() {
  const [checked, setChecked] = useLocalStorage('aiml_roadmap_progress_v2', {});
  const [openPhases, setOpenPhases] = useState({});
  const [query, setQuery] = useState('');
  const [itemFilter, setItemFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');

  const { total, done } = useMemo(() => {
    let t = 0;
    let d = 0;
    ROADMAP.forEach((phase, pi) => {
      phase.groups.forEach((g, gi) => {
        g.items.forEach((it) => {
          t++;
          if (checked[itemId(pi, gi, it)]) d++;
        });
      });
    });
    return { total: t, done: d };
  }, [checked]);

  const toggleItem = (id) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleOpen = (pi) => {
    setOpenPhases((prev) => ({ ...prev, [pi]: !prev[pi] }));
  };

  const jumpToPhase = (pi) => {
    setOpenPhases((prev) => ({ ...prev, [pi]: true }));
    // wait a tick for the DOM to render open, then scroll
    setTimeout(() => {
      document
        .getElementById(`phase-card-${pi}`)
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 0);
  };

  const expandAll = () => {
    const all = {};
    ROADMAP.forEach((_, pi) => { all[pi] = true; });
    setOpenPhases(all);
  };

  const collapseAll = () => setOpenPhases({});

  const resetProgress = () => {
    if (window.confirm('Reset all progress? This clears every checked item in this browser.')) {
      setChecked({});
    }
  };

  const query_lc = query.trim().toLowerCase();
  const visiblePhases = ROADMAP.map((phase, pi) => ({ phase, pi })).filter(
    ({ phase }) => priorityFilter === 'all' || phase.priority === priorityFilter
  );

  return (
    <div className="wrap">
      <div className="glow" />

      <Hero />
      <Legend />

      <ProgressCard done={done} total={total} onJumpToPhase={jumpToPhase} />

      <Controls
        query={query}
        onQueryChange={setQuery}
        itemFilter={itemFilter}
        onItemFilterChange={setItemFilter}
        counts={{ total, done, todo: total - done }}
        onExpandAll={expandAll}
        onCollapseAll={collapseAll}
        onReset={resetProgress}
      />

      <PriorityFilters value={priorityFilter} onChange={setPriorityFilter} />

      <div id="phaseCards">
        {visiblePhases.length === 0 ? (
          <div className="empty-state">No phases match this filter.</div>
        ) : (
          visiblePhases.map(({ phase, pi }) => (
            <PhaseCard
              key={phase.title}
              phase={phase}
              pi={pi}
              checked={checked}
              onToggleItem={toggleItem}
              query={query_lc}
              itemFilter={itemFilter}
              isOpen={!!openPhases[pi]}
              onToggleOpen={() => toggleOpen(pi)}
            />
          ))
        )}
      </div>

      <GlanceGrid onJumpToPhase={jumpToPhase} />
      <Footer />
    </div>
  );
}
