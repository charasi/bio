import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { loadUserProgress } from "../../utils/LoadData.ts";
import { actions, getChartConfig } from "../../utils/UserProgress.ts";

export const UserProgressChart = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    const renderChart: () => Promise<void> = async (): Promise<void> => {
      const stats = await loadUserProgress();
      if (!stats || stats.numAcceptedQuestions.length === 0) return;

      const chartConfig = getChartConfig(stats);

      if (canvasRef.current) {
        if (chartRef.current) {
          chartRef.current.destroy();
        }
        chartRef.current = new Chart(canvasRef.current, chartConfig);
      }
    };

    renderChart().then();
  }, []);

  const handleMouseEnter = () => {
    if (chartRef.current) {
      const showHoverText = actions.find(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (a: any) => a.name === "Show Hover Text",
      );
      showHoverText?.handler(chartRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (chartRef.current) {
      const showDefaultText = actions.find(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (a: any) => a.name === "Show Default Text",
      );
      showDefaultText?.handler(chartRef.current);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="block w-[300px] h-[300px]"
        onMouseOver={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};
