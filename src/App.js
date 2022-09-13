import React from "react";
import { Navbar, Sidebar } from "./components";

export const App = () => {
  return (
    <>
      <Navbar />
      <div className="container" >
        <Sidebar/>
      </div>
    </>
  );
};
