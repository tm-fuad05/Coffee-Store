import React from "react";
import cup from "../assets/icons/1.png";
import badge from "../assets/icons/2.png";
import coffe from "../assets/icons/3.png";
import glass from "../assets/icons/4.png";
const Ads = () => {
  return (
    <div className="bg-[#eceae3] py-10">
      <div className="w-9/12 mx-auto grid grid-cols-4 gap-8">
        <div className="flex flex-col gap-1">
          <img className="w-12 h-12" src={cup} alt="" />
          <h3 className="text-2xl text-[#331A15]">Awesome Aroma</h3>
          <p className="font-roboto text-gray-500 text-xs">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <img className="w-12 h-12" src={badge} alt="" />
          <h3 className="text-2xl text-[#331A15]">High Quality</h3>
          <p className="font-roboto text-gray-500 text-xs">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <img className="w-12 h-12" src={coffe} alt="" />
          <h3 className="text-2xl text-[#331A15]">Pure Grades</h3>
          <p className="font-roboto text-gray-500 text-xs">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <img className="w-12 h-12" src={glass} alt="" />
          <h3 className="text-2xl text-[#331A15]">Proper Roasting</h3>
          <p className="font-roboto text-gray-500 text-xs">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ads;
