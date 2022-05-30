import React from "react";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Navbar from "./Navbar";

const HomeContainer = () => {
  return (
    <div className="flex justify-start ">
      <Sidebar />
      <div className="flex flex-col justify-start flex-grow">
        <div>
          <Navbar />
        </div>
        <div className="p-6 bg-slate-200">
          <Home />
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
