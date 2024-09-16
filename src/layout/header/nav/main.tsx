import React from "react";
import vec from "../../../assets/Logo.svg";
import { Container, MainContainer } from "./style";

function Navbar() {
    return(
        <MainContainer>
            <Container>
                <img src={vec} alt="" />
                <button>Join Waitlist</button>
            </Container>
        </MainContainer>
            
    )
}

export default Navbar