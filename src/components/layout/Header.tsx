import { Link, useLocation } from "react-router-dom";
import emailIcon from "/pics/email.png";
import resume from "/casiama.pdf";

export const Header = () => {
  const location = useLocation();

  // Check if current route is a specific project under /works/
  const isProjectPage =
    location.pathname.startsWith("/works/") && location.pathname !== "/works";
  return (
    <header className="w-full h-32 bg-gradient-to-r from-orange-400 to-indigo-950">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center h-full">
        {/* Left section: name and links */}
        <div className="flex items-center space-x-4 text-white font-bold text-sm sm:text-base">
          <Link to="/works" className="hover:underline">
            {isProjectPage ? "← Back" : "Charles Asiama"}
          </Link>
          {/* Conditionally render Resume and About only if not on project page */}
          {!isProjectPage && (
            <>
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Resume
              </a>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </>
          )}
        </div>

        {/* Right section: email icon */}
        <a
          href="mailto:casiama@alumni.cmu.edu"
          className="transition duration-300 ease-in-out hover:scale-110"
        >
          <img
            src={emailIcon}
            alt="Email Icon"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
        </a>
      </div>
    </header>
  );
};
