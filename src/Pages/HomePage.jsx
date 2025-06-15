import React from "react";
import { Header, HomeContainer, SideNav } from "../components";

function HomePage() {
  return (
    <div>
      <Header />
      <HomeContainer>
        <SideNav />
      </HomeContainer>
    </div>
  );
}

export default HomePage;
