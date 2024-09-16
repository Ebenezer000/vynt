import styled from "styled-components";

export const MainContainer = styled.main`
    height:auto;
    background:#52014F;
    padding:2%;

    @media(max-width:600px){
        // border:1px solid red;
        padding-right:5%;
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
        width:14%;
        height:5vh;
        display:flex;
        justify-content:center;
        align-items:center;
        gap:10px;
        @media(max-width:600px){
            width:30%;
        }
    }
    
`
