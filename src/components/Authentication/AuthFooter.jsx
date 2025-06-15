import React from "react";
import { Link } from "react-router-dom";
function AuthFooter() {
  return (
    <div
      style={{
        backgroundColor: "#121212",
        width: "100vw",
        height: "13vh",
        justifyItems: "center",
        alignContent: "center",
        fontSize: "0.8rem",
        color: "#b3b3b3",
      }}
    >
      <p>
        This site is protected by reCAPTCHA and Google&nbsp;
        <Link style={{ color: "#b3b3b3" }}>privecy policy</Link>
        &nbsp;and&nbsp;
        <Link style={{ color: "#b3b3b3" }}>Terms and conditions</Link>
        &nbsp;apply.
      </p>
    </div>
  );
}

export default AuthFooter;
