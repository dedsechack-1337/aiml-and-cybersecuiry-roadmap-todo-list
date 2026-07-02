import { COLORS, ROADMAP } from '../data/roadmap';

export default function GlanceGrid({ onJumpToPhase }) {
  return (
    <div className="glance">
      <div className="glance-title">❗ ROADMAP PHASES AT A GLANCE</div>
      <div className="glance-grid">
        {ROADMAP.map((phase, pi) => {
          const c = COLORS[phase.color];
          return (
            <div
              key={phase.title}
              className="glance-card"
              style={{ background: `linear-gradient(135deg, ${c}cc, ${c}55)` }}
              onClick={() => onJumpToPhase(pi)}
            >
              <span className="gnum">Phase {phase.num}</span>
              <span className="gtitle">{phase.icon} {phase.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
