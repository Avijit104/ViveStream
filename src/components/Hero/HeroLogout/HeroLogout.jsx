import React, { useState, useEffect } from "react";
import PlayableContainer from "../../Containers/PlayableContainer";
import "./HeroLogout.css";

function HeroLogout() {
  const data = [
    {
      id: 1,
      name: "Jhol",
      artist: "Mannu, Umar Khalid",
    },
    {
      id: 2,
      name: "Har Kisi Ko",
      artist: "Arijit Singh, Shreya Ghoshal",
    },
    {
      id: 3,
      name: "Amar Mawte(Female)",
      artist: "Lopamudra Mitra",
    },
    {
      id: 4,
      name: "Ekhon Onek Raat",
      artist: "Anupam Roy",
    },
    {
      id: 5,
      name: "Eito ami chai",
      artist: "Shreya Ghoshal, Anupam Roy",
    },
    {
      id: 6,
      name: "Majhe majhe tobo",
      artist: "Arindom",
    },
    {
      id: 7,
      name: "Jhol foding",
      artist: "Silajit, Anupam roy",
    },
    {
      id: 8,
      name: "Amar Mawte(male)",
      artist: "Rupankar",
    },
    {
      id: 9,
      name: "Mayabono Biharini",
      artist: "Rupam islam, Somlata",
    },
    {
      id: 10,
      name: "Beche thakar gaan",
      artist: "Rupam islam, Anupam roy",
    },
  ];
  return (
    <div className="hero-logout-main">
      <section className="tranding-songs">
        <div className="heading-hero-logout">
          <h2>Tranding Songs</h2>
          <button>Show All</button>
        </div>
        <div className="tranding"></div>
        <PlayableContainer data={data} />
      </section>
      <section className="artists">
        <div className="heading-hero-logout">
          <h2>Popular Artists</h2>
          <button>Show All</button>
        </div>
        <PlayableContainer data={data} isArtits />
      </section>
      <section className="radio">
        <div className="heading-hero-logout">
          <h2>Popular Radio</h2>
          <button>Show All</button>
        </div>
        <PlayableContainer data={data} />
      </section>

      <section className="charts">
        <div className="heading-hero-logout">
          <h2>Featured Charts</h2>
          <button>Show All</button>
        </div>
        <PlayableContainer data={data} />
      </section>
      <section className="best">
        <div className="heading-hero-logout">
          <h2>India's Best</h2>
          <button>Show All</button>
        </div>
        <PlayableContainer data={data} />
      </section>
    </div>
  );
}

export default HeroLogout;
