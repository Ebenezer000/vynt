import React, { useEffect } from "react"
import { Container, MainContainer } from "./style"
import Vec from "../../../assets/heart.svg";
import vec1 from "../../../assets/Group 21.svg"
import vec2 from "../../../assets/Group 23.svg"
import Aos from "aos";
import "aos/dist/aos.css";


function Testimonials() {
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
    return (
        <MainContainer>
            <Container data-aos="fade-up" data-aos-delay="200">
                <div className="testimonials_container">
                    <img src={Vec} alt="" />
                    <h3>Testimonials</h3>
                </div>
                <div>
                    <h1>
                        DON’T JUST TAKE OUR WORD FOR IT. HERE IS WHAT THE COMMUNITY HAS TO SAY
                    </h1>
                </div>
                <div>
                    <img className="testimonial_image" src={vec1} alt="" />
                    <img className="testimonial_image_mobile" src={vec2} alt="" />
                </div>
            </Container>
        </MainContainer>
    )
}

export default Testimonials