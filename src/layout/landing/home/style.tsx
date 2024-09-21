import styled from "styled-components";
import vec from '../../../assets/Group 24.svg'
import vec1 from '../../../assets/Frame 203.svg'
import vec3 from "../../../assets/Pattern.svg";



export const MainContainer = styled.main`
    width:100%;
    height:140vh;
    background:url(${vec3}),url(${vec}),#52014F;
    // background-image:url;
    background-repeat:no-repeat;
    display:flex;
    justify-content:center;

    @media(max-width:600px){
        background:url(${vec1}),url(${vec3}),#52014F;
        background-repeat:no-repeat;
        padding-top: 30px;
        height:auto;
    }
`
export const Container = styled.div`
    text-align:center;
    width:60%;
    // border:1px solid #fff;
    padding-top:5%;
    gap:20px;
    display:grid;
    justify-content:center;
    @media(max-width:600px){
        display:block;
        width:70%;  
        justify-content:center;
        text-align:center;
        // border:1px solid red;
        // place-content:center;
        
    }
    h1{
        color:#fff;
        width:100%;
        font-size:3rem;
        @media(max-width:600px){
            bacground-repeat:no-repeat;
            font-size:1.2rem;
            width:100%;
            font-weight: 150;
            margin-top: 15px;
            margin-bottom: 30px;
        }
    }
    p{
        color:#fff;
        width:100%;
        font-size:1.5rem;
        margin-top:2%;
        font-weight:0;
        margin-bottom: 10px;
        @media(max-width:600px){
            display:grid;
            text-align:center;
            justify-content:center;
            width:100%;
            font-size:10px;
            margin-top:4%;
            margin-bottom:13%;
        }
    }
    img{
        @media(max-width:600px){
            margin-top:40px;
        }
    }
    .div_container{
        // border:1px solid red;
        display:flex;
        justify-content:center;
        padding-top:2%;
        @media(max-width:600px){
            display:none;
        }
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
        margin-bottom: -90px;
        @media(max-width:600px){
            display:none;
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
            margin-top: 20px;
        }
    }
`