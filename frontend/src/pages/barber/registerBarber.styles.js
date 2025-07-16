import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background-color: #cad2c5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterForm = styled.form`
  background-color: white;
  width: 500px;
  height: 700px;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  border-radius: 40px;
  -webkit-box-shadow: 6px 6px 15px -6px rgba(0,0,0,0.75);
  -moz-box-shadow: 6px 6px 15px -6px rgba(0,0,0,0.75);
  box-shadow: 6px 6px 15px -6px rgba(0,0,0,0.75);

  p {
    color: red;
    font-size: 12px;
    margin-top: -30px;
  }

  h1 {
    font-weight: 900;
    font-size: 25px;
    color: #18382d;
  }

  ul {
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  li {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
  }
  span {
    margin-bottom: -40px;
    text-align: left;
    width: 78%;
    font-weight: 600;
    color: #18382d;
  }
`;