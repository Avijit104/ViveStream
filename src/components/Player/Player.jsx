import React from "react";
import PlayerLogin from "./PlayerLogin/PlayerLogin";
import PlayerLogout from "./PlayerLogout/PlayerLogout";
import { useSelector } from "react-redux";

function Player() {
  const auth = useSelector((state) => state.auth.loginStatus);
  return (
    <div
      style={{
        width: "100%",
        // border: "1px solid white",
        height: "10vh",
        justifyItems: "center",
        alignContent: "center",
        padding: "0px 10px",
      }}
    >
      {auth ? <PlayerLogin /> : <PlayerLogout />}
    </div>
  );
}

export default Player;
