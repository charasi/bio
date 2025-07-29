import { useRef, useState } from "react";
import { UserProgressChart } from "../charts/UserProgressChart.tsx";
import { UserSkillsChart } from "../charts/UserSkillsChart.tsx";
import { SplitText } from "gsap/SplitText";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const About = () => {
  const displayRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useGSAP(
    () => {
      if (!displayRef.current) return;

      document.fonts.ready.then(() => {
        const splitMessage = SplitText.create(displayRef.current, {
          type: "words",
        });

        gsap.fromTo(
          splitMessage.words,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            duration: 0.9,
            ease: "power2.out",
            onStart: () => setIsReady(true), // signal ready once animation starts
          },
        );
      });
    },
    { dependencies: [], scope: displayRef },
  );

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
        <p
          className="text-white text-justify font-medium leading-relaxed max-w-4xl"
          style={{ opacity: isReady ? 1 : 0 }}
          ref={displayRef}
        >
          Hi, I’m Charles Asiama, a software engineer with a passion for
          building scalable systems, automating infrastructure, and creating
          robust fullstack applications. I’ve worked across a wide range of
          technologies from Go, Python, and TypeScript to React, PixiJS,
          Spine2D, and GSAP, as well as infrastructure tools like Kubernetes,
          AWS, and GCP.
          <br />
          <br />
          My journey into tech began in quality assurance, where I started with
          manual testing and eventually moved into automation. That experience
          gave me a strong appreciation for clean, reliable systems and
          ultimately inspired me to transition into software engineering. I
          began by studying computer science at the University of
          Wisconsin–Madison to build a solid foundation, then deepened my
          expertise at Carnegie Mellon University, where I earned a master’s
          degree in Mobile and IoT Engineering with a focus on distributed
          systems.
          <br />
          <br />
          I’m constantly exploring new technologies, building side projects,
          learning how systems work under the hood, and sharpening my
          problem-solving skills through LeetCode. Thanks for stopping by,
          please feel free to explore my work or reach out if something sparks
          your interest.
        </p>

        {/* Divider */}
        <hr className="border-t border-white/20 my-4" />

        <h1 className="flex justify-center text-white text-2xl font-bold">
          LeetCode Progress
        </h1>

        <div className="flex justify-center items-start w-full pt-0">
          <div className="flex flex-col space-y-6 w-full max-w-[1000px] px-4">
            <div className="w-[600px] h-[350px] bg-white rounded-lg shadow-lg overflow-hidden flex justify-center items-center mx-auto">
              <UserProgressChart />
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <UserSkillsChart />
        </div>
      </div>
    </div>
  );
};
