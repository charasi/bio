import { useFlipStore } from "../../utils/flipStore.ts";
import { useFlipAnimation } from "../../custom-hooks/flipAnimation.ts";
import { useState } from "react";
import { bookDesc } from "../../descriptions/BookServiceDesc.ts";

export const BookService = () => {
  const { flipState, setFlipState } = useFlipStore();
  const [isReady, setIsReady] = useState(false);
  const refTagElement: string = "#book-service";
  const animationOrder: string[] = ["text", "bullets", "image"];
  const targetOrder: string[][] = [
    ["#book-service-text", "#book-service-title-text"],
    ["ul > li.tech-concepts"],
    [".book-service-images"],
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
        <span className="text-white text-4xl font-bold mb-3">Book-Service</span>
        <img
          src="/pics/bookservice.png"
          id="book-service"
          alt="Book Service"
          data-flip-id="Book-Service"
          className="w-80 h-80 object-cover rounded-xl shadow-lg mb-3"
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
      <div className="h-auto w-0.5 bg-white/10 mx-3" />

      {/* Right Content */}
      <div className="flex flex-col space-y-3 w-full overflow-visible pr-2">
        {bookDesc.map((section, index) => (
          <div
            key={index}
            className="line flex flex-col text-white text-justify font-medium leading-relaxed transition-opacity duration-500 space-y-2"
            style={{ opacity: isReady ? 1 : 0 }}
          >
            {section.text && (
              <span id="book-service-text" className="mb-1">
                {section.text}
              </span>
            )}

            {section.bullets && (
              <div className="space-y-1">
                <span
                  id="book-service-title-text"
                  className="words text-lg font-semibold"
                >
                  {section.bullets.title}
                </span>
                <ul className="list-disc list-inside pl-5  space-y-1">
                  {section.bullets.items.map((item, i) => (
                    <li
                      key={i}
                      className="tech-concepts text-white/90 leading-relaxed ml-1"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {section.image && (
              <div className="flex flex-col items-start space-y-2 w-full">
                <img
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
