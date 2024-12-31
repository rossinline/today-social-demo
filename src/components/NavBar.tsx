import { Home, BookUser, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Handlers for navigation
  const handleNavigateToHome = () => {
    navigate("/home");
  };

  const handleNavigateToProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="flex flex-col items-center">
      {/* Logo Container Standard */}
      <div className="w-20 h-20 hover:cursor-pointer bg-white/30 rounded-widget ring-1 ring-black/5 mb-4 items-center justify-center shadow-lg hidden lg:flex" title="Today">
        <span className="text-gray1 font-bold text-xl" aria-label="Today Logo Text" title="Today">Today</span>
      </div>

      {/* Navigation Bar Container with responsive setup */}
      <div className="z-20 w-full h-20 bg-white/90 rounded-t-widget shadow-lg ring-1 ring-black/5 p-4 lg:mb-4 fixed bottom-0 left-0 lg:relative lg:w-20 lg:h-auto lg:flex-col lg:items-center lg:space-y-4 lg:p-4 lg:bg-white/30 lg:rounded-widget">
        <ul className="flex justify-center items-center w-full lg:flex-col lg:space-x-0">
          <li>
            {/* Logo Container for Mobile */}
            <div className="w-12 h-12 hover:cursor-pointer bg-white/30 rounded-[15px] ring-1 ring-black/5 items-center justify-center shadow-lg flex lg:hidden mx-2">
              <span className="text-gray1 font-bold text-xs" aria-label="Today Logo Text" title="Today">Today</span>
            </div>
          </li>
          <li>
            <button
              onClick={handleNavigateToHome}
              aria-label="Home Page Link"
              title="Home"
              className="flex items-center justify-center w-12 h-12 rounded-[15px] border border-gray1 hover:opacity-50 transition duration-300 mx-2 lg:my-2"
            >
              <Home color="#6c757d" size={25} />
            </button>
          </li>
          <li>
            <button
              onClick={handleNavigateToProfile}
              aria-label="Profile Page Button"
              title="Profile"
              className="flex items-center justify-center w-12 h-12 rounded-[15px] border border-gray1 hover:opacity-50 transition duration-300 mx-2 lg:my-2"
            >
              <BookUser color="#6c757d" size={25} />
            </button>
          </li>
          <li>
            <button
              aria-label="Settings Button"
              title="Settings"
              className="flex items-center justify-center w-12 h-12 rounded-[15px] border border-gray1 hover:opacity-50 transition duration-300 mx-2 lg:my-2"
            >
              <Settings color="#6c757d" size={25} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
