export const algoDesc = [
  {
    text:
      "AlgoWB is an interactive algorithm visualization platform I built to make learning " +
      "data structures and algorithms more intuitive, visual, and engaging. Instead of " +
      "reading static explanations or watching fixed animations, users can write their own " +
      "code and watch it execute step by step through dynamic visualizations.",
  },
  {
    text:
      "AlgoWB uses the TypeScript Compiler API to instrument user-written TypeScript " +
      "code. This instrumentation generates structured debug logs that capture " +
      "variable updates, control-flow decisions, and function calls. These logs are " +
      "then replayed through the AlgoWB visualization engine, allowing users to see " +
      "how their algorithms evolve step by step.",
  },
  {
    bullets: {
      title: "Core Features:",
      items: [
        "Debugger Pane that displays call stacks, watch variables, and execution logs, " +
          "allowing users to review code behavior step-by-step",
        "Visualization Pane powered by PixiJS that animates arrays, stacks, queues, " +
          "trees, graphs, and other data structures as the program executes",
        "Monaco Editor with syntax highlighting, autocomplete, and error " +
          "feedback for writing typescript code directly inside the platform",
        "TypeScript instrumentation engine that transforms user code into an " +
          "event-emitting version for replay and visualization",
        "Support for essential programming constructs (variables, conditionals, loops, " +
          "function calls, and more to come) to provide accurate algorithm tracing",
      ],
    },
  },
  {
    text:
      "AlgoWB brings together code, debugging, and visual storytelling to help learners " +
      "build strong intuition for algorithms",
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
];

//
export const algoWBImageIds: string[] = algoWBImages.map(
  (_, index) => `#algoWB-image-${index + 1}`,
);
