import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const MainLayout = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
