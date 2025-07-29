import { useFlipStore } from "../../utils/flipStore.ts";
import { useFlipAnimation } from "../../custom-hooks/flipAnimation.ts";
import { useState } from "react";
import { pending, raftDesc } from "../../descriptions/RaftDesc.ts";

export const Raft = () => {
  const { flipState, setFlipState } = useFlipStore();
  const [isReady, setIsReady] = useState(false);
  const refTagElement: string = "#raft";
  const animationOrder: string[] = [
    "text",
    "image",
    "text",
    "bullets",
    "text",
    "text",
    "text",
    "bullets",
  ];
  const targetOrder: string[][] = [
    ["#raft-text"],
    [".raft-images"],
    [".raft-titles"],
    [".raft-bullets"],
    [".pending-title"],
    [".pending-text"],
    [".pending-bullets-title"],
    [".pending-bullets"],
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
        <span className="text-white text-4xl font-bold mb-3">Raft</span>
        <img
          src="/pics/raft.png"
          id="raft"
          alt="Raft"
          data-flip-id="Raft"
          className="w-80 h-80 object-cover rounded-xl shadow-lg mb-3"
        />
        <a
          href="https://github.com/charasi/raft-consensus"
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
        {raftDesc.map((section, index) => (
          <div
            key={index}
            className="line flex flex-col text-white text-justify font-medium leading-relaxed transition-opacity duration-500 space-y-2"
            style={{ opacity: isReady ? 1 : 0 }}
          >
            {/* Text Section */}
            {section.text && (
              <span id="raft-text" className="mb-1">
                {section.text}
              </span>
            )}

            {/* Bullet Section */}
            {section.bullets && (
              <div className="space-y-1">
                <span
                  //id="raft-title-text"
                  id={`raft-title-text-${index + 1}`}
                  className="raft-titles words text-lg font-semibold"
                >
                  {section.bullets.title}
                </span>
                <ul className="list-disc list-inside pl-5 text-white/90">
                  {section.bullets.items.map((item, i) => (
                    <li key={`bullets-${i}`} className="raft-bullets">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Image Section */}
            {section.image && (
              <div className="flex flex-col items-start space-y-2 w-full">
                <img
                  src={section.image}
                  alt={`Section image ${index + 1}`}
                  className="raft-images w-full max-w-[600px] object-cover mt-1 rounded-md shadow"
                />
              </div>
            )}
          </div>
        ))}

        {/* Pending Work Section */}
        <div className="flex flex-col text-white mt-4">
          {pending.map((section, index) => (
            <div
              key={`pending-${index}`}
              className="transition-opacity duration-500"
              style={{ opacity: isReady ? 1 : 0 }}
            >
              {section.title && (
                <h2 className="pending-title text-center text-xl font-bold text-white">
                  {section.title}
                </h2>
              )}

              {section.text && (
                <p className="pending-text text-white/90 text-justify leading-relaxed mb-3">
                  {section.text}
                </p>
              )}

              {section.bullets && (
                <div className="space-y-1">
                  <span className="pending-bullets-title words text-lg font-semibold">
                    {section.bullets.title}
                  </span>
                  <ul className="pending-bullets list-inside pl-5">
                    {section.bullets.items.map((item, i) => (
                      <li
                        key={`bullets-${i}`}
                        className="raft-bullets text-white/90 leading-relaxed ml-1"
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
    </div>
  );
};
