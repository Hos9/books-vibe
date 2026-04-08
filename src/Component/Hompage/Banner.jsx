import React from "react";
import bnrImg from "../../assets/hero_img.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[50vh] my-8 rounded-2xl container mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
        <img src={bnrImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold mb-12">
            Books to freshen up your <br /> bookshelf
          </h1>
          <button className="btn btn-success text-white">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
