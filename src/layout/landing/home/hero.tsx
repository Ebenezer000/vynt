import React from "react"
import { Container, MainContainer } from "./style"
import vec from '../../../assets/Vector.svg'
import vec1 from "../../../assets/iPhone 14 Pro Space Black Mockup.svg";
import vec2 from "../../../assets/mobilephone.svg";

function Hero() {
    return(
        <MainContainer>
            <Container>
                <div>
                    <h1>Your one stop shop for new and preloved clothes, shoes and accessories</h1>
                    <p>Declutter your wardrobe and discover new and preloved pieces at affordable prices.</p>
                    <div className="div_container">
                        <button><span>Download App</span><img src={vec} alt="" /></button>
                    </div>
                </div>
                <div >
                    <img className="hero_image" src={vec1} alt="" />
                    <img className="mobile_hero_image" src={vec2} alt="" />
                </div>
            </Container>
        </MainContainer>
    )
}

export default Hero