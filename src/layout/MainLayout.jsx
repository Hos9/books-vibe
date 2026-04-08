import React from "react";
import Navbar from "../shared/navbar/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="w-11/12 mx-auto items-center text-center">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
