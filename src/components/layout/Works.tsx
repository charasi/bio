import { projects } from "../misc/misc.ts";
import { Link } from "react-router-dom";

export const Works = () => {
  return (
    <div className="pt-4 flex flex-1 items-start bg-gradient-to-r from-cyan-950 to-indigo-950 min-h-screen">
      {/* Left column: Vertical "WORKS" and ↓ */}
      <div className="flex flex-col justify-center items-center min-w-[80px] pt-20 -ml-8">
        <span className="text-white text-4xl font-bold transform -rotate-90 origin-center">
          WORKS
        </span>
        <span className="pt-0 text-white text-8xl mt-6">↓</span>
      </div>

      {/* Vertical divider */}
      <div
        className={
          "inline-block h-[350px] w-0.5 bg-neutral-100 dark:bg-white/10 -ml-8"
        }
      ></div>

      {/* Right side content - stacked vertically */}
      <div className="relative flex flex-col space-y-6 pl-8">
        {/* First Ongoing heading - its own row */}
        <h1 className="text-white text-2xl font-bold">
          <span className="text-red-400 text-3xl">[ </span>
          Ongoing
          <span className="text-red-400 text-3xl"> ]</span>
        </h1>

        {/* Grid section - starts on a new row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <Link to={project.link} key={project.link}>
              <div className="flex flex-col items-center">
                <img
                  src={project.image}
                  alt={project.name}
                  className="transition duration-300 ease-in-out hover:scale-105 w-88 h-88 object-cover rounded-xl shadow-lg"
                />
                <span className="mt-2 text-white text-lg font-medium">
                  {project.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
