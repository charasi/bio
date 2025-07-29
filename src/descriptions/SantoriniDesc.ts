export const santoriniDesc = [
  {
    text:
      "Santorini-Pixi is a browser based reimagining of the Santorini board game, combining PixiJS, " +
      "React, Zustand, GSAP, and Spine 2D. The project explores interactive scene management, " +
      "isometric tile rendering, character animation, and state-driven UI in a " +
      "modern frontend architecture",
  },
  {
    bullets: {
      title: "NOTE: Game is still in progress.",
      items: [],
    },
  },
  {
    bullets: {
      title: "Rendering & Animation:",
      items: [
        "PixiJS v8: Scene graph rendering, layered object depth sorting, and dynamic tile stacking",
        "Spine Skeleton Animation: Custom animated tree via JSON + Atlas integration",
        "GSAP + PixiPlugin: Overlay animation and interactive transitions",
      ],
    },
  },
  {
    bullets: {
      title: "Map Composition & Assets:",
      items: [
        "Tiled JSON Map: Isometric grid projection with z-index aware object placement",
        "Tilemap Engine: CompositeTilemap for batched terrain rendering",
        "Displacement Mapping: Realistic animated ocean background with repeat-wrapped filters",
        "Texture Bundling: Preloading 20+ assets via PixiJS Assets.load()",
      ],
    },
  },
  {
    bullets: {
      title: "Architecture & Scene Management:",
      items: [
        "Overlay Scene Stack: Push/pop overlay design for IntroScene, MenuScene, etc.",
        "Zustand Global Store: Tracks game phase (Place, Move, Build), selected tile, " +
          "and game state flags",
        "SceneManager Class: Coordinates canvas elements and controls resizing/interaction flow",
      ],
    },
  },
  {
    bullets: {
      title: "UI & Layout:",
      items: [
        "Tailwind CSS + React Panels: Structured layout with top, bottom, and side panels " +
          "for gameplay actions",
        "Responsive Design: Dynamic resizing of isometric map within fixed container constraints",
      ],
    },
  },
  {
    bullets: {
      title: "Game Mechanics:",
      items: [
        "GridContainer Metadata: Each cell tracks its own 3D stack via height-based block positioning",
        "Message Flow System: Player feedback using global message state and animated transitions",
        "Turn Validation: Guardrails for correct player actions using gameplay.currentPlayer check",
      ],
    },
  },

  // Add more with different image paths
];

export const santoriniImages = [
  {
    image: "pics/santorini-image-1.png",
  },
  {
    image: "pics/santorini-image-2.png",
  },
];

//
export const santoriniImageIds: string[] = santoriniImages.map(
  (_, index) => `#santorini-image-${index + 1}`,
);
