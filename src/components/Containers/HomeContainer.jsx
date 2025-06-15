import React from "react";

function HomeContainer({ children }) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "70vh",
        padding: "5px",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
}

export default HomeContainer;
