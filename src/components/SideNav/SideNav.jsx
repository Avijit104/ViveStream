import React, { useEffect, useState } from "react";
import FooterOptions from "../FooterOptions/FooterOptions";
import { Link } from "react-router-dom";
import SideNavLogout from "./SideNavLogout/SideNavLogout";
import SideNavLogin from "./SideNavLogin/SideNavLogin";
function SideNav() {
  const auth = false;

  return (
    <div
      style={{
        width: "25vw",
        height: "78vh",
        backgroundColor: "#121212",
        overflowY: "scroll",
      }}
    >
      {auth && <SideNavLogout />}
      {!auth && <SideNavLogin />}
    </div>
  );
}
export default SideNav;
