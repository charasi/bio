import { useFlipStore } from "../../utils/flipStore.ts";
import { useFlipAnimation } from "../../hooks/flipAnimation.ts";
import { useState } from "react";
import { bookDesc } from "../../descriptions/BookServiceDesc.ts";

export const BookService = () => {
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
        <span className="text-white text-4xl font-bold mb-4">Book-Service</span>
        <img
          src="/pics/bookservice.png"
          alt="Book Service"
          ref={imgRef}
          data-flip-id="Book-Service"
          className="w-80 h-80 object-cover rounded-xl shadow-lg mb-4"
        />
        <a
          href="https://github.com/charasi/book-service"
          target="_blank"
          className="btn bg-[#ffe500] rounded-tr-[8px] rounded-br-none
          rounded-tl-none rounded-bl-[8px] font-sans leading-[24px] py-2 px-6
          transition duration-300 ease-in-out hover:scale-110"
        >
          Launch
        </a>
      </div>

      {/* Divider */}
      <div className="h-[450px] w-0.5 bg-white/10 mr-8" />

      {/* Right Content */}
      <div ref={textRef} className="flex flex-col space-y-6 max-w-4xl">
        {bookDesc.map((section, index) => (
          <div
            key={index}
            className="line flex flex-col text-white text-justify font-medium leading-relaxed"
            style={{ opacity: isReady ? 1 : 0 }}
          >
            {section.text && <span className="words">{section.text}</span>}

            {section.bullets && (
              <div className="mt-4 space-y-1">
                {/* Add "words" class here */}
                <span className="words text-lg font-semibold">
                  {section.bullets.title}
                </span>
                <ul className="list-disc list-inside pl-6 text-white/90">
                  {section.bullets.items.map((item, i) => (
                    <li key={i} className="words">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {section.image && (
              <div className="flex flex-col items-start space-y-4">
                {/* example container */}
                <img
                  src={section.image}
                  alt={`Section image ${index + 1}`}
                  className="inline-img h-[300px] w-[600px] object-cover mt-4"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
