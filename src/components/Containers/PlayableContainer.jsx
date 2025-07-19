import { useEffect, useRef, useState } from "react";

import Playable from "../Playable";

function PlayableContainer(props) {
  const [hover, setHover] = useState(false);
  const [diff, setDiff] = useState(0);
  const [coutner, setCounter] = useState(0);
  const refParent = useRef(null);
  const refPlayable = useRef(null);
  useEffect(() => {
    setDiff(
      (refParent.current.getBoundingClientRect().right -
        refPlayable.current.getBoundingClientRect().right) /
        3
    );
  }, []);
  const handleLeft = () => {
    setCounter((prev) => {
      if (prev > 0) {
        prev--;
        refPlayable.current.style.translate = `${prev * diff}px`;
      }
      return prev;
    });
  };
  const handleRight = () => {
    setCounter((prev) => {
      if (prev < 3) {
        prev++;
        refPlayable.current.style.translate = `${prev * diff}px`;
      }
      return prev;
    });
  };
  return (
    <div
      style={{
        width: "98%",
        height: "300px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        zIndex: "1",
        justifySelf: "center",
        marginBottom: "40px",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button
        style={{
          zIndex: "2",
          padding: "2px",
          borderRadius: "50%",
          border: "none",
          outline: "none",
          display: hover ? "block" : "none",
          boxShadow: "0px 0px 20px 10px #1f1f1f",
          backgroundColor: "#2e2e2eff",
        }}
        onClick={handleLeft}
      >
        <span
          style={{
            width: "2vw",
            height: "2vw",
            justifyItems: "center",
            alignContent: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#ffffffff"
          >
            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
          </svg>
        </span>
      </button>
      <div
        ref={refParent}
        id="parentPlayable"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflowX: "hidden",

          position: "absolute",
          marginTop: "15px",
        }}
      >
        <div
          ref={refPlayable}
          id="playableContainer"
          style={{
            display: "flex",
            width: "fit-content",
            height: "100%",
            transition: "translate 1s ease-in-out",
            // overflow: "scroll",
          }}
        >
          {props?.data.map((item) => (
            <Playable {...item} {...props} />
          ))}
        </div>
      </div>
      <button
        style={{
          zIndex: "2",
          padding: "2px",
          borderRadius: "50%",
          border: "none",
          display: hover ? "block" : "none",
          boxShadow: "0px 0px 20px 10px #1f1f1f",
          backgroundColor: "#2e2e2eff",
        }}
        onClick={handleRight}
      >
        <span
          style={{
            width: "2vw",
            height: "2vw",
            justifyItems: "center",
            alignContent: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#ffffffff"
          >
            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
          </svg>
        </span>
      </button>
    </div>
  );
}

export default PlayableContainer;
