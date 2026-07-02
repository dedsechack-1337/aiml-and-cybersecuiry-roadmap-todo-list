export default function Legend() {
  return (
    <div className="legend">
      <div className="legend-title">Suggested learning priority</div>
      <div className="legend-rows">
        <div className="legend-row">
          <span className="priority-badge priority-must">🔴 Must-Do First</span>
          Core foundation — programming, math, classical ML, deep learning, and building real
          projects alongside them. Do this before anything else.
        </div>
        <div className="legend-row">
          <span className="priority-badge priority-important">🟡 Important</span>
          What's actually hireable right now — NLP, LLMs, GenAI, Agentic AI, MLOps, deployment,
          career prep. Learn in parallel with your first projects.
        </div>
        <div className="legend-row">
          <span className="priority-badge priority-good">🔵 Good to Have</span>
          Strengthens your profile — cloud, explainability, system design. Pick up as needed,
          not urgent.
        </div>
        <div className="legend-row">
          <span className="priority-badge priority-later">🟣 Specialization / Later</span>
          AI security depth and research — valuable for the PhD track, best tackled once you're
          employed or deep into the core path.
        </div>
      </div>
    </div>
  );
}
