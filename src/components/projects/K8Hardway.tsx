import { useFlipStore } from "../../utils/flipStore.ts";
import { useFlipAnimation } from "../../custom-hooks/flipAnimation.ts";
import { useState } from "react";
import { k8desc } from "../../descriptions/K8HardwayDesc.ts";

export const K8Hardway = () => {
  const { flipState, setFlipState } = useFlipStore();
  const [isReady, setIsReady] = useState(false);
  const refTagElement: string = "#k8hardway";
  const animationOrder: string[] = ["text", "text", "bullets"];
  const targetOrder: string[][] = [
    ["#k8-text"],
    [".k8-titles"],
    [".k8-bullets"],
  ];

  const { divRef } = useFlipAnimation({
    flipState,
    setFlipState,
    setIsReady,
    animationOrder,
    targetOrder,
    refTagElement,
  });

  return (
    <div
      ref={divRef}
      className="flex bg-gradient-to-r from-cyan-950 to-indigo-950 min-h-screen overflow-auto px-8 pt-8 pb-12"
    >
      {/* Left Column */}
      <div className="flex flex-col items-center mr-8 flex-shrink-0">
        <span className="text-white text-4xl font-bold mb-3">K8-Hardway</span>
        <img
          src="/pics/k8hardway.png"
          id="k8hardway"
          alt="K8-Hardway"
          data-flip-id="K8-Hardway"
          className="w-80 h-80 object-cover rounded-xl shadow-lg mb-3"
        />
        <a
          href="https://github.com/charasi/k8-hardway"
          target="_blank"
          className="btn bg-[#ffe500] rounded-tr-[8px] rounded-br-none
          rounded-tl-none rounded-bl-[8px] font-sans leading-[24px] py-2 px-6
          transition duration-300 ease-in-out hover:scale-110"
        >
          Launch
        </a>
      </div>

      {/* Divider */}
      <div className="h-auto w-0.5 bg-white/10 mx-3" />

      {/* Right Content */}
      <div className="flex flex-col space-y-3 w-full overflow-visible pr-2">
        {k8desc.map((section, index) => (
          <div
            key={index}
            className="line flex flex-col text-white text-justify font-medium leading-relaxed transition-opacity duration-500 space-y-2"
            style={{ opacity: isReady ? 1 : 0 }}
          >
            {/* Text Section */}
            {section.text && (
              <span id="k8-text" className="mb-1">
                {section.text}
              </span>
            )}

            {/* Bullet Section */}
            {section.bullets && (
              <div className="">
                <span
                  //id="raft-title-text"
                  id={`k8-title-text-${index + 1}`}
                  className="k8-titles words text-lg font-semibold"
                >
                  {section.bullets.title}
                </span>
                <ul className="k8-bullets list-disc pl-5 ">
                  {section.bullets.items.map((item, i) => (
                    <li
                      key={`bullets-${i}`}
                      className="text-white/90 leading-relaxed ml-1"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
