import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import UserTable from "../table/UserTable";
import AddUser from "./AddUser";

const User = () => {
  return (
    <>
      <div className="flex justify-start ">
        <Sidebar />
        <div className="flex flex-col justify-start flex-grow">
          <div>
            <Navbar />
          </div>
          <div className="p-6">
            <UserTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
