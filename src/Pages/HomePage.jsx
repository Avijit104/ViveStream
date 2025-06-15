import React from "react";
import { Header, Hero, HomeContainer, SideNav } from "../components";

function HomePage() {
  return (
    <div>
      <Header />
      <HomeContainer>
        <SideNav />
        <Hero />
      </HomeContainer>
    </div>
  );
}

export default HomePage;
