import React from "react";

function HomeContainer({ children }) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        padding: "5px",
        boxSizing: "border-box",
        gap: "5px",
        justifyContent: "space-between",
        // border: "1px solid white",
      }}
    >
      {children}
    </div>
  );
}

export default HomeContainer;
