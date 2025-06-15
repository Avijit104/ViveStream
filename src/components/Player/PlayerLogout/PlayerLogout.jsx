import React from "react";
import { useNavigate } from "react-router-dom";
import "./PlayerLogout.css";

function PlayerLogout() {
  const navigate = useNavigate();
  return (
    <div
      className="player-logout"
      onClick={() => {
        navigate("/signup");
      }}
    >
      <div className="player-logout-text">
        <h2>Preview of ViveStream</h2>
        <p>
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </p>
      </div>
      <div className="player-logout-button">
        <button id="signup">Sign up for free</button>
      </div>
    </div>
  );
}

export default PlayerLogout;
