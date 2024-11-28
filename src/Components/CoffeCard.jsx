import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
const CoffeCard = ({ coffee }) => {
  const { name, chef, price, photo } = coffee;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/coffee/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="font-roboto bg-[#f5f4f1] p-8 flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-0">
      <div className="flex flex-col lg:flex-row items-center">
        <figure className="w-44 h-44">
          <img className="w-full h-full object-cover" src={photo} alt="" />
        </figure>
        <div className="space-y-2">
          <p>
            <span className="font-semibold">Name:</span> {name}
          </p>
          <p>
            <span className="font-semibold">Chef:</span> {chef}
          </p>
          <p>
            <span className="font-semibold">Price:</span> {price}$
          </p>
        </div>
      </div>
      <div className="flex lg:flex-col gap-2">
        <button className="btn btn-xs bg-[#d2b48c]">
          <FaRegEye className="text-white" />
        </button>
        <button className="btn btn-xs bg-gray-700 ">
          <MdEdit className="text-white" />
        </button>
        <button
          onClick={() => handleDelete(coffee._id)}
          className="btn btn-xs bg-red-500"
        >
          <FaTrash className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default CoffeCard;
