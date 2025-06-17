import React, { useEffect, useState } from "react";
import SideNavLogout from "./SideNavLogout/SideNavLogout";
import SideNavLogin from "./SideNavLogin/SideNavLogin";
import { useSelector } from "react-redux";

function SideNav() {
  const auth = useSelector((state) => state.auth.loginStatus);

  return (
    <div
      style={{
        width: "30vw",
        height: "80vh",
        backgroundColor: "#121212",
        overflow: "scroll",
        borderRadius: "10px",
      }}
    >
      {auth ? <SideNavLogin /> : <SideNavLogout />}
    </div>
  );
}
export default SideNav;
