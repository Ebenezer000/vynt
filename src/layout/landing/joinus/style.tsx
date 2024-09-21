import styled from "styled-components";

interface ButtonProps {
    active: boolean;
  }


export const MainContainer = styled.main`
    padding-top: 25px;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    // border:1px solid #000;
`
export const Container = styled.div`
    text-align:center;
    padding-top:5%;
    gap:20px;
    width: 40%;
    justify-content:center;
    align-items: center;
    @media(max-width:600px){
        width:70%;
        text-align: center;
    }
    h1{
        color:#52014F;
        width:100%;
        font-size:2.5rem;
        @media(max-width:600px){
            font-size:1.4rem;
            margin-bottom: 10px;
        }
    }
    h2{
        color:#52014F;
        width:100%;
        font-size:2rem;
        @media(max-width:600px){
            font-size:1rem;
        }
    }
    .features_container{
        display:flex;
        justify-content:center;
        margin-bottom: 20px;
        gap:8px;
        @media(max-width:600px){
            margin-bottom: 10px;
        }
    }
    h3{
        color:#FC811C;
        font-size: 1.1rem;
        @media(max-width:600px){
            font-size:1rem;
        }
    }
    p{
        padding: 20px;
        width: 90%;
        color:#83939C;
        font-size:1rem;
        margin-top:2%;
        line-height:1.5;
        text-align: center;
        @media(max-width:600px){
            color:#83939C;
            font-size:0.8rem;
            margin-top:2%;
            line-height:1.5;
            text-align: center;
        }

    }
    span{
        color:#52014F;
    }
    .div_container{
        // border:1px solid red;
        display:flex;
        justify-content:center;
        padding-top:2%;
    }
    .joinus_image{
        margin-top:30px;
        margin-bottom:50px;
        @media(max-width:600px){
            width:90%;
            // place-content:center;
            display:none;
        }
    }
    .joinus_image_mobile{
        display:none;
        @media(max-width:600px){
            width:90%;
            margin-left:auto;
            margin-right:auto;
            margin-bottom: 50px;
            margin-top: 30px;
            display:block;
        }
    }
    .seamless_image{
        transition: opacity 0.5s ease-in-out;
        @media(max-width:600px){
        width:90%;
        // place-content:center;
        display:none;
        }
    }
    .seamless_image_mobile{
        display:none;
        @media(max-width:600px){
        width:90%;
        margin-left:auto;
        margin-right:auto;
        // place-content:center;
        display:block;
        }
    }
    .sell_buy_container{
        display:flex;
        
    }
    .slider_container{
        display:grid;
        justify-content:center;
        align-items:center;
        // border:1px solid red;
        padding-top:2%;
        padding-bottom:2%;  
    }
    .slider_settings{
        width:60%;
        // border:1px solid #000;
        display:flex;
        justify-content:space-between;

        @media(max-width:600px){
            display:none;
        }

        button{
            border:none;
            background:transparent;
            font-size:1.2rem;
            cursor:pointer;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%; /* Ensures button takes full width of the container */
            padding: 10px; /* Adjust padding to center text vertically */
        }
    }
    .slide_contain{
        width:100%;
        display:flex;
        justify-content:center;
        padding-bottom:4%;
    }
    .main_slider_container{
        border:1px solid transparent;
        background:#f5f5f5;
        width:35%;
        height:0.2vh;
        border-radius:10px;
        display:flex;
        flex-direction:column;
        justify-content:center;
    }
    .active_slider{
        width:50%;
        background:#52014F;
        height:4px;
        border-radius:20px;
    }
    .slider_settings_image{
        display:none;
        @media(max-width:600px){
            width:100%;
            display:flex;

        }

        button{
            border:none;
            background:transparent;
            font-size:1.2rem;
            cursor:pointer;
        }
    }
    .mobile_buttons{
        display:none;
    }

`

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.active ? '#4CAF50' : '#f1f1f1')};
  color: #52014F;
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  text-align: center;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${(props) => (props.active ? '#45a049' : '#ddd')};
  }
`;

export const Slider = styled.div<ButtonProps>`
  .slide_contain {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 4%;
    @media(max-width:600px){
            width:100%;
            display:flex;
    }
  }
  
  .main_slider_container {
    border: 1px solid transparent;
    background: #f5f5f5;
    width: 35%;
    height: 4px;  /* Adjusted for better slider view */
    border-radius: 10px;
    display: flex;
    justify-content: center;
    position: relative;
    @media(max-width:600px){
        width:100%;
        display:flex;
    }
  }
  
  .active_slider {
    width: 50%;
    background: #52014F;
    height: 2px;
    border-radius: 20px;
    position: absolute;
    transition: transform 0.3s ease-in-out; /* Transition for smooth sliding */
    
    /* Move to left (active) or right (inactive) */
    transform: ${(props) => (props.active ? 'translateX(0)' : 'translateX(100%)')};
  }
`;

export const Slides = styled.div`
    text-align:center;
    padding-top:5%;
    gap:20px;
    width: 100%;
    display:grid;
    justify-content:center;
    align-items: center;
    margin-bottom:20px;
    @media(max-width:600px){
        display:grid;
        text-align: center;
    }

`