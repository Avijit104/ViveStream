import React, { useState, useEffect } from "react";
import "./SideNavLogin.css";
import SideContent from "../SideContent/SideContent";
function SideNavLogin() {
  const contentData = [
    {
      Artist: true,
      name: "Arijit Singh",
      role: "Artist",
    },
    {
      Playlist: true,
      name: "yo",
      role: "playlist",
    },
    {
      Playlist: true,
      name: "yo2",
      role: "playlist",
      ownedby: "avijit",
    },
  ];

  const [search, setSearch] = useState(false);

  const [sortOptions, setSortOptions] = useState(false);

  const [sortType, setSortType] = useState("");

  const [viewType, setViewType] = useState("two");

  const [artist, setArtist] = useState(false);

  const [playlist, setPlaylist] = useState(false);

  const [byYou, setByYou] = useState(false);

  const [viewPath, setViewPath] = useState(
    "M360-200v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360ZM200-160q-33 0-56.5-23.5T120-240q0-33 23.5-56.5T200-320q33 0 56.5 23.5T280-240q0 33-23.5 56.5T200-160Zm0-240q-33 0-56.5-23.5T120-480q0-33 23.5-56.5T200-560q33 0 56.5 23.5T280-480q0 33-23.5 56.5T200-400Zm0-240q-33 0-56.5-23.5T120-720q0-33 23.5-56.5T200-800q33 0 56.5 23.5T280-720q0 33-23.5 56.5T200-640Z"
  );

  const displaySearchForm = () => {
    setSearch(true);
    setSortOptions(false);
  };

  const searchFunc = (e) => {
    e.preventDefault();
  };
  const displaySortOptions = () => {
    setSortOptions(!sortOptions);
    setSearch(false);
  };

  const displaySortType = (type) => {
    setSortType((prev) => {
      if (prev && prev != type) {
        let prevBtn = document.getElementById(prev.replace(" ", "-"));
        prevBtn.style.color = "#ffffff";
        let currBtn = document.getElementById(type.replace(" ", "-"));
        currBtn.style.color = "#1ed760";
      } else {
        let currBtn = document.getElementById(type.replace(" ", "-"));
        currBtn.style.color = "#1ed760";
      }
    });
    setSortType(type.replace("-", " "));
  };

  useEffect(() => {
    if (sortType) {
      var currBtn = document.getElementById(sortType.replace(" ", "-"));
      if (currBtn) {
        currBtn.style.color = "#1ed760";
      }
    }
  }, [sortOptions]);

  const viewState = (id) => {
    setViewType((prev) => {
      if (prev && prev != id) {
        let prevBtn = document.getElementById(prev);
        prevBtn.style.backgroundColor = "transparent";
        let currBtn = document.getElementById(id);
        currBtn.style.backgroundColor = "#1f1f1f";
      } else {
        let currBtn = document.getElementById(id);
        currBtn.style.backgroundColor = "#1f1f1f";
      }
    });
    setViewType(id);
  };

  useEffect(() => {
    if (viewType) {
      let currBtn = document.getElementById(viewType);
      if (currBtn) {
        currBtn.style.backgroundColor = "#1f1f1f";
      }
    }
  }, [sortOptions]);
  return (
    <div>
      <div className="sidenav-main">
        <div className="sidenav-header-login">
          <div className="sidenav-library">
            <div className="sidenav-library-header">
              <span id="librarySvg" className="sidenav-library-svg-init">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#ececec"
                >
                  <path d="M497-360q40.74 0 68.87-28Q594-416 594-456v-218h117v-77H555v218q-12.7-10-27.35-15-14.65-5-30.65-5-40.74 0-68.87 28.25Q400-496.5 400-456.13q0 40.38 28.13 68.25Q456.26-360 497-360ZM315-240q-30.94 0-52.97-22.03Q240-284.06 240-315v-480q0-30.94 22.03-52.97Q284.06-870 315-870h480q30.94 0 52.97 22.03Q870-825.94 870-795v480q0 30.94-22.03 52.97Q825.94-240 795-240H315Zm0-75h480v-480H315v480ZM165-90q-30.94 0-52.97-22.03Q90-134.06 90-165v-555h75v555h555v75H165Zm150-705v480-480Z" />
                </svg>
              </span>
              <h2>Your Library</h2>
            </div>
            <div className="sidenav-library-buttons">
              <button id="createLibrary">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    width="24px"
                  >
                    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                  </svg>
                </span>
                <span>Create</span>
              </button>
              <button id="expandSidenav">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#FFFFFF"
                  >
                    <path d="M120-120v-240h80v104l124-124 56 56-124 124h104v80H120Zm516-460-56-56 124-124H600v-80h240v240h-80v-104L636-580Z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className="sidenav-header-buttons">
            {(artist || playlist) && (
              <button
                id="sidenavClose"
                onClick={() => {
                  setArtist(false);
                  setPlaylist(false);
                  setByYou(false);
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
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                  </svg>
                </span>
              </button>
            )}
            {!artist && (
              <div
                className="playlist-button"
                style={{
                  backgroundColor: `${byYou ? "#ffffff" : "transparent"}`,
                }}
              >
                <button
                  style={{
                    backgroundColor: `${playlist ? "#ffffff" : "#1f1f1f"}`,
                    color: `${playlist ? "#000000" : "#ffffff"}`,
                  }}
                  id="playlists"
                  onClick={() => {
                    setPlaylist(true);
                  }}
                >
                  Playlists
                </button>
                {playlist && (
                  <button
                    style={{
                      backgroundColor: `${byYou ? "#ececec" : "#1f1f1f"}`,
                      color: `${byYou ? "#000000" : "#ffffff"}`,
                    }}
                    id="byYou"
                    onClick={() => {
                      setByYou(!byYou);
                    }}
                  >
                    By you
                  </button>
                )}
              </div>
            )}
            {!playlist && (
              <button
                style={{
                  backgroundColor: `${artist ? "#ffffff" : "#1f1f1f"}`,
                  color: `${artist ? "#000000" : "#ffffff"}`,
                  padding: "10px 20px",
                }}
                id="artists"
                onClick={() => {
                  setArtist(true);
                }}
              >
                Artists
              </button>
            )}
          </div>
          <div className="sidenav-header-search">
            {!search && (
              <button id="sidenavSearch" onClick={displaySearchForm}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#FFFFFF"
                  >
                    <path d="m779-128.5-247.98-248q-29.52 24-68.02 37.25T381.66-326q-106.13 0-179.65-73.45-73.51-73.46-73.51-179.5 0-106.05 73.45-179.55 73.46-73.5 179.5-73.5Q487.5-832 561-758.49q73.5 73.52 73.5 179.65 0 42.84-13.5 81.59T584-429l248 247.5-53 53ZM381.5-401q74.5 0 126.25-51.75T559.5-579q0-74.5-51.75-126.25T381.5-757q-74.5 0-126.25 51.75T203.5-579q0 74.5 51.75 126.25T381.5-401Z" />
                  </svg>
                </span>
              </button>
            )}
            {search && (
              <div className="search">
                <form action="#">
                  <button id="sidenavSearchForm" onClick={searchFunc}>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#FFFFFF"
                      >
                        <path d="m779-128.5-247.98-248q-29.52 24-68.02 37.25T381.66-326q-106.13 0-179.65-73.45-73.51-73.46-73.51-179.5 0-106.05 73.45-179.55 73.46-73.5 179.5-73.5Q487.5-832 561-758.49q73.5 73.52 73.5 179.65 0 42.84-13.5 81.59T584-429l248 247.5-53 53ZM381.5-401q74.5 0 126.25-51.75T559.5-579q0-74.5-51.75-126.25T381.5-757q-74.5 0-126.25 51.75T203.5-579q0 74.5 51.75 126.25T381.5-401Z" />
                      </svg>
                    </span>
                  </button>
                  <input
                    type="text"
                    id="sidenaavInput"
                    name="sidenavInput"
                    placeholder="Search in Your Library"
                  />
                </form>
              </div>
            )}
            <div className="sort">
              {!search && <p>{sortType}</p>}
              <button id="sidenavSort" onClick={displaySortOptions}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e3e3e3"
                  >
                    <path d={viewPath} />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
        {artist && (
          <div className="sidenav-hero-login">
            {contentData.map(
              (item) => artist && item.Artist && <SideContent {...item} />
            )}
          </div>
        )}
        {playlist && !byYou && (
          <div className="sidenav-hero-login">
            {contentData.map(
              (item) => playlist && item.Playlist && <SideContent {...item} />
            )}
          </div>
        )}
        {byYou && (
          <div className="sidenav-hero-login">
            {contentData.map(
              (item) => byYou && item.ownedby && <SideContent {...item} />
            )}
          </div>
        )}
        {!artist && !playlist && (
          <div className="sidenav-hero-login">
            {contentData.map((item) => (
              <SideContent {...item} />
            ))}
          </div>
        )}
      </div>
      {sortOptions && (
        <div className="sidenav-options">
          <div className="sort-options">
            <h4>Sort by</h4>
            <ul>
              <li>
                <button id="Recents" onClick={() => displaySortType("Recents")}>
                  Recents
                </button>
              </li>
              <li>
                <button
                  id="Recently-Added"
                  onClick={() => displaySortType("Recently Added")}
                >
                  Recently Added
                </button>
              </li>
              <li>
                <button
                  id="Alphabetical"
                  onClick={() => displaySortType("Alphabetical")}
                >
                  Alphabetical
                </button>
              </li>
              <li>
                <button id="Creator" onClick={() => displaySortType("Creator")}>
                  Creator
                </button>
              </li>
            </ul>
          </div>
          <div className="view-options">
            <h4>View as</h4>
            <ul>
              <li>
                <button
                  id="one"
                  onClick={() => {
                    setViewPath(
                      "M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
                    );
                    viewState("one");
                  }}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                      fill="#e3e3e3"
                    >
                      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                    </svg>
                  </span>
                </button>
              </li>
              <li>
                <button
                  id="two"
                  onClick={() => {
                    setViewPath(
                      "M360-200v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360ZM200-160q-33 0-56.5-23.5T120-240q0-33 23.5-56.5T200-320q33 0 56.5 23.5T280-240q0 33-23.5 56.5T200-160Zm0-240q-33 0-56.5-23.5T120-480q0-33 23.5-56.5T200-560q33 0 56.5 23.5T280-480q0 33-23.5 56.5T200-400Zm0-240q-33 0-56.5-23.5T120-720q0-33 23.5-56.5T200-800q33 0 56.5 23.5T280-720q0 33-23.5 56.5T200-640Z"
                    );
                    viewState("two");
                  }}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                      fill="#e3e3e3"
                    >
                      <path d="M360-200v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360ZM200-160q-33 0-56.5-23.5T120-240q0-33 23.5-56.5T200-320q33 0 56.5 23.5T280-240q0 33-23.5 56.5T200-160Zm0-240q-33 0-56.5-23.5T120-480q0-33 23.5-56.5T200-560q33 0 56.5 23.5T280-480q0 33-23.5 56.5T200-400Zm0-240q-33 0-56.5-23.5T120-720q0-33 23.5-56.5T200-800q33 0 56.5 23.5T280-720q0 33-23.5 56.5T200-640Z" />
                    </svg>
                  </span>
                </button>
              </li>
              <li>
                <button
                  id="three"
                  onClick={() => {
                    setViewPath(
                      "M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm240 0q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm240 0q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160ZM240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640Z"
                    );
                    viewState("three");
                  }}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                      fill="#e3e3e3"
                    >
                      <path d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm240 0q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm240 0q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160ZM240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640Z" />
                    </svg>
                  </span>
                </button>
              </li>
              <li>
                <button
                  id="four"
                  onClick={() => {
                    setViewPath(
                      "M340-280q25 0 42.5-17.5T400-340q0-25-17.5-42.5T340-400q-25 0-42.5 17.5T280-340q0 25 17.5 42.5T340-280Zm0-280q25 0 42.5-17.5T400-620q0-25-17.5-42.5T340-680q-25 0-42.5 17.5T280-620q0 25 17.5 42.5T340-560Zm280 280q25 0 42.5-17.5T680-340q0-25-17.5-42.5T620-400q-25 0-42.5 17.5T560-340q0 25 17.5 42.5T620-280Zm0-280q25 0 42.5-17.5T680-620q0-25-17.5-42.5T620-680q-25 0-42.5 17.5T560-620q0 25 17.5 42.5T620-560ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"
                    );
                    viewState("four");
                  }}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                      fill="#e3e3e3"
                    >
                      <path d="M340-280q25 0 42.5-17.5T400-340q0-25-17.5-42.5T340-400q-25 0-42.5 17.5T280-340q0 25 17.5 42.5T340-280Zm0-280q25 0 42.5-17.5T400-620q0-25-17.5-42.5T340-680q-25 0-42.5 17.5T280-620q0 25 17.5 42.5T340-560Zm280 280q25 0 42.5-17.5T680-340q0-25-17.5-42.5T620-400q-25 0-42.5 17.5T560-340q0 25 17.5 42.5T620-280Zm0-280q25 0 42.5-17.5T680-620q0-25-17.5-42.5T620-680q-25 0-42.5 17.5T560-620q0 25 17.5 42.5T620-560ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
                    </svg>
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideNavLogin;
