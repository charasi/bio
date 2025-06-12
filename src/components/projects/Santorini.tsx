import santorini from "/pics/santorini.png";
import { useEffect, useRef } from "react";
import { useFlipStore } from "../../utils/flipStore.ts";
import { Flip } from "gsap/Flip";

export const Santorini = () => {
  const { flipState, setFlipState } = useFlipStore();
  const imgRef = useRef(null);

  useEffect(() => {
    if (flipState && imgRef.current) {
      Flip.from(flipState, {
        targets: imgRef.current,
        duration: 1,
        stagger: 0.2,
        ease: "power2.inOut",
        //absolute: true,
        //fade: true,
      });
      setFlipState(null);
    }
  }, [flipState, setFlipState]);

  return (
    <div className="flex bg-gradient-to-r from-cyan-950 to-indigo-950 min-h-screen overflow-hidden px-8 pt-24">
      {/* Left column */}
      <div className="flex flex-col items-center mr-8">
        <span className="text-white text-4xl font-bold mb-4">Santorini</span>
        <img
          src={santorini}
          alt="Santorini"
          ref={imgRef}
          data-flip-id="Santorini"
          className="w-64 h-64 object-cover rounded-xl shadow-lg mb-4"
        />
        <a
          href="https://github.com/charasi/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-[#ffe500] rounded-tr-[8px] rounded-br-none
          rounded-tl-none rounded-bl-[8px] font-sans leading-[24px] py-2 px-6
          transition duration-300 ease-in-out hover:scale-110"
        >
          Launch
        </a>
      </div>

      {/* Divider */}
      <div className="h-[450px] w-0.5 bg-white/10 mr-8" />

      {/* Right content */}
      <div className="flex flex-col space-y-6">
        <p className="text-white max-w-xl">
          Implementation of the Santorini board game using modern web
          technologies.
        </p>
      </div>
    </div>
  );
};
