import React from "react";
import bg from "../assets/more/3.png";
const Banner = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center min-h-screen flex justify-between items-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="w-9/12"></div>
        <div className="text-white space-y-4">
          <h2 className="text-5xl">
            Would you like a Cup of Delicious Coffee?
          </h2>
          <p className="w-9/12 font-roboto font-light">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <div>
            <button className="btn bg-[#E3B577] rounded-none text-[#242222] border-none text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
