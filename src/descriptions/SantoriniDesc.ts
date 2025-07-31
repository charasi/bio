export const santoriniDesc = [
  {
    text:
      "Santorini is a browser based reimagining of the Santorini board game, combining PixiJS, " +
      "React, Zustand, GSAP, and Spine 2D. The project explores interactive scene management, " +
      "isometric tile rendering, character animation, and state-driven UI in a " +
      "modern frontend architecture.",
  },
  {
    bullets: {
      title: "NOTE: Development is still in progress.",
      items: [],
    },
  },
  {
    bullets: {
      title: "Rendering & Animation:",
      items: [
        "PixiJS for scene graph rendering, layered object depth sorting, and dynamic tile stacking",
        "Spine skeleton animation for custom animated tree via JSON + Atlas integration",
        "GSAP + PixiPlugin for overlay animation and interactive transitions",
        "Tiled JSON Map for isometric grid projection with z-index aware object placement",
      ],
    },
  },
  {
    bullets: {
      title: "Architecture & Scene Management:",
      items: [
        "Overlay Scene Stack to push/pop overlay design for IntroScene, MenuScene, etc.",
        "Zustand Global Store tracks game phase (Place, Move, Build), selected tiles, " +
          "and game state flags",
        "SceneManager Class tp coordinate canvas elements and control resizing/interaction flow",
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
