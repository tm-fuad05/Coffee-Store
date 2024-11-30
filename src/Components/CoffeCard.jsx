import { FaRegEye } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { Link } from "react-router-dom";
const CoffeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, price, photo } = coffee;

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
              const remaining = coffees.filter((coffee) => coffee._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="font-roboto bg-[#f5f4f1] p-8 flex flex-col lg:flex-row items-center justify-between   ">
      <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-0">
        <figure className="w-44 h-48">
          <img className="w-full h-full object-fill" src={photo} alt="" />
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
        <Link to={`/update-info/${_id}`} className="btn btn-xs bg-gray-700 ">
          <MdEdit className="text-white" />
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-xs bg-red-500"
        >
          <FaTrash className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default CoffeCard;
