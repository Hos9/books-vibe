import React from "react";
import Navbar from "../shared/navbar/Navbar";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
