import styled from "styled-components";
import vec3 from "../../../assets/Pattern.svg";

export const MainContainer = styled.main`
    width:100%;
    height:auto;
    background:url(${vec3}),#52014F;
    // background-image:url;
    background-repeat:no-repeat;
    display:flex;
    justify-content:center;
    padding-bottom:5%;

    @media(max-width:600px){
        background:url(${vec3}),#52014F;
        background-repeat:no-repeat;
        height:auto;
    }
`

export const Container = styled.div`
    // text-align:center;
    width:55%;
    // border:1px solid #fff;
    padding-top:5%;
    gap:20px;
    display:flex;
    justify-content:center;
    gap:25px;
    @media(max-width:600px){
        width:80%;
        // border:1px solid red;
        flex-direction:column;
        // place-content:center;
        // display:none;
    }
    h1{
        color:#fff;
        width:100%;
        font-size:3rem;
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
        color:#fff;
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
    
    .footer_left{
        display:flex;
        flex-direction:column;
        width:70%;
        margin-top: 13%;
        margin-right: 30px;

        @media(max-width:600px){
            width:100%;
            // border:1px solid red;
            flex-direction:column;
            // place-content:center;
            // display:none;
        }

        .form_container{
            display:flex;
            flex-direction:column;
            margin-top:10%;

            input{
                padding-left:10px;
                padding-top:10px;
                padding-bottom:15px;
                margin-top:6%;
                height:3vh;
                border-radius:10px;
                font-size:20px;
            }
            input::placeholder{
                color:#83939C;
                font-size:16px;
            
            }
            button{
                border-radius:10px;
                border:trasparent;
                background:#F9B205;
                cursor:pointer;
                width:100%;
                height:6vh;
                display:flex;
                justify-content:space-between;
                align-items:center;
                gap:10px;
                margin-top:6%;
                padding-left:3%;
                padding-right:3%;

                span{
                    font-size:20px;
                    color:#fff;
                    
                }
            }
        }
        .footer_left_down{
            margin-top:30%;
            // border:1px solid red;

             @media(max-width:600px){
                width:100%;
                // border:1px solid red;
                flex-direction:column;
                // place-content:center;
                display:none;
            }

            .contacts{
                display:flex;
                gap:12px;
                align-items:center;
                
                p{  
                    font-size:14px;
                }
            }
        }
    }
    .footer_right{
        width:50%;
        .stores{
            display:flex;
            gap:30px;
            margin-top:3%;
            @media(max-width:600px){
                margin-left: 15px;
            }
        }
        @media(max-width:600px){
            width:auto;
            margin-left: -15px;
        }
    }
    .footer_left_down_mobile{
        margin-top:10%;
        // border:1px solid red;
        display:none;

        @media(max-width:600px){
            width:100%;
            // border:1px solid red;
            flex-direction:column;
            // place-content:center;
            display:grid;
            justify-content:center;

        }

        .contacts{
            display:flex;
            gap:12px;
            align-items:center;
            
            p{  
                font-size:14px;
            }
        }
    }
`
