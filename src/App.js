import React from "react";
import { Navbar, Sidebar } from "./components";
import { Dashboard } from "./pages/Dashboard/Dashboard";

export const App = () => {
  return (
    <>
      <Navbar />
      <div className="container" >
        <Sidebar/>
        <Dashboard/>
      </div>
    </>
  );
};
