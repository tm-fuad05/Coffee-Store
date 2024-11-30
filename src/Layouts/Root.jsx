import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar2 from "../Components/Navbar2";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <Navbar2></Navbar2> */}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
