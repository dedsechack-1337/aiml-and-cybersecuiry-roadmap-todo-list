import { COLORS, PRIORITY_META, PRIORITY_BORDER, itemId } from '../data/roadmap';

function itemMatchesFilter(id, text, query, itemFilter, checked) {
  if (query && !text.toLowerCase().includes(query)) return false;
  if (itemFilter === 'todo' && checked[id]) return false;
  if (itemFilter === 'done' && !checked[id]) return false;
  return true;
}

export default function PhaseCard({
  phase,
  pi,
  checked,
  onToggleItem,
  query,
  itemFilter,
  isOpen,
  onToggleOpen,
}) {
  const c = COLORS[phase.color];

  let total = 0;
  let done = 0;
  phase.groups.forEach((g, gi) => {
    g.items.forEach((it) => {
      total++;
      if (checked[itemId(pi, gi, it)]) done++;
    });
  });
  const pct = total ? Math.round((done / total) * 100) : 0;

  const groups = phase.groups
    .map((g, gi) => {
      const items = g.items.filter((it) =>
        itemMatchesFilter(itemId(pi, gi, it), it, query, itemFilter, checked)
      );
      return { ...g, gi, items };
    })
    .filter((g) => g.items.length > 0);

  const visibleItemCount = groups.reduce((sum, g) => sum + g.items.length, 0);
  const effectiveOpen = isOpen || !!query;

  if (query && visibleItemCount === 0) return null;

  return (
    <div
      className={`phase-card ${effectiveOpen ? 'open' : ''}`}
      id={`phase-card-${pi}`}
      style={{ borderLeftColor: PRIORITY_BORDER[phase.priority] }}
    >
      <div className="phase-head" onClick={onToggleOpen}>
        <div className="icon-square" style={{ background: `${c}22`, color: c }}>
          {phase.icon}
          <span className="icon-num">{phase.num}</span>
        </div>
        <div className="phase-info">
          <div className="phase-meta-row">
            <span className="phase-label">Phase {phase.num}</span>
            <span className={`level-badge level-${phase.level}`}>{phase.level}</span>
            <span className={`priority-badge priority-${phase.priority}`}>
              {PRIORITY_META[phase.priority].emoji} {PRIORITY_META[phase.priority].label}
            </span>
          </div>
          <div className="phase-title">{phase.title}</div>
          <div className="phase-desc">{phase.desc}</div>
        </div>
        <div className="phase-right">
          <div>
            <div className="phase-count">{done}/{total}</div>
            <div className="phase-mini-track">
              <div className="phase-mini-fill" style={{ width: `${pct}%`, background: c }} />
            </div>
            <div className="phase-pct">{pct}%</div>
          </div>
          <div className="chevron">▾</div>
        </div>
      </div>

      <div className="phase-body">
        {groups.length === 0 ? (
          <div className="empty-state">No items match.</div>
        ) : (
          groups.map((g) => (
            <div className="group" key={g.gi}>
              {g.name && <div className="group-label">{g.name}</div>}
              {g.items.map((it) => {
                const id = itemId(pi, g.gi, it);
                const isChecked = !!checked[id];
                const hasNew = it.includes('★');
                const clean = it.replace(' ★', '');
                return (
                  <div
                    key={id}
                    className={`item ${isChecked ? 'checked' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleItem(id);
                    }}
                  >
                    <span className="checkbox">{isChecked ? '✓' : ''}</span>
                    <span className="item-label">
                      {clean}
                      {hasNew && <span className="new-tag">NEW</span>}
                    </span>
                  </div>
                );
              })}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
