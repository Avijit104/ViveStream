import React, { useState } from "react";
import imageArtist from "../../../assets/arijit.jpg";
import imagePlaylist from "../../../assets/books1.jpg";
// import "./SideContent.css";

function SideContent(props) {
  if (props) {
    console.log(props.Artist);
  }
  const [hover, setHover] = useState(false);
  return (
    <div
      className="side-content"
      style={{
        width: "100%",
        position: "relative",
        borderRadius: "8px",
        overflow: "hidden",
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div
        className="side-content-main"
        style={{
          padding: "10px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          backgroundColor: `${hover ? "#4b4b4b" : "transparent"}`,
        }}
      >
        {props.Artist && (
          <>
            <div
              className="side-artist-img"
              style={{
                backgroundImage: `url(${imageArtist})`,
                width: "3vw",
                aspectRatio: "1/1",
                borderRadius: "30px",
                backgroundPosition: "center",
                backgroundSize: "contain",
                position: "relative",
                zIndex: "2",
              }}
            ></div>
            <div
              className="side-artist-style"
              style={{
                padding: "10px",
                position: "absolute",
                left: "0",
                top: "0",
                zIndex: `${hover ? 3 : 1}`,
              }}
            >
              <button
                style={{
                  width: "3vw",
                  aspectRatio: "1/1",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "30px",
                  border: "none",
                  outline: "none",
                  backgroundColor: "#0000006d",
                }}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    style={{
                      width: "70%",
                      fill: "#ffffff",
                    }}
                  >
                    <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" />
                  </svg>
                </span>
              </button>
            </div>
          </>
        )}
        {props.Playlist && (
          <>
            <div
              className="side-playlist-img"
              style={{
                width: "3vw",
                aspectRatio: "1/1",
                backgroundImage: `url(${imagePlaylist})`,
                position: "relative",
                zIndex: "2",
                backgroundPosition: "center",
                backgroundSize: "contain",
                borderRadius: "8px",
              }}
            ></div>
            <div
              className="style-playlist-style"
              style={{
                padding: "10px",
                position: "absolute",
                left: "0",
                top: "0",
                zIndex: `${hover ? 3 : 1}`,
              }}
            >
              <button
                style={{
                  width: "3vw",
                  aspectRatio: "1/1",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "8px",
                  border: "none",
                  outline: "none",
                  backgroundColor: "#0000006d",
                }}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e3e3e3"
                  >
                    <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" />
                  </svg>
                </span>
              </button>
            </div>
          </>
        )}
        <div className="side-content-details">
          <h2 style={{ fontSize: "0.9rem", color: "#ffffff" }}>
            {" "}
            {props.name}{" "}
          </h2>
          <div
            className="side-content-role"
            style={{ display: "flex", gap: "10px", alignItems: "center" }}
          >
            <p
              style={{ fontSize: "1rem", textAlign: "center", height: "100%" }}
            >
              {" "}
              {props.role}
            </p>
            {props.owned && (
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  className="dot"
                  style={{
                    width: "3px",
                    height: "3px",
                    backgroundColor: "#ffffff",
                    borderRadius: "10px",
                    marginTop: "5px",
                  }}
                ></div>
                <p
                  style={{
                    fontSize: "1rem",
                    textAlign: "center",
                    height: "100%",
                  }}
                >
                  {props.owned}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideContent;
