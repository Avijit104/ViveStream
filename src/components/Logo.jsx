import React from "react";

function Logo(props) {
  return (
    <div
      style={{
        color: `${props.outerColor ? props.outerColor : "#ffffff"}`,
        fontSize: `${props.size ? props.size : "2rem"}`,
        fontWeight: "bold",
      }}
    >
      <p>
        Vive
        <span
          style={{
            color: `${props.innerColor ? props.innerColor : "#1ed760"}`,
            fontSize: `${props.size ? props.size : "2rem"}`,
            fontWeight: "bold",
          }}
        >
          Stream
        </span>
      </p>
    </div>
  );
}

export default Logo;
