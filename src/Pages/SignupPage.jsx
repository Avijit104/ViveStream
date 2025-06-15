import React from "react";
import { AuthFooter, Signup } from "../components";

function SignupPage() {
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
        <Signup />
      </div>
      <AuthFooter />
    </>
  );
}

export default SignupPage;
