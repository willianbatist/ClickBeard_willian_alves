import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cad2c5;

  p {
    color: red;
    margin-top: -40px;
    font-size: 12px;
  }
`;

export const SingupContainer = styled.form`
  background-color: white;
  width: 600px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 40px;
  -webkit-box-shadow: 6px 6px 15px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 6px 15px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 6px 6px 15px -6px rgba(0, 0, 0, 0.75);

  h1 {
    font-weight: 900;
    font-size: 30px;
    color: #18382d;
  }

  @media (max-height: 700px) {
    width: 400px;
    height: 560px;

    h1 {
      font-size: 25px;
    }
  }
`;