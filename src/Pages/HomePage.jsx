import React from "react";
import { Header, Hero, HomeContainer, Player, SideNav } from "../components";

function HomePage() {
  return (
    <div>
      <Header />
      <HomeContainer>
        <SideNav />
        <Hero />
      </HomeContainer>
      <Player />
    </div>
  );
}

export default HomePage;
