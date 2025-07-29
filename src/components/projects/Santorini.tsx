import { useFlipStore } from "../../utils/flipStore.ts";
import { useFlipAnimation } from "../../custom-hooks/flipAnimation.ts";
import { useState } from "react";
import { bookDesc } from "../../descriptions/BookServiceDesc.ts";

export const Santorini = () => {
  const { flipState, setFlipState } = useFlipStore();
  const [isReady, setIsReady] = useState(false);

  const { imgRef, textRef } = useFlipAnimation({
    flipState,
    setFlipState,
    setIsReady,
  });

  return (
    <div className="flex bg-gradient-to-r from-cyan-950 to-indigo-950 min-h-screen overflow-hidden px-8 pt-24 pb-12">
      {/* 🔹 Left Column */}
      <div className="flex flex-col items-center mr-8">
        <span className="text-white text-4xl font-bold mb-4">Santorini</span>
        <img
          src="/pics/santorini.png"
          alt="Santorini"
          ref={imgRef}
          data-flip-id="Santorini"
          className="w-80 h-80 object-cover rounded-xl shadow-lg mb-4"
        />
        <a
          href="https://github.com/charasi/"
          target="_blank"
          className="btn bg-[#ffe500] rounded-tr-[8px] rounded-br-none
          rounded-tl-none rounded-bl-[8px] font-sans leading-[24px] py-2 px-6
          transition duration-300 ease-in-out hover:scale-110"
        >
          Launch
        </a>
      </div>

      {/* 🔸 Divider */}
      <div className="h-[450px] w-0.5 bg-white/10 mr-8" />

      {/* 📝 Right Content */}
      <div ref={textRef} className="flex flex-col space-y-6 max-w-4xl">
        {bookDesc.map((section, index) => (
          <div
            key={index}
            className="line flex flex-col text-white text-justify font-medium leading-relaxed"
            style={{ opacity: isReady ? 1 : 0 }}
          >
            {section.text && <span className="words">{section.text}</span>}
            {section.image && (
              <img
                src={section.image}
                alt={`Section image ${index + 1}`}
                className="inline-img h-48 w-96 object-cover mt-4"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
