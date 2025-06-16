import React, { useState } from "react";
import "./PlayerLogin.css";
import image from "../../../assets/arijit.jpg";
import { Link } from "react-router-dom";
function PlayerLogin() {
  const [start, setStart] = useState(false);
  const [play, setPlay] = useState(false);
  const [mute, setMute] = useState(false);
  const playPause = () => {
    setPlay(!play);
    setStart(true);
  };
  return (
    <div className="player-login">
      {start && (
        <div className="player-login-playable">
          <div className="playable-details">
            <div
              className="playable-image"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className="playable-text">
              <h2>
                <Link>Har kisi ko</Link>
              </h2>
              <p>
                <Link>Arijit Singh</Link>
              </p>
            </div>
          </div>
          <button id="addToLike" title="Add to Liked Songs">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
              >
                <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
            </span>
          </button>
        </div>
      )}
      <div className="player-login-controls">
        <div className="controls">
          <button id="suffle">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M560-160v-80h104L537-367l57-57 126 126v-102h80v240H560Zm-344 0-56-56 504-504H560v-80h240v240h-80v-104L216-160Zm151-377L160-744l56-56 207 207-56 56Z" />
              </svg>
            </span>
          </button>
          <button id="rewind">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M220-240v-480h80v480h-80Zm520 0L380-480l360-240v480Zm-80-240Zm0 90v-180l-136 90 136 90Z" />
              </svg>
            </span>
          </button>
          {play ? (
            <button id="pause" onClick={playPause}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                >
                  <path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z" />
                </svg>
              </span>
            </button>
          ) : (
            <button id="play" onClick={playPause}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                >
                  <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" />
                </svg>
              </span>
            </button>
          )}

          <button id="forward">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M660-240v-480h80v480h-80Zm-440 0v-480l360 240-360 240Zm80-240Zm0 90 136-90-136-90v180Z" />
              </svg>
            </span>
          </button>
          <button id="repeat">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M280-80 120-240l160-160 56 58-62 62h406v-160h80v240H274l62 62-56 58Zm-80-440v-240h486l-62-62 56-58 160 160-160 160-56-58 62-62H280v160h-80Z" />
              </svg>
            </span>
          </button>
        </div>
        <div className="pogress-bar">
          <p>--:--</p>
          <div className="bar-holder">
            <div className="bar"></div>
          </div>

          <p>--:--</p>
        </div>
      </div>
      <div className="player-login-extra">
        <button id="playingVieew">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="m380-300 280-180-280-180v360ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z" />
            </svg>
          </span>
        </button>
        <button id="lyrics">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M192-680q-15-17-23.5-37t-8.5-43q0-50 35-85t85-35q50 0 85 35t35 85q0 23-8.5 43T368-680H192ZM400-80q-66 0-113-47t-47-113h-40l-40-400h240l-40 400h-40q0 33 23.5 56.5T400-160q33 0 56.5-23.5T480-240v-480q0-66 47-113t113-47q66 0 113 47t47 113v640h-80v-640q0-33-23.5-56.5T640-800q-33 0-56.5 23.5T560-720v480q0 66-47 113T400-80ZM272-320h16l24-240h-64l24 240Zm16-240h-40 64-24Z" />
            </svg>
          </span>
        </button>
        <button id="queue">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M640-120q-33 0-56.5-23.5T560-200v-160q0-33 23.5-56.5T640-440h160q33 0 56.5 23.5T880-360v160q0 33-23.5 56.5T800-120H640Zm0-80h160v-160H640v160ZM80-240v-80h360v80H80Zm560-280q-33 0-56.5-23.5T560-600v-160q0-33 23.5-56.5T640-840h160q33 0 56.5 23.5T880-760v160q0 33-23.5 56.5T800-520H640Zm0-80h160v-160H640v160ZM80-640v-80h360v80H80Zm640 360Zm0-400Z" />
            </svg>
          </span>
        </button>
        {mute ? (
          <button id="volume" onClick={() => setMute(!mute)}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z" />
              </svg>
            </span>
          </button>
        ) : (
          <button id="mute" onClick={() => setMute(!mute)}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M792-56 671-177q-25 16-53 27.5T560-131v-82q14-5 27.5-10t25.5-12L480-368v208L280-360H120v-240h128L56-792l56-56 736 736-56 56Zm-8-232-58-58q17-31 25.5-65t8.5-70q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 53-14.5 102T784-288ZM650-422l-90-90v-130q47 22 73.5 66t26.5 96q0 15-2.5 29.5T650-422ZM480-592 376-696l104-104v208Zm-80 238v-94l-72-72H200v80h114l86 86Zm-36-130Z" />
              </svg>
            </span>
          </button>
        )}
        <div className="volume">
          <div className="bar-holder">
            <div className="bar"></div>
          </div>
        </div>
        <button id="miniplayer">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Zm280-40h320v-240H440v240Zm80-80v-80h160v80H520Z" />
            </svg>
          </span>
        </button>
        <button id="fullScreen">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M120-120v-200h80v120h120v80H120Zm520 0v-80h120v-120h80v200H640ZM120-640v-200h200v80H200v120h-80Zm640 0v-120H640v-80h200v200h-80Z" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}

export default PlayerLogin;
