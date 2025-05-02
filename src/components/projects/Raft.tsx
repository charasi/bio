import raft from "/pics/raft.png";
import { useEffect, useState } from "react";

export const Raft = () => {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setAnimateIn(true);
  }, []);

  return (
    <div className="flex bg-gradient-to-r from-cyan-950 to-indigo-950 min-h-screen overflow-hidden px-8 pt-24">
      {/* Left column with title and image */}
      <div className="flex flex-col items-center mr-8">
        {/* Title aligned to top */}
        <span className="text-white text-4xl font-bold mb-8">Raft</span>

        {/* Animated image */}
        <div
          className={`transition-all duration-1000 ${
            animateIn ? "translate-x-0 opacity-100" : "translate-x-32 opacity-0"
          }`}
        >
          <img
            src={raft}
            alt="Raft"
            className="w-80 h-80 object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="h-[450px] w-0.5 bg-white/10 mr-8" />

      {/* Right content */}
      <div className="flex flex-col space-y-6">
        <h1 className="text-white text-2xl font-bold">
          <span className="text-red-400 text-3xl">[ </span>
          Ongoing
          <span className="text-red-400 text-3xl"> ]</span>
        </h1>
        <p className="text-white max-w-xl">
          Implementation of the Raft consensus algorithm to ensure distributed
          agreement among nodes.
        </p>
      </div>
    </div>
  );
};
