import React, { useEffect, useState } from "react";
import { BsCup } from "react-icons/bs";
import { Link } from "react-router-dom";
import CoffeCard from "./CoffeCard";
const Coffees = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/coffee")
      .then((res) => res.json())
      .then((data) => {
        setCoffees(data);
      });
  }, []);

  return (
    <div className="w-9/12 mx-auto">
      <div className="space-y-2 text-center mt-10">
        <p className="text-sm font-roboto">---Sip & Savor---</p>
        <h2 className="text-4xl text-[#331A15] font-semibold">
          Our Popular Products
        </h2>
        <div>
          <Link to="/add-coffe">
            <button className="btn btn-sm bg-[#e3b577] border-[#331a15] text-white font-light">
              Add Coffe <BsCup className="text-[#331a15]" />
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-10">
        {coffees.map((coffee, idx) => (
          <CoffeCard key={idx} coffee={coffee}></CoffeCard>
        ))}
      </div>
    </div>
  );
};

export default Coffees;
