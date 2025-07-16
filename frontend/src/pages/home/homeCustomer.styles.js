import styled from "styled-components";

export const ContainerCustomer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #cad2c5;
  display: flex;
  justify-content: center;
  color: #18382d;
`;

export const ContainerSchedule = styled.form`
  background-color: white;
  width: 500px;
  height: 600px;
  margin-top: 120px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 40px;
  -webkit-box-shadow: 6px 6px 15px -6px rgba(0,0,0,0.75);
  -moz-box-shadow: 6px 6px 15px -6px rgba(0,0,0,0.75);
  box-shadow: 6px 6px 15px -6px rgba(0,0,0,0.75);

  h1 {
    padding-top: 30px;
    padding-bottom: 10px;
    font-weight: 900;
    font-size: 25px;
    color: #18382d;
  }

  h2 {
    padding-bottom: 40px;
  }

  span {
    width: 80%;
    font-weight: 600;
  }

  p {
    color: red;
    font-size: 12px;
    text-align: center;
    margin-top: 5px;
  }
`;

export const Options = styled.div`
  width: 100%;
  padding-bottom: 20px;
`;

export const ContainerOptions = styled.div`
  width: 80%;
  padding-top: 10px;
`;

export const ContainerButton = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
`;