import { useEffect, useRef, useState } from "react";
import { select } from "d3-selection";
import { max } from "d3-array";
import { scaleSqrt } from "d3-scale";
import {
  forceSimulation,
  forceManyBody,
  forceCenter,
  forceCollide,
} from "d3-force";
import { QuestionStats, SkillProgress } from "../../types/ChartTypes";
import { loadSkillsProgress } from "../../utils/LoadData";
import { SkillChart } from "./SkillChart.tsx";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";

gsap.registerPlugin(Draggable, InertiaPlugin);

export const UserSkillsChart = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [popup, setPopup] = useState<{
    stats: QuestionStats;
  } | null>(null);

  const width = 800;
  const height = 630;

  useEffect(() => {
    loadSkillsProgress().then((skills: SkillProgress[] | null) => {
      if (!skills) return;

      const svg = select(svgRef.current);

      const maxProblems = max(skills, (d) => d.totalProblems) ?? 1;
      const radiusScale = scaleSqrt().domain([0, maxProblems]).range([20, 80]);

      // Clear any existing defs to avoid duplicates on re-render
      svg.select("defs").remove();

      // Append defs and clipPaths for each skill node
      const defs = svg.append("defs");

      const svgGroup = svg.selectAll("g");

      svgGroup.attr("role", "button").style("cursor", "pointer");

      defs
        .selectAll("clipPath")
        .data(skills)
        .join("clipPath")
        .attr("id", (_d, i) => `clip-${i}`)
        .attr("clipPathUnits", "userSpaceOnUse") // important!
        .append("rect")
        .attr("x", (d) => -radiusScale(d.totalProblems)) // center left
        .attr("width", (d) => radiusScale(d.totalProblems) * 2)
        .attr("height", (d) => {
          const r = radiusScale(d.totalProblems);
          const progressRatio = d.numProblemSolved / d.totalProblems;
          return r * 2 * progressRatio; // height proportional to progress
        })
        .attr("y", (d) => {
          const r = radiusScale(d.totalProblems);
          const progressRatio = d.numProblemSolved / d.totalProblems;
          return r - r * 2 * progressRatio; // shift rect from bottom to top inside circle
        });

      // Join groups to data
      const groups = svg
        .selectAll("g.skills")
        .data(skills)
        .join("g")
        .attr("class", "skills")
        .call((g) => {
          // Background full circle (track)
          g.append("circle")
            .attr("r", (d) => radiusScale(d.totalProblems))
            .attr("fill", "#ddd")
            .attr("opacity", 0.3)

            // Attach the click here
            .on("click", (_event, d: SkillProgress) => {
              setPopup({ stats: d.stats });
            });

          g.append("title")
            .style("font-weight", "bold")
            .text(
              (d) =>
                `${d.skill.id}\n${d.numProblemSolved} / ${d.totalProblems}`,
            );

          // Multi-line skill text label centered inside the circle
          g.append("text")
            .attr("text-anchor", "middle")
            .attr("pointer-events", "none") // text doesn’t interfere with mouse events
            .attr("fill", "black")
            .style("font-weight", "bold")
            .each(function (d) {
              const words = d.skill.id.split(" ");
              const r = radiusScale(d.totalProblems);
              const fontSize = Math.min(10, r / 3);

              const textEl = select(this)
                .style("font-size", `${fontSize}px`)
                .attr("y", -(words.length - 1) * fontSize * 0.55); // vertically center multiline

              words.forEach((word, i) => {
                textEl
                  .append("tspan")
                  .attr("x", 0)
                  .attr("dy", i === 0 ? "0" : `${fontSize * 1.1}px`)
                  .text(word);
              });
            });

          // Foreground partial fill circle clipped by clipPath
          g.append("circle")
            .attr("r", (d) => radiusScale(d.totalProblems))
            .attr("fill", "skyblue")
            .attr("clip-path", (_d, i) => `url(#clip-${i})`);
        });

      // Setup force simulation with charge, center, and collision forces
      const simulation = forceSimulation<SkillProgress>(skills)
        .force("charge", forceManyBody().strength(50))
        .force("center", forceCenter(width / 2, height / 2))
        .force(
          "collision",
          forceCollide<SkillProgress>().radius(
            (d) => radiusScale(d.totalProblems) + Math.random() * 10,
          ),
        )
        .on("tick", () => {
          groups.attr("transform", (d) => `translate(${d.x}, ${d.y})`);
        });

      //svgGroup.on("click", (d: SkillProgress) => {
      //console.log("Clicked:", d.skill);
      //});

      return () => {
        simulation.stop();
      };
    });
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: `${width}px`, height: `${height}px` }}
      className="relative bg-white flex justify-center items-center border rounded"
    >
      {/* Chart Popup */}
      {popup && (
        <div
          className="absolute z-50 bg-white border shadow-lg rounded p-3"
          style={{
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

      <svg
        ref={svgRef}
        width={width}
        height={height}
        className="border rounded bg-blue-50"
      />
    </div>
  );
};
