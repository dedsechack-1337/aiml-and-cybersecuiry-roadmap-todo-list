const TIERS = [
  { key: 'all', label: 'All phases' },
  { key: 'must', label: '🔴 Must-Do First' },
  { key: 'important', label: '🟡 Important' },
  { key: 'good', label: '🔵 Good to Have' },
  { key: 'later', label: '🟣 Specialization / Later' },
];

export default function PriorityFilters({ value, onChange }) {
  return (
    <div className="priority-filters">
      {TIERS.map((t) => (
        <button
          key={t.key}
          className={`pfilter ${value === t.key ? 'active' : ''}`}
          data-p={t.key}
          onClick={() => onChange(t.key)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
