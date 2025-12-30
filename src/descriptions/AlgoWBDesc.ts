export const algoDesc = [
  {
    text:
      "AlgoWB is an interactive algorithm visualization platform built to make learning " +
      "data structures and algorithms more intuitive and engaging. Instead of " +
      "reading static explanations, users write their own code and watch it " +
      "execute step-by-step through dynamic visualizations and real-time performance metrics.",
  },
  {
    text:
      "AlgoWB features a custom execution engine that instruments user-written TypeScript " +
      "code. This generates structured debug logs capturing variable updates, " +
      "control-flow decisions, and memory states. These logs drive the visualization " +
      "engine, allowing users to see both the logic and the efficiency of their algorithms.",
  },
  {
    bullets: {
      title: "Core Features:",
      items: [
        "Interactive Debugger Pane displaying call stacks, scoped variables, and execution " +
          "logs for granular code inspection",
        "High-performance Visualization Pane powered by PixiJS with object pooling and " +
          "virtualization to smoothly animate complex data structures",
        "Real-time Time Complexity Profiler that generates Big O notation graphs " +
          "and tracks operation counts to analyze algorithm efficiency",
        "Custom Interpreter architecture with an integrated garbage collector to " +
          "manage memory safety and object lifecycles during execution",
        "Monaco Editor integration providing a full IDE experience with syntax " +
          "highlighting, autocomplete, and error feedback",
      ],
    },
  },
  {
    text:
      "AlgoWB bridges the gap between coding, debugging, and theoretical analysis, " +
      "helping engineers build a deep, visual intuition for algorithmic complexity.",
  },
];

export const algoWBImages = [
  {
    image: "pics/algoWB-image-1.png",
  },
  {
    image: "pics/algoWB-image-2.png",
  },
  {
    image: "pics/algoWB-image-3.png",
  },
  {
    image: "pics/algoWB-image-4.png",
  },
];

export const algoWBImageIds: string[] = algoWBImages.map(
  (_, index) => `#algoWB-image-${index + 1}`,
);
