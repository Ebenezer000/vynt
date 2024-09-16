import React from "react";
import { Container, MainContainer } from "./style";
import vec from "../../../assets/arrow-right-02.svg";
import vec1 from "../../../assets/call.svg";
import vec2 from "../../../assets/mail.svg";
import vec3 from '../../../assets/iPhone 15 Pro Portrait Mockup.svg'
import vec4 from "../../../assets/App Store Black.svg"
import vec5 from "../../../assets/Google PLay Black.svg"

function Footer() {
    return(
        <MainContainer>
            <Container>
                <div className="footer_left">
                    <h1>Want early access</h1>
                    <p>Enter your details below</p>
                    <div className="form_container">
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="number" placeholder="Phone Number" />
                        <button><span>Join Waitlist</span><img src={vec} alt="" /></button>
                    </div>
                    <div className="footer_left_down">
                        <div className="contacts">
                            <img src={vec1} alt="" />
                            <p>+2349056880570</p>
                        </div>
                        <div className="contacts">
                            <img src={vec2} alt="" />
                            <p>Hello@vyntapp.com</p>
                        </div>
                        <div className="contacts">
                            {/* <img src="" alt="" /> */}
                            <p>Copyright © 2024 VYNT</p>
                        </div>
                    </div>
                </div>
                <div className="footer_right">
                    <img src={vec3} alt="" />
                    <div className="stores">
                        <img src={vec4} alt="" />
                        <img src={vec5} alt="" />
                    </div>     
                </div>
                <div className="footer_left_down_mobile">
                    <div className="contacts">
                        <img src={vec1} alt="" />
                        <p>+2349056880570</p>
                    </div>
                    <div className="contacts">
                        <img src={vec2} alt="" />
                        <p>Hello@vyntapp.com</p>
                    </div>
                    <div className="contacts">
                        {/* <img src="" alt="" /> */}
                        <p>Copyright © 2024 VYNT</p>
                    </div>
                </div>
            </Container>
        </MainContainer>
    )
}

export default Footer