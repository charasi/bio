import linkedinIcon from "/pics/linkedin.png";
import githubIcon from "/pics/github.png";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-gradient-to-r from-cyan-950 to-indigo-950 text-white p-3 text-base">
      <div className="flex items-center justify-between px-4 max-w-full">
        {/* Left-aligned icons */}
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/charles-asiama"
            target="_blank"
            className="transition duration-300 ease-in-out hover:scale-110"
          >
            <img src={linkedinIcon} alt="LinkedIn Icon" className="w-7 h-7" />
          </a>
          <a
            href="https://github.com/charasi"
            target="_blank"
            className="transition duration-300 ease-in-out hover:scale-110"
          >
            <img src={githubIcon} alt="GitHub Icon" className="w-7 h-7" />
          </a>
        </div>

        {/* Center-aligned text */}
        <div className="flex-1 text-center">© 2026 Charles Asiama.</div>

        {/* Right-side empty block, same width as icon group */}
        <div className="flex space-x-6 opacity-0 pointer-events-none">
          <div className="w-7 h-7" />
          <div className="w-7 h-7" />
        </div>
      </div>
    </footer>
  );
};
