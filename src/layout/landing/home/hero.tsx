import React, { useEffect } from "react"
import { Container, MainContainer } from "./style"
import vec from '../../../assets/Vector.svg'
import vec1 from "../../../assets/iPhone_14_Pro_Space_Black_Mockup.svg";
// import vec2 from "../../../assets/mobile.svg";
import vec2 from "../../../assets/Mobile.png";
import Aos from "aos"
import "aos/dist/aos.css";

function Hero() {
    useEffect(() => {
        Aos.init({
           offset: 120,
           easing: "ease",
           duration: 500,
           once: true,
           mirror: false,
           anchorPlacement: "top-bottom",
        });
     }, []);

    const scrollToBottom = () => {
    window.scrollTo({
        top: document.documentElement.scrollHeight, // Scroll to the bottom
        behavior: "smooth", // Smooth scroll
    });
    };
    return(
        <MainContainer>
            <Container>
                <div>
                    <h1>Buy and sell new and thrifted clothes, shoes and accessories</h1>
                    <p>Declutter your wardrobe and discover new and preloved pieces at affordable prices.</p>
                    <div className="div_container">
                        <button onClick={scrollToBottom}><span>Join Waitlist</span><img src={vec} alt="" /></button>
                    </div>
                </div>
                <div >
                    <img className="hero_image" src={vec1} alt="" />
                    <div className="mobile_hero_image">
                        <img src={vec2} alt="" />
                    </div>
                </div>
            </Container>
        </MainContainer>
    )
}

export default Hero