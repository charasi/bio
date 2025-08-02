import { useFlipStore } from "../../utils/flipStore.ts";
import { useFlipAnimation } from "../../custom-hooks/flipAnimation.ts";
import { useState } from "react";
import {
  bioDesc,
  bioImages,
  bioImageIds,
} from "../../descriptions/BioInformaticsDesc.ts";

export const BioInformatics = () => {
  const { flipState, setFlipState } = useFlipStore();
  const [isReady, setIsReady] = useState(false);
  const refTagElement: string = "#bio-informatics";
  const animationOrder: string[] = ["text", "bullets", "image"];
  const targetOrder: string[][] = [
    ["#bio-informatics-text", "#bio-informatics-title-text"],
    [".bio-bullets"],
    bioImageIds,
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
        <span className="text-white text-4xl font-bold mb-3">
          BioInformatics
        </span>
        <img
          src="/pics/bioinformatics.png"
          id="bio-informatics"
          alt="Bio Informatics"
          data-flip-id="BioInformatics"
          className="w-80 h-80 object-cover rounded-xl shadow-lg mb-3"
        />
        <a
          href="https://github.com/charasi/informatics-bio"
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
        {bioDesc.map((section, index) => (
          <div
            key={index}
            className="line flex flex-col text-white text-justify font-medium leading-relaxed transition-opacity duration-500 space-y-2"
            style={{ opacity: isReady ? 1 : 0 }}
          >
            {section.text && (
              <span id="bio-informatics-text" className="mb-1">
                {section.text}
              </span>
            )}

            {section.bullets && (
              <div className="space-y-1">
                <span
                  id="bio-informatics-title-text"
                  className="words text-lg font-semibold"
                >
                  {section.bullets.title}
                </span>
                <ul className="bio-bullets list-disc pl-5 ">
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

        {/* images */}
        {bioImages.map((section, index) => (
          <div
            key={index}
            className="line flex flex-col text-white text-justify font-medium leading-relaxed transition-opacity duration-500 space-y-2"
            style={{ opacity: isReady ? 1 : 0 }}
          >
            {section.image && (
              <div className="flex flex-col items-start space-y-2 w-full">
                <img
                  id={`bio-image-${index + 1}`}
                  src={section.image}
                  alt={`Section image ${index + 1}`}
                  className="book-service-images w-full max-w-[600px] object-cover mt-1 rounded-md shadow"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
