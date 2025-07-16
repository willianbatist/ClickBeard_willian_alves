import styled from "styled-components";

export const HomeAdminContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #cad2c5;
  display: flex;
  justify-content: center;
  color: #18382d;
`;

export const Container = styled.div`
  background-color: white;
  width: 500px;
  min-height: 600px;
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
`;

export const ContainerCardBarber = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
`;