import { useState } from "react";
import "./App.css";
import { Footer, Header, SideNav } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
