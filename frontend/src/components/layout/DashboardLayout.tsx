import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      {/*Sidebar*/}
      <Sidebar />

      <div className="flex flex-col w-full p-2">
        <Navbar />

        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
