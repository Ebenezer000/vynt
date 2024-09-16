import React from "react"
import { Container, MainContainer } from "./style"
import Vec from "../../../assets/heart.svg";
import vec1 from "../../../assets/Group 21.svg"
import vec2 from "../../../assets/Group 23.svg"

function Testimonials() {
    return(
        <MainContainer>
            <Container>
                <div className="testimonials_container">
                    <img src={Vec} alt="" />
                    <h3>Testimonials</h3>
                </div>
                <div>
                    <h1>
                        Don’t just take our word for it. Here is what the community has to say
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