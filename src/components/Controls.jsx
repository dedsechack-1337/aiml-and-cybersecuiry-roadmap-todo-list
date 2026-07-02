export default function Controls({
  query,
  onQueryChange,
  itemFilter,
  onItemFilterChange,
  counts,
  onExpandAll,
  onCollapseAll,
  onReset,
}) {
  return (
    <div className="controls">
      <div className="search-wrap">
        <input
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search topics..."
          autoComplete="off"
        />
      </div>

      <div className="tabs">
        <button
          className={`tab ${itemFilter === 'all' ? 'active' : ''}`}
          onClick={() => onItemFilterChange('all')}
        >
          All ({counts.total})
        </button>
        <button
          className={`tab ${itemFilter === 'todo' ? 'active' : ''}`}
          onClick={() => onItemFilterChange('todo')}
        >
          ○ Todo ({counts.todo})
        </button>
        <button
          className={`tab ${itemFilter === 'done' ? 'active' : ''}`}
          onClick={() => onItemFilterChange('done')}
        >
          ✓ Done ({counts.done})
        </button>
      </div>

      <button className="ghost-btn" onClick={onExpandAll}>↕ Expand</button>
      <button className="ghost-btn" onClick={onCollapseAll}>↕ Collapse</button>
      <button className="reset-btn" onClick={onReset}>⟲ Reset</button>
    </div>
  );
}
