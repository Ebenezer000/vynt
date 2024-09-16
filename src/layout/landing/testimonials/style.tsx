import styled from "styled-components";

export const MainContainer = styled.main`
     width:100%;
    height:auto;
    display:flex;
    justify-content:center;
`
export const Container = styled.div`
    // text-align:center;
    width:80%;
    // border:1px solid #000;
    padding-top:5%;
    gap:20px;
    display:flex;
    flex-direction:column;
    padding-right:5%;
    @media(max-width:600px){
        width:80%;
        // border:1px solid red;
        // place-content:center;
        // display:none;
        margin-top:10%;
    }

    h1{
        color:#52014F;
        width:70%;
        font-size:3rem;
        
        @media(max-width:600px){
            font-size:2rem;
        
        }
    }
    .testimonials_container{
        display:flex;
        // justify-content:center;
        align-items:center;
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
    .testimonial_image{
        @media(max-width:600px){
        width:90%;
        // place-content:center;
        display:none;
        }
    }
    .testimonial_image_mobile{
        display:none;
        @media(max-width:600px){
        width:90%;
        margin-left:auto;
        margin-right:auto;
        // place-content:center;
        display:block;

`
