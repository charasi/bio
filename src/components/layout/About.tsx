import { useEffect } from "react";
import { UserProgressChart } from "../charts/UserProgressChart.tsx";
import { UserSkillsChart } from "../charts/UserSkillsChart.tsx";

export const About = () => {
  useEffect(() => {
    fetch("/api/leetcode") // <-- This triggers the API route
      .then((res) => res.json())
      .then((data) => {
        console.log("LeetCode Profile Data:", data);
      })
      .catch((err) => {
        console.error("Error fetching LeetCode data:", err);
      });
  }, []);
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

        <h1 className="flex justify-center text-white text-2xl font-bold">
          LeetCode Progress
        </h1>

        {/* LeetCode Progress */}
        <div className="flex justify-center items-start w-full pt-0">
          {/* Constrained container */}
          <div className="flex flex-col space-y-6 w-full max-w-[1000px] px-4">
            {/* First chart (fixed width) */}
            <div className="w-[600px] h-[350px] bg-white rounded-lg shadow-lg overflow-hidden flex justify-center items-center mx-auto">
              <UserProgressChart />
            </div>
          </div>
        </div>

        {/* Skills Chart */}
        <div
          className=" w-[800px] max-h-[80vh] bg-transparent
           rounded-lg shadow-lg overflow-y-auto overflow-x-hidden flex justify-center items-center
           mt-6 px-4 mx-auto"
        >
          <UserSkillsChart />
        </div>
      </div>
    </div>
  );
};
