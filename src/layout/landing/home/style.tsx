import styled from "styled-components";
import vec from '../../../assets/Group 24.svg'
import vec1 from '../../../assets/Frame 203.svg'
import vec2 from "../../../assets/mobilephone.svg";



export const MainContainer = styled.main`
    width:100%;
    height:140vh;
    background:url(${vec}),#52014F;
    display:flex;
    justify-content:center;
//   font-family: 'Astoria', sans-serif;


    @media(max-width:600px){
        background:url(${vec1}),#52014F;
        background-repeat:no-repeat;
        height:auto;
    }
`
export const ImgContainer = styled.div`
    width:100%;
    height:auto;
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
        
    }
    h1{
        color:#fff;
        width:100%;
        font-size:3rem;
        @media(max-width:600px){
            bacground-repeat:no-repeat;
            font-size:2rem;
            // border:1px solid white;
            width:100%;
        }
    }
    p{
        color:#fff;
        width:100%;
        font-size:1.5rem;
        margin-top:2%;
        font-weight:0;
        @media(max-width:600px){
            width:100%;
            font-size:14px;
            margin-top:4%;
        }
    }
    .div_container{
        // border:1px solid red;
        display:flex;
        justify-content:center;
        padding-top:2%;
    }
    button{
        border-radius:10px;
        border:none;
        background:#F9B205;
        cursor:pointer;
        width:30%;
        height:5vh;
        display:flex;
        justify-content:center;
        align-items:center;
        gap:10px;
        @media(max-width:600px){
            width:50%;
            margin-top:4%;
        }
    }
    .hero_image{
        @media(max-width:600px){
            display:none;
        }
    }
    .mobile_hero_image{
        display:none;
        @media(max-width:600px){
            display:block;
            margin-left:auto;
            margin-right:auto;
        }
    }
`


