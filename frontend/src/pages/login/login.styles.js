import styled from "styled-components";

export const Container = styled.div`

  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cad2c5;

  p {
    color: red;
    margin-top: -40px;
    font-size: 12px;
  }

  @media (max-height: 700px) {
    p {
      margin-top: -30px;
    }
  }
`;

export const LoginContainer = styled.form`
  background-color: white;
  border-radius: 40px;
  -webkit-box-shadow: 6px 6px 15px -6px rgba(0,0,0,0.75);
  -moz-box-shadow: 6px 6px 15px -6px rgba(0,0,0,0.75);
  box-shadow: 6px 6px 15px -6px rgba(0,0,0,0.75);
  width: 500px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  img {
    height: 300px;
    width: 300px;
  }

  @media (max-height: 700px) {
    width: 400px;
    height: 560px;
  }
`;

export const GroupButton = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-height: 700px) {
    width: 80%;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: -40px;
    font-weight: 900;
    font-family: Comic Sans MS, Comic Sans, cursive;
    font-size: 30px;
    color: #18382d;
  }

  @media (max-height: 700px) {
    h1 {
      font-size: 20px;
      margin-top: -30px;
    }
    img {
      height: 200px;
      width: 200px;
    }
  }
`;