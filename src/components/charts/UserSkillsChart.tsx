import { useEffect, useRef, useState } from "react";
import { QuestionStats, SkillProgress } from "../../types/ChartTypes.ts";
import { loadSkillsProgress } from "../../utils/LoadData.ts";
import { SkillChart } from "./SkillChart.tsx";

export const UserSkillsChart = () => {
  const minRadius = 20;
  const maxRadius = 60;
  const padding = 40;

  const containerRef = useRef<HTMLDivElement | null>(null);

  const [bubbles, setBubbles] = useState<
    (SkillProgress & { r: number; x: number; y: number })[]
  >([]);

  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    content: string;
  } | null>(null);

  const [popup, setPopup] = useState<{
    x: number;
    y: number;
    stats: QuestionStats;
  } | null>(null);

  useEffect(() => {
    const fetchAndLayout = async () => {
      const skillList = await loadSkillsProgress();

      const maxProblems = Math.max(...skillList.map((s) => s.totalProblems));
      const minProblems = Math.min(...skillList.map((s) => s.totalProblems));

      const radiusScale = (problems: number) => {
        if (maxProblems === minProblems) return (minRadius + maxRadius) / 2;
        return (
          ((problems - minProblems) / (maxProblems - minProblems)) *
            (maxRadius - minRadius) +
          minRadius
        );
      };

      const spacingX = maxRadius * 2 * 1.1;
      const spacingY = (Math.sqrt(3) / 2) * spacingX;

      const positioned = skillList.map((skill, i) => {
        const r = radiusScale(skill.totalProblems);
        const row = Math.floor(i / 5);
        const col = i % 5;
        const x = col * spacingX + (row % 2 === 1 ? spacingX / 2 : 0) + r;
        const y = row * spacingY + r;
        return { ...skill, r, x, y };
      });

      setBubbles(positioned);
    };

    fetchAndLayout();
  }, []);

  const maxX = Math.max(...bubbles.map((b) => b.x + b.r)) + padding;
  const maxY = Math.max(...bubbles.map((b) => b.y + b.r)) + padding;

  return (
    <div ref={containerRef} className="w-full overflow-visible relative">
      <svg
        width="100%"
        height={maxY}
        viewBox={`0 0 ${maxX} ${maxY}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter
            id="bubbleShadow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="4"
              floodColor="rgba(0,0,0,0.3)"
            />
          </filter>
          <radialGradient id="bubbleGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(160, 100%, 95%)" />
            <stop offset="100%" stopColor="hsl(170, 80%, 60%)" />
          </radialGradient>
        </defs>

        {bubbles.map((bubble) => {
          const fontSize = bubble.r / 3;
          const words = bubble.skill.id.split(" ");
          const isMultiWord = words.length > 1;

          return (
            <foreignObject
              key={bubble.skill.id}
              x={bubble.x - bubble.r}
              y={bubble.y - bubble.r}
              width={bubble.r * 2}
              height={bubble.r * 2}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  const rect = containerRef.current?.getBoundingClientRect();
                  if (!rect) return;
                  setPopup({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                    stats: bubble.stats,
                  });
                }}
                onMouseEnter={(e) => {
                  const rect = containerRef.current?.getBoundingClientRect();
                  if (!rect) return;
                  setTooltip({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                    content: `${bubble.skill.id} ${bubble.numProblemSolved} / ${bubble.totalProblems}`,
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
                className="w-full h-full rounded-full border-2 border-blue-400
                  bg-gradient-to-br from-cyan-200 to-cyan-500
                  shadow-md
                  flex flex-col justify-center items-center text-black
                  cursor-pointer
                  select-none"
                style={{ fontSize }}
                aria-label={`Skill: ${bubble.skill.id}`}
              >
                {isMultiWord ? (
                  <>
                    <span>{words[0]}</span>
                    <span>{words.slice(1).join(" ")}</span>
                  </>
                ) : bubble.skill.id.length > 10 ? (
                  bubble.skill.id.slice(0, 9) + "…"
                ) : (
                  bubble.skill.id
                )}
              </button>
            </foreignObject>
          );
        })}
      </svg>

      {tooltip && (
        <div
          className="absolute z-50 px-2 py-1 bg-gradient-to-br from-cyan-200 to-cyan-500 text-black text-sm rounded shadow-lg pointer-events-none transition-opacity duration-200"
          style={{
            top: tooltip.y + 10,
            left: tooltip.x + 10,
          }}
        >
          {tooltip.content}
        </div>
      )}

      {popup && (
        <div
          className="absolute z-50 bg-white border border-gray-300 rounded shadow-lg p-2"
          style={{
            top: popup.y - 30,
            left: popup.x - 150,
            width: 240,
            height: 240,
          }}
        >
          <button
            onClick={() => setPopup(null)}
            className="absolute top-1 right-1 text-gray-400 hover:text-black text-sm"
          >
            ✕
          </button>
          <SkillChart stats={popup.stats} />
        </div>
      )}
    </div>
  );
};
