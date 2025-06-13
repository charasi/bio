import raft from "/pics/raft.png";
import { useFlipStore } from "../../utils/flipStore.ts";
import { useFlipAnimation } from "../../hooks/flipAnimation.ts";

export const Raft = () => {
  const { flipState, setFlipState } = useFlipStore();
  const imgRef = useFlipAnimation({ flipState, setFlipState });

  return (
    <div className="flex bg-gradient-to-r from-cyan-950 to-indigo-950 min-h-screen overflow-hidden px-8 pt-24">
      {/* Left column */}
      <div className="flex flex-col items-center mr-8">
        <span className="text-white text-4xl font-bold mb-4">Raft</span>
        <img
          src={raft}
          alt="Raft"
          ref={imgRef}
          data-flip-id="Raft"
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
