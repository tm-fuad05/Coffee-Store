import React from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
const AddCoffe = () => {
  const handleAddCoffe = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const price = form.price.value;
    const photo = form.photo.value;

    const coffeInfo = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
      price,
    };

    fetch("http://localhost:4000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffeInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Successfully Added coffee data",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
        form.reset();
      });
  };

  return (
    <div className="w-8/12 mx-auto my-10">
      <Link to="/">
        <button className="text-[#374151] btn">
          <FaArrowLeft />
          Back to Home
        </button>
      </Link>
      <div className="p-10 bg-[#f4f3f0]  mb-10 mt-5">
        <div className="text-center space-y-2">
          <h2 className="text-[#374151] text-4xl font-semibold">
            Add New Coffe
          </h2>
          <p className="text-sm font-roboto text-gray-500 w-10/12 mx-auto">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <div className="mt-8">
          <form
            onSubmit={handleAddCoffe}
            className="grid grid-cols-2 gap-x-10 gap-y-2 font-roboto"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter coffe Name"
                name="name"
                className="input input-bordered rounded-none border-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Chef</span>
              </label>
              <input
                type="text"
                placeholder="Enter coffee chef"
                name="chef"
                className="input input-bordered rounded-none border-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <input
                type="text"
                placeholder="Enter coffee supplier"
                name="supplier"
                className="input input-bordered rounded-none border-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <input
                type="text"
                placeholder="Enter coffee taste"
                name="taste"
                className="input input-bordered rounded-none border-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                placeholder="Enter coffee category"
                name="category"
                className="input input-bordered rounded-none border-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                placeholder="Enter coffee details"
                name="details"
                className="input input-bordered rounded-none border-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="Enter Amount"
                name="price"
                className="input input-bordered rounded-none border-none"
                required
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                placeholder="Enter photo URL"
                name="photo"
                className="input input-bordered rounded-none border-none"
                required
              />
            </div>
            <div className="w-full mt-6 font-rancho col-span-2">
              <button className="btn bg-[#d2b48c] text-black font-normal rounded-md border border-[#331a15] text-lg w-full">
                Add Coffe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffe;
