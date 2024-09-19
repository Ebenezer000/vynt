import React, { useEffect, useState } from "react"
import { Container, MainContainer, Button } from "./style"
import vec from "../../../assets/div.framer-amyu2d.svg";
import vec1 from "../../../assets/game.svg"
import vec2 from '../../../assets/Group 20.svg'
import vec3 from '../../../assets/Group 22.svg'
import vec4 from "../../../assets/Rectangle 3.svg"
import vec5 from "../../../assets/Group 26.svg"
import Aos from "aos";
import "aos/dist/aos.css";

function JoinUs() {
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
    const [selectedOption, setSelectedOption] = useState('selling');
    const [imageLoaded, setImageLoaded] = useState(false);

    const images = {
        selling: vec2,
        buying: vec4,
      };
    const mobileImages = {
        selling: vec3,
        buying: vec5,
      };

      const handleImageChange = (option) => {
        setImageLoaded(false); // Reset image loaded state before new image
        setSelectedOption(option);
      };

    return(
        <MainContainer>
            <Container data-aos="fade-up" data-aos-delay="300">
                <div>
                    <h1>Join a Community of Thrift lovers ❤️ Bargain hunters</h1>
                    <p>Whether you want to discover new and thrifted fashion at affordable prices,declutter your wardrobe,give your clothes a second life and earn some money or if you are thrift retailer looking to reach a community of thrift loves .Vynt is for you </p>
                    <p>It’s not about number of components. With <span>top Figma tricks & 
                    techniques, battle-tested design system approach,</span> Prime 
                    supercharges your skills, and empowers you to work at warp speed. </p>
                </div>
                <div>
                    <img className="joinus_image" src={vec} alt="" />
                </div>
                <div className="features_container">
                    <img src={vec1} alt="" />
                    <h3>Features</h3>
                </div>
                <div>
                    <h1>Seamlessly Switch Between Buying or Selling</h1>
                    <div className="slider_container">
                        <div className="slider_settings">
                            <Button active={selectedOption === 'selling'} onClick={() => setSelectedOption('selling')}>
                                Selling
                            </Button>
                            <Button active={selectedOption === 'buying'} onClick={() => setSelectedOption('buying')}>
                                Buying
                            </Button>
                        </div>   
                        <div className="slider_settings_image">
                            <Button active={selectedOption === 'selling'} onClick={() => setSelectedOption('selling')}>
                                Selling
                            </Button>
                            <Button active={selectedOption === 'buying'} onClick={() => setSelectedOption('buying')}>
                                Buying
                            </Button>
                        </div>   
                    </div>
                    <div className="slide_contain">
                        <div className="main_slider_container">
                            <div className="active_slider"></div>
                        </div>
                    </div>
                    <div>

                    </div>
                    <img className="seamless_image" src={images[selectedOption]} alt="" />
                    <img className="seamless_image_mobile" src={mobileImages[selectedOption]} alt="" />     
                </div>
            </Container>
        </MainContainer>
    )
}

export default JoinUs