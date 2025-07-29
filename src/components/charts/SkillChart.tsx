import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { QuestionStats } from "../../types/ChartTypes.ts";
import { getSkillChartConfig } from "../../utils/SkillProgress.ts";

export const SkillChart = ({ stats }: { stats: QuestionStats }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    const renderChart = () => {
      if (
        !stats ||
        !stats.numAcceptedQuestions ||
        stats.numAcceptedQuestions.length === 0
      )
        return;

      const chartConfig = getSkillChartConfig(stats);

      if (canvasRef.current) {
        if (chartRef.current) {
          chartRef.current.destroy();
        }
        chartRef.current = new Chart(canvasRef.current, chartConfig);
      }
    };

    renderChart();
  }, [stats]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <canvas ref={canvasRef} className="block w-[300px] h-[300px]" />
    </div>
  );
};
