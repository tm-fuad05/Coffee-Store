import React, { useState, useEffect } from "react";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e) => {
    e.stopPropagation(); // Prevent closing when clicking the toggle button
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    if (isOpen) setIsOpen(false);
  };

  useEffect(() => {
    // Add a click event to close the navbar when clicking outside
    document.addEventListener("click", handleClose);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      {/* Navbar toggle button */}
      <button
        className="p-2 bg-blue-500 text-white rounded-md"
        onClick={handleToggle}
      >
        Menu
      </button>

      {/* Navbar menu */}
      <div
        className={`absolute top-12 left-0 w-40 bg-white shadow-md rounded-md transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
      >
        <a href="#" className="block px-4 py-2 hover:bg-gray-200">
          Home
        </a>
        <a href="#" className="block px-4 py-2 hover:bg-gray-200">
          About
        </a>
        <a href="#" className="block px-4 py-2 hover:bg-gray-200">
          Services
        </a>
        <a href="#" className="block px-4 py-2 hover:bg-gray-200">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar2;
