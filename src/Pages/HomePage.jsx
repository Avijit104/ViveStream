import React from "react";
import { Header, Hero, HomeContainer, Player, SideNav } from "../components";
import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Header />
      <HomeContainer>
        <SideNav />
        <Outlet />
      </HomeContainer>
      <Player />
    </div>
  );
}

export default HomePage;
