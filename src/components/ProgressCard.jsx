import { COLORS, ROADMAP } from '../data/roadmap';

export default function ProgressCard({ done, total, onJumpToPhase }) {
  const pct = total ? Math.round((done / total) * 100) : 0;
  const remaining = total - done;

  return (
    <div className="progress-card">
      <div className="progress-card-top">
        <span>Overall Progress</span>
        <span>{pct}%</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <div className="progress-card-bottom">
        <span className="done-text">✅ {done} completed</span>
        <span className="remain-text">❌ {remaining} remaining</span>
      </div>
      <div className="icon-row">
        {ROADMAP.map((phase, pi) => (
          <div
            key={phase.title}
            className="mini"
            style={{ background: `${COLORS[phase.color]}22`, color: COLORS[phase.color] }}
            title={phase.title}
            onClick={() => onJumpToPhase(pi)}
          >
            {phase.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
