import styled from "styled-components";
import vec3 from "../../../assets/Pattern.svg";

export const MainContainer = styled.main`
    width: 100%;
    height: auto;
    background: url(${vec3}), #52014F;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    padding-bottom: 5%;

    @media (max-width: 600px) {
        background: url(${vec3}), #52014F;
        background-repeat: no-repeat;
        height: auto;
    }
`;

export const Container = styled.div`
    width: 55%;
    padding-top: 5%;
    gap: 25px;
    display: flex;
    justify-content: center;
    gap: 25px;

    @media (max-width: 600px) {
        width: 80%;
        flex-direction: column;
    }

    h1 {
        color: #fff;
        width: 100%;
        font-size: 3rem;
    }

    .features_container {
        display: flex;
        justify-content: center;
        gap: 8px;
    }

    h3 {
        color: #FC811C;
    }

    p {
        color: #fff;
        width: 100%;
        font-size: 1.2rem;
        margin-top: 2%;
        font-weight: 0;
        line-height: 1.5;
    }

    span {
        color: #52014F;
    }

    .footer_left {
        display: flex;
        flex-direction: column;
        width: 70%;
        margin-top: 3%;
        margin-right: 30px;

        @media (max-width: 600px) {
            width: 100%;
            flex-direction: column;
        }

        .form_container {
            display: flex;
            flex-direction: column;
            margin-top: 10%;

            input {
                padding-left: 10px;
                padding-top: 10px;
                padding-bottom: 15px;
                margin-top: 6%;
                height: 3vh;
                border-radius: 10px;
                font-size: 20px;
                outline: none;
                border: none;
            }

            input::placeholder {
                color: #83939C;
                font-size: 16px;
            }

            button {
                border-radius: 10px;
                background: #F9B205;
                cursor: pointer;
                width: 100%;
                height: 6vh;
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 10px;
                margin-top: 6%;
                padding-left: 3%;
                padding-right: 3%;
                outline: none;
                border: none;
            }

            span {
                font-size: 20px;
                color: #fff;
            }
        }

        .footer_left_down {
            margin-top: 30%;

            @media (max-width: 600px) {
                display: none;
            }

            .contacts {
                display: flex;
                gap: 12px;
                align-items: center;

                p {
                    font-size: 14px;
                }
            }
        }
    }

    .footer_right {
        width: 50%;
        img {
            height: 80%;
        }

        .stores {
            display: flex;
            gap: 30px;
            margin-top: 3%;
        }

        @media (max-width: 600px) {
            display: none;
        }
    }

    .footer_left_down_mobile {
        margin-top: 10%;
        display: none;

        @media (max-width: 600px) {
            width: 100%;
            display: grid;
            justify-content: center;

            img {
                margin-bottom: 10%;
                @media (max-width: 600px) {
                    display: none;
                }
            }

            .contacts {
                display: flex;
                gap: 12px;
                align-items: center;

                img {
                    padding: 0;
                    margin: 0;
                }

                p {
                    font-size: 14px;
                }
            }
        }
    }
`;
