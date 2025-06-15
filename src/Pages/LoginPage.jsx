import React from "react";
import { AuthFooter, Login } from "../components";

function LoginPage() {
  return (
    <>
      <div
        style={{
          width: "100%",
          background: "linear-gradient(to bottom, #1f1f1f 10%, transparent)",
          height: "fit-content",
          padding: "30px 0px",
          boxSizing: "border-box",
        }}
      >
        <Login />
      </div>
      <AuthFooter />
    </>
  );
}

export default LoginPage;
