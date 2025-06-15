import React, { useEffect, useState } from "react";
import FooterOptions from "../FooterOptions/FooterOptions";
import { Link } from "react-router-dom";
import SideNavLogout from "./SideNavLogout/SideNavLogout";
import SideNavLogin from "./SideNavLogin/SideNavLogin";
function SideNav() {
  const auth = false;

  return (
    <div style={{ height: "78vh" }}>
      {auth && <SideNavLogout />}
      {!auth && <SideNavLogin />}
    </div>
  );
}
export default SideNav;
