import React from "react";
import HeroLogin from "./HeroLogin/HeroLogin";
import HeroLogout from "./HeroLogout/HeroLogout";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";

function Hero() {
  const auth = useSelector((state) => state.auth.loginStatus);
  return (
    <div
      style={{
        backgroundColor: "#121212",
        borderRadius: "10px",
        padding: "10px",
        overflow: "scroll",
        height: "80vh",
        width: "100vw",
      }}
    >
      <div>
        {/* side player interact here */}
        {auth ? <HeroLogin /> : <HeroLogout />}
        {/* <p>todo herologin is empty</p> */}
      </div>
      <Footer />
    </div>
  );
}

export default Hero;
