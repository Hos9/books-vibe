import React from "react";
import Navbar from "../shared/navbar/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      
    </div>
  );
};

export default MainLayout;
