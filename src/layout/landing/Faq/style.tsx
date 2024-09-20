import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 5%;
  background: #f5f5f5;
`;

export const Container = styled.div`
  text-align: center;
  width: 35%;
  padding-top: 5%;
  display: grid;
  justify-content: center;
  gap: 20px;

  @media (max-width: 600px) {
    width: 80%;
  }

  h1 {
    color: #52014f;
    font-size: 2rem;
  }

  p {
    color: #83939c;
    width: 100%;
    font-size: 1.1rem;
    margin-top: 2%;
    line-height: 1.5;

    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }

  .qa_container {
    margin-top: 2%;
  }

  .question {
    border-radius: 9px;
    background: #f5f5f5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3%;
    cursor: pointer;

    h2 {
      color: #4b5563;
      font-size: 1rem;
      text-align: start;

      @media (max-width: 600px) {
        font-size: 15px;
      }
    }

    .faq_icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 24px;
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      transition: transform 0.4s ease-in-out;

      &.open {
        transform: rotate(45deg); // Rotates the icon when open
      }

      img,
      span {
        width: 100%; // Ensures icon or text takes the full button size
        height: 100%; // Keeps size consistent
      }

      @media (max-width: 600px) {
        height: 24px;
        width: 24px;
      }
    }
  }

  .answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease-in-out;

    &.show {
      max-height: 500px; // Adjust this based on the length of the content
    }

    p {
      color: #4b5563;
      font-size: 1rem;
      line-height: 1.5;

      @media (max-width: 600px) {
        font-size: 0.9rem;
      }
    }
  }
`;
