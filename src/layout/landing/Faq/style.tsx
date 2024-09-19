import styled from "styled-components";

export const MainContainer = styled.main`
    width:100%;
    height:auto;
    display:flex;
    justify-content:center;
    padding-bottom:5%;
    background:#F5F5F5;


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
        font-size:2rem;
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
        font-size:1.1rem;
        margin-top:2%;
        font-weight:0;
        line-height:1.5;
        
        @media(max-width:600px){
            font-size:1.0rem;
        
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
        .question{
            border-radius:9px;
            background:#f5f5f5;
            // border:1px solid #6B7280;
            display:flex;
            justify-content:space-between;
            align-items:center;
            padding:3%;
            margin-top:2%;


            h2{
                color:#4B5563;
                font-size:1rem;
                font-weight:normal; 
                text-align:start;
                 @media(max-width:600px){
                    font-size:15px;
                    }
                }
                .faq_icon{
                    cursor:pointer;
                    @media(max-width:600px){
                       height:4%;
                    }
            }
        }
`
