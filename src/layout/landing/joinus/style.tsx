import styled from "styled-components";

interface ButtonProps {
    active: boolean;
  }


export const MainContainer = styled.main`
    width:100%;
    height:auto;
    display:flex;
    justify-content:center;
    // border:1px solid #000;
`
export const Container = styled.div`
    text-align:center;
    width:35%;
    // border:1px solid #fff;
    padding-top:5%;
    gap:20px;
    display:grid;
    justify-content:center;
    @media(max-width:600px){
        width:80%;
        // border:1px solid red;
        // place-content:center;
        // display:none;
    }
    h1{
        color:#52014F;
        width:100%;
        font-size:3rem;
        @media(max-width:600px){
        font-size:2.0rem;
        }
    }
    h2{
        color:#52014F;
        width:100%;
        font-size:2.5rem;
        @media(max-width:600px){
        font-size:2.0rem;
        }
    }
    .features_container{
        display:flex;
        justify-content:center;
        // border:1px solid red;
        gap:8px;
    }
    h3{
        color:#FC811C;
    }
    p{
        color:#83939C;
        width:100%;
        font-size:1.2rem;
        margin-top:2%;
        font-weight:0;
        line-height:1.5;
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
        // place-content:center;
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
        display:flex;
        justify-content:center;
        align-items:center;
        // border:1px solid red;
        padding-top:2%;
        padding-bottom:2%;  
    }
    .slider_settings{
        width:20%;
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
        width:20%;
        display:none;
        // border:1px solid #000;
        // display:flex;
        justify-content:space-between;
        @media(max-width:600px){
        width:50%;
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