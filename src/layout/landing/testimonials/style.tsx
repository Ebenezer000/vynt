import styled from "styled-components";

export const MainContainer = styled.main`
     width:100%;
    height:auto;
    display:flex;
    justify-content:center;
    background:#F5F5F5;

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
        padding: 10px;
        margin-top:10%;
    }

    h1{
        color:#52014F;
        width:70%;
        font-size:2.5rem;
        
        @media(max-width:600px){
            font-size:1.1rem;
            width: 95%;
        }
    }
    .testimonials_container{
        display:flex;
        align-items:center;
        gap:8px;
    }
    h3{
        color:#FC811C;
        @media(max-width:600px){
            font-size:0.7rem;
        
        }
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
        display:none;
        }
    }
    .testimonial_image_mobile{
        display:none;
        @media(max-width:600px){
            width:90%;
            margin-top: 10px;
            margin-bottom: 40px;
            margin-left:auto;
            margin-right:auto;
            display:block;

        }
    }
    .testimonial_content{
        display:flex;
        gap:20px;
        border:1px solid;
    }
    .testimonials_first_container{
        width:80%;
    }
    .name_border{
        background:#f5f5f5;
        border-radius:10px;
        padding-left:3%;
        padding-right:2%;
        padding-top:2%;
        padding-bottom:2%;
        align-items:center;
        .name_header{
            font-size:20px;
            font-weight:500;
            display:flex;
            aling-items:center;
        }
        span{
            width:100%;
            font-size:14px;
            font-weight:normal;
            padding-top:4%;
            font-family: 'Helvetica Neue', sans-serif;
            color:#4B5563;
        }
    }
`
export const Reviews = styled.div`
        background:#f5f5f5;
        border-radius:10px;
        padding-left:3%;
        padding-right:2%;
        padding-top:2%;
        padding-bottom:2%;
        align-items:center;
        .name_header{
            font-size:20px;
            font-weight:500;
            display:flex;
            aling-items:center;
        }
`