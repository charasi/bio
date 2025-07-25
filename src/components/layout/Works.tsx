import { useEffect, useRef } from "react";
import { projects } from "../../utils/misc.ts";
import { useNavigate } from "react-router-dom";
import { useFlipStore } from "../../utils/flipStore.ts";
import Flip from "gsap/Flip";

export const Works = () => {
  const { flipState, setFlipState } = useFlipStore();
  const navigate = useNavigate();

  // Store refs for each project by name
  const flipRefs = useRef<Record<string, HTMLElement | null>>({});

  const handleClick = (link: string, flipId: string) => {
    const element = flipRefs.current[flipId];
    if (!element) return;

    const state = Flip.getState(element);
    setFlipState(state);
    navigate(link);
  };

  const hasAnimated = useRef(false);

  useEffect(() => {
    //(!hasAnimated.current && flipState)
    if (!hasAnimated.current && flipState) {
      const elements = Object.values(flipRefs.current).filter(Boolean);
      if (elements.length > 0) {
        hasAnimated.current = true;
        Flip.from(flipState, {
          targets: elements,
          duration: 1,
          stagger: 0.2,
          ease: "power1.inOut",
        });
        setFlipState(null);
      }
    }
  }, []);

  return (
    <div className="pt-4 flex flex-1 items-start bg-gradient-to-r from-cyan-950 to-indigo-950 min-h-screen">
      {/* Left column */}
      <div className="flex flex-col justify-center items-center min-w-[80px] pt-20 -ml-8">
        <span className="text-white text-4xl font-bold transform -rotate-90 origin-center">
          WORKS
        </span>
        <span className="pt-0 text-white text-8xl mt-6">↓</span>
      </div>

      {/* Divider */}
      <div className="inline-block h-[350px] w-0.5 bg-neutral-100 dark:bg-white/10 -ml-8"></div>

      {/* Right side */}
      <div className="relative flex flex-col space-y-6 pl-8">
        <h1 className="text-white text-2xl font-bold">
          <span className="text-red-400 text-3xl">[ </span>
          Ongoing
          <span className="text-red-400 text-3xl"> ]</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.link}
              onClick={() => handleClick(project.link, project.name)}
              className="flex flex-col items-center cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.name}
                data-flip-id={project.name}
                ref={(el) => {
                  flipRefs.current[project.name] = el;
                }}
                className="w-88 h-88 object-cover rounded-xl shadow-lg hover:scale-105"
              />
              <span className="mt-2 text-white text-lg font-medium">
                {project.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
