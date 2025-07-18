import { ChartConfiguration, ChartData, ChartDataset } from "chart.js";
import { QuestionStats } from "../types/ChartTypes";
import annotationPlugin from "chartjs-plugin-annotation";
import { Chart } from "chart.js";

Chart.register(annotationPlugin);

export let actions: any;

export const getChartConfig = (
  stats: QuestionStats,
): ChartConfiguration<"doughnut", number[], string> => {
  const accepted: number[] = stats.numAcceptedQuestions.map((d) => d.count);

  const labels: string[] = stats.numAcceptedQuestions.map((d, idx) => {
    const difficulty =
      d.difficulty.charAt(0).toUpperCase() +
      d.difficulty.slice(1).toLowerCase();
    const accepted = d.count;
    const total =
      accepted +
      stats.numFailedQuestions[idx].count +
      stats.numUntouchedQuestions[idx].count;
    return `${difficulty} ${accepted}/${total}`;
  });

  const beatsPerc: number = stats.totalQuestionBeatsPercentage;

  const dataset: ChartDataset<"doughnut", number[]> = {
    label: "Completed Challenges",
    data: accepted,
    backgroundColor: ["#00ffbf", "#ff9900", "#ff0000"],
    hoverOffset: 4,
    borderWidth: 5,
  };

  const acceptedTotal = stats.numAcceptedQuestions.reduce(
    (sum, d) => sum + d.count,
    0,
  );
  const totalQuestions = stats.numAcceptedQuestions.reduce(
    (sum, d, idx) =>
      sum +
      d.count +
      stats.numFailedQuestions[idx].count +
      stats.numUntouchedQuestions[idx].count,
    0,
  );

  const chartData: ChartData<"doughnut", number[], string> = {
    labels,
    datasets: [dataset],
  };

  const defaultAnnotation = {
    dLabel: {
      type: "doughnutLabel",
      content: [`${acceptedTotal} / ${totalQuestions}`, "✔ Solved"],
      font: [
        { size: 36, weight: "bold" }, // count
        { size: 24, weight: "bold" }, // ratio
      ],
      color: ["#333", "#00c853"],
      position: "center",
      textAlign: "center",
      xAdjust: 0,
      yAdjust: 0,
    },
  } as any;

  const hoveredAnnotation = {
    dLabel: {
      type: "doughnutLabel",
      content: ["Beats", `${beatsPerc}%`],
      font: [
        { size: 36, weight: "bold" }, // count
        { size: 24, weight: "bold" }, // ratio
      ],
      color: ["#333", "#ff0000"],
      position: "center",
      textAlign: "center",
      xAdjust: 0,
      yAdjust: 0,
    },
  } as any;

  actions = [
    {
      name: "Show Hover Text",
      handler(chart: any) {
        chart.options.plugins.annotation.annotations = hoveredAnnotation;
        chart.update();
      },
    },
    {
      name: "Show Default Text",
      handler(chart: any) {
        chart.options.plugins.annotation.annotations = defaultAnnotation;
        chart.update();
      },
    },
  ];

  return {
    type: "doughnut",
    data: chartData,
    options: {
      responsive: true,
      cutout: "85%",
      plugins: {
        legend: {
          position: "top",
          labels: {
            boxWidth: 20,
            font: {
              weight: "bold",
            },
          },
        },
        annotation: {
          annotations: defaultAnnotation,
        },
      },
    },
  };
};
