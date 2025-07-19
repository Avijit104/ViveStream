import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/arijit.jpg";
function Playable(props) {
  const [hover, setHover] = useState(false);
  const [artist, setArtist] = useState([]);
  const [name, setName] = useState("Song");

  // playable details modificaions
  useEffect(() => {
    // artist name shortening
    if (props.artist) {
      if (props.artist?.length > 40) {
        let artists = props.artist?.slice(0, 40) + "...";
        setArtist(artists.split(","));
      } else {
        setArtist(props?.artist.split(","));
      }
    }
    //playable name shortening
    if (props.name) {
      if (props.name?.length > 40) {
        setName(props.name.slice(0, 35) + "...");
      } else {
        setName(props.name);
      }
    }
  }, []);

  // links hover event handeler
  const handleHoverTrue = (e) => {
    e.target.style.textDecoration = "underline";
  };
  const handleHoverFalse = (e) => {
    e.target.style.textDecoration = "none";
  };

  return (
    <div
      style={{
        minWidth: "200px",
        height: "fit-content",
        color: "black",
        borderRadius: "10px",
        paddingBottom: "0.5%",
        backgroundColor: hover ? "#2f2f2f" : "transparent",
        display: "block",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="playable-image" style={{ position: "relative" }}>
        <img
          src={img}
          alt="img"
          style={{
            display: "block",
            width: "85%",
            aspectRatio: "1/1",
            justifySelf: "center",
            marginTop: "5%",
            borderRadius: props.isArtist ? "50%" : "8px",
          }}
        />
        <button
          style={{
            position: "absolute",
            padding: "5px",
            display: hover ? "grid" : "none",
            justifySelf: "end",
            alignSelf: "end",
            right: "20px",
            bottom: "5px",
            borderRadius: "50%",
            border: "none",
            outline: "none",
            backgroundColor: "#1ed760",
          }}
        >
          <span
            style={{
              width: "2vw",
              height: "2vw",
              alignContent: "center",
              justifyItems: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="100%"
              viewBox="0 -960 960 960"
              width="100%"
              fill="#000000ff"
            >
              <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" />
            </svg>
          </span>
        </button>
      </div>
      <div
        className="playable-links"
        style={{
          whiteSpace: "nowrap",
          width: "100%",
          textWrap: "wrap",
          padding: "5%",
        }}
      >
        <p
          style={{
            overflow: "hidden",
          }}
        >
          <Link
            className="links"
            style={{
              whiteSpace: "nowrap",
              fontSize: "1.1rem",
              color: "#ffffff",
              textDecoration: "none",
              textOverflow: "ellipsis",
            }}
            onMouseEnter={handleHoverTrue}
            onMouseLeave={handleHoverFalse}
          >
            {name}
          </Link>
        </p>
        <p
          className="artist-links"
          style={{
            width: "100%",
            height: "40px",
          }}
        >
          {artist.map((item) => (
            <Link
              className="links"
              style={{
                color: "#b3b3b3",
                textDecoration: "none",
                whiteSpace: "nowrap",
                textWrap: "wrap",
                fontSize: "0.9rem",
              }}
              key={artist.indexOf(item)}
              onMouseEnter={handleHoverTrue}
              onMouseLeave={handleHoverFalse}
            >
              {artist.indexOf(item) != artist.length - 1 ? item + ", " : item}
            </Link>
          ))}
        </p>
      </div>
    </div>
  );
}

export default Playable;
