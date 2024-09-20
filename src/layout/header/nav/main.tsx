import React from "react";
import vec from "../../../assets/Logo.svg";
import { Container, MainContainer } from "./style";

function Navbar() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight, // Scroll to the bottom
      behavior: "smooth", // Smooth scroll
    });
  };

  return (
    <MainContainer>
      <Container>
        <img src={vec} alt="Logo" />
        <button onClick={scrollToBottom}>Join Waitlist</button>
      </Container>
    </MainContainer>
  );
}

export default Navbar;
