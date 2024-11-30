import React from "react";
import navbg from "../assets/more/15.jpg";
import logo from "../assets/more/logo1.png";

const Navbar = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center py-2 flex items-center gap-1 justify-center"
        style={{ backgroundImage: `url(${navbg})` }}
      >
        <img className="w-12 h-12" src={logo} alt="" />
        <h2 className=" text-3xl   text-white">Espresso Emporium</h2>
      </div>
    </div>
  );
};

export default Navbar;
