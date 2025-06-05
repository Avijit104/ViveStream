import React, { useState } from "react";
import Logo from "../Logo";
import "./Header.css";
function Header() {
  const auth = true;
  const searchFunc = (e) => {
    e.preventDefault();
  };
  const [profileOpt, setProfileOpt] = useState(false);
  const displayProfileOpt = () => {
    setProfileOpt(!profileOpt);
  };
  return (
    <div className="header-main">
      <nav>
        <ul>
          {/* logo  */}
          <li>
            <Logo />
          </li>
          {/* search component  */}
          <li
            className="search-home"
            style={{ marginRight: `${auth ? "0px" : "50px"}` }}
          >
            <div className="home">
              <button id="home">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30px"
                    viewBox="0 -960 960 1060"
                    width="30px"
                    fill="#FFFFFF"
                  >
                    <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                  </svg>
                </span>
              </button>
            </div>
            <div className="search">
              <form action="#">
                <button id="searchBtn" onClick={searchFunc}>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="30px"
                      viewBox="0 -960 960 960"
                      width="30px"
                      fill="#FFFFFF"
                    >
                      <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                    </svg>
                  </span>
                </button>
                <input
                  type="text"
                  id="searchField"
                  name="searchField"
                  placeholder="What do you want to play?"
                />
              </form>
              <div className="search-style"></div>
              <button id="browse">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30px"
                    viewBox="0 -960 960 960"
                    width="30px"
                    fill="#FFFFFF"
                  >
                    <path d="M500-360q42 0 71-29t29-71v-220h120v-80H560v220q-13-10-28-15t-32-5q-42 0-71 29t-29 71q0 42 29 71t71 29ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z" />
                  </svg>
                </span>
              </button>
            </div>
          </li>
          {/* nav elements  */}
          <li className="nav-elements-nologin">
            {/* nav elements before login  */}
            {!auth && (
              <div className="nav-elements">
                <ul>
                  <li>
                    <button id="premium">Premium</button>
                  </li>
                  <li>
                    <button id="support">Support</button>
                  </li>
                  <li>
                    <button id="download">Download</button>
                  </li>
                </ul>
                <div className="nav-elements-style"></div>
                <ul>
                  <li>
                    <button id="install">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill="#b3b3b3"
                        >
                          <path d="M280-280h400v-80H280v80Zm200-120 160-160-56-56-64 62v-166h-80v166l-64-62-56 56 160 160Zm0 320q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                        </svg>
                      </span>
                      Install&nbsp;App
                    </button>
                  </li>
                  <li>
                    <button>Sign&nbsp;up</button>
                  </li>
                  <li>
                    <button id="login">Log&nbsp;in</button>
                  </li>
                </ul>
              </div>
            )}
            {/* nav elements after login  */}
            {auth && (
              <div className="nav-elements-login">
                <ul>
                  <li>
                    <button id="explorePremium">Explore&nbsp;Premium</button>
                  </li>
                  <li>
                    <button title="install app" id="install">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill="#b3b3b3"
                        >
                          <path d="M280-280h400v-80H280v80Zm200-120 160-160-56-56-64 62v-166h-80v166l-64-62-56 56 160 160Zm0 320q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                        </svg>
                      </span>
                      Install&nbsp;App
                    </button>
                  </li>
                  <li>
                    <button id="notification" title=" view notification">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill="#b3b3b3"
                        >
                          <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
                        </svg>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button id="friends" title="Friends">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 760"
                        width="24px"
                        fill="#b3b3b3"
                      >
                        <path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z" />
                      </svg>
                    </button>
                  </li>
                  <li>
                    <div className="profile-outer-style">
                      <button id="profile" onClick={displayProfileOpt}>
                        <span>A</span>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </nav>
      {auth && profileOpt && (
        <div className="profile-options">
          <ul>
            <li>
              <button>
                <span>Account</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#FFFFFF"
                  >
                    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
                  </svg>
                </span>
              </button>
            </li>
            <li>
              <button>Profile</button>
            </li>
            <li>
              <button>
                <span>Upgrade&nbsp;to&nbsp;premium</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#FFFFFF"
                  >
                    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
                  </svg>
                </span>
              </button>
            </li>
            <li>
              <button>
                <span>Support</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#FFFFFF"
                  >
                    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
                  </svg>
                </span>
              </button>
            </li>
            <li>
              <button>
                <span>Download</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#FFFFFF"
                  >
                    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
                  </svg>
                </span>
              </button>
            </li>
            <li>
              <button>Settings</button>
            </li>
            <li>
              <button id="logout">Logout</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
