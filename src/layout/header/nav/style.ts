import styled from "styled-components";
import vec3 from "../../../assets/Pattern.svg";


export const MainContainer = styled.main`
    height:auto;
    background:url(${vec3})#52014F;
    padding:2%;
    
    @media(max-width:600px){
        width:auto;
        padding-right:5%;
        padding-top:5%;
    }
`
export const Container = styled.div`
    display:flex;
    justify-content:space-between;
    button{
        border-radius:10px;
        border:none;
        background:#F9B205;
        cursor:pointer;
        color: #000;
        width:14%;
        height:5vh;
        display:flex;
        justify-content:center;
        align-items:center;
        gap:10px;
        @media(max-width:600px){
            width:25%;
            height:25px;
            border-radius:8px;
            font-size: 11px
        }
    }
    
`
