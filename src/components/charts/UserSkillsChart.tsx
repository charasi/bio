import { useEffect, useRef, useState } from "react";
import { SkillProgress } from "../../types/ChartTypes.ts";
import { loadSkillsProgress } from "../../utils/LoadData.ts";
import { SkillChart } from "./SkillChart.tsx";

export const UserSkillsChart = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [bubbles, setBubbles] = useState<SkillProgress[]>([]);
  const [popup, setPopup] = useState<{
    x: number;
    y: number;
    stats: SkillProgress;
  } | null>(null);
  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    content: string;
  } | null>(null);

  const minRadius = 50;
  const maxRadius = 90;

  useEffect(() => {
    loadSkillsProgress().then((skills) => {
      const centerX = 500;
      const centerY = 400;
      const radius = 200;

      const angleStep = (2 * Math.PI) / skills.length;
      const bubblesWithPosition = skills.map((skill, i) => {
        const r =
          minRadius +
          ((maxRadius - minRadius) * skill.numProblemSolved) /
            skill.totalProblems;

        const angle = i * angleStep;
        return {
          ...skill,
          x: centerX + radius * Math.cos(angle),
          y: centerY + radius * Math.sin(angle),
          r,
        };
      });

      setBubbles(bubblesWithPosition);
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[800px] bg-white overflow-hidden"
    >
      {/* Tooltip */}
      {tooltip && (
        <div
          className="absolute bg-black text-white text-xs px-2 py-1 rounded shadow z-50 pointer-events-none"
          style={{
            left: tooltip.x + 10,
            top: tooltip.y - 40,
            whiteSpace: "nowrap",
          }}
        >
          {tooltip.content}
        </div>
      )}

      {/* Chart Popup */}
      {popup && (
        <div
          className="absolute z-50 bg-white border shadow-lg rounded p-3"
          style={{
            top: popup.y - 280,
            left: popup.x - 350,
            width: "300px",
            height: "300px",
          }}
        >
          <SkillChart stats={popup.stats} />
          <button
            onClick={() => setPopup(null)}
            className="absolute top-1 right-2 text-gray-500 hover:text-red-500"
          >
            ✕
          </button>
        </div>
      )}

      {/* Bubbles */}
      {bubbles.map((bubble) => (
        <button
          key={bubble.skill.id}
          className="absolute rounded-full bg-gradient-to-br from-cyan-300 to-blue-500 border-2 border-blue-700 shadow-md text-xs text-white flex items-center justify-center text-center font-semibold"
          style={{
            top: bubble.y - bubble.r,
            left: bubble.x - bubble.r,
            width: bubble.r * 2,
            height: bubble.r * 2,
          }}
          onClick={(e) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (!rect) return;
            setPopup({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
              stats: bubble,
            });
          }}
          onMouseEnter={(e) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (!rect) return;
            setTooltip({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
              content: `${bubble.skill.id}: ${bubble.numProblemSolved}/${bubble.totalProblems}`,
            });
          }}
          onMouseMove={(e) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (!rect) return;
            setTooltip((prev) =>
              prev
                ? {
                    ...prev,
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                  }
                : null,
            );
          }}
          onMouseLeave={() => setTooltip(null)}
        >
          <span className="px-1">
            {bubble.skill.id.length > 10
              ? bubble.skill.id.slice(0, 9) + "…"
              : bubble.skill.id}
          </span>
        </button>
      ))}
    </div>
  );
};
