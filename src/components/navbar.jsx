import React from 'react';

const Navbar = ({ scrollToSection }) => {
  return (
    <nav className="flex justify-center items-center fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[300px] z-[1000] bg-transparent py-[15px] ">
      <div className="flex justify-between items-center w-full px-5 py-2.5 rounded-[50px] bg-white border border-[#000000a4] shadow-[0px_4px_10px_rgba(0,0,0,0.315)]">
        <div className="flex gap-[15px] justify-center flex-1">
          <button
            onClick={() => scrollToSection('home')}
            className="text-[#525050] no-underline text-[14px] font-medium transition-colors duration-300 px-3 py-2 rounded hover:text-black "
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-[#525050] no-underline text-[14px] font-medium transition-colors duration-300 px-3 py-2 rounded hover:text-black"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-[#525050] no-underline text-[14px] font-medium transition-colors duration-300 px-3 py-2 rounded hover:text-black "
          >
            Projects
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
