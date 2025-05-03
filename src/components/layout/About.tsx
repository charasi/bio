import resume from "/casiama.pdf";

export const About = () => {
  return (
    <div className="pt-4 flex flex-1 items-start bg-gradient-to-r from-cyan-950 to-indigo-950 min-h-screen">
      {/* Left column */}
      <div className="flex flex-col justify-center items-center min-w-[80px] pt-20 -ml-8">
        <span className="text-white text-4xl font-bold transform -rotate-90 origin-center">
          ABOUT
        </span>
      </div>

      {/* Vertical divider */}
      <div className="inline-block h-[350px] w-0.5 bg-neutral-100 dark:bg-white/10 -ml-8"></div>

      {/* Right side */}
      <div className="relative flex flex-col space-y-6 pl-8 pr-8 w-full">
        <p className="text-white">
          Entry-level Software Engineer focused on scalable applications,
          cloud-native systems, and backend development. Proficient in Go,
          Python, and TypeScript, with hands-on experience in API development,
          databases, and web technologies. Dedicated to continuous learning and
          innovative problem-solving.
        </p>

        {/* Horizontal divider */}
        <hr className="border-t border-white/20 my-4" />

        <h1 className="text-white text-2xl font-bold">
          <span className="text-red-400 text-3xl">[ </span>
          Resume
          <span className="text-red-400 text-3xl"> ]</span>
        </h1>

        {/* Resume iframe with white background */}
        <div className="w-full h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe src={resume} title="Resume" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};
