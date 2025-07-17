import styled from "styled-components";

export const ContainerSchedulesAdmin = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #cad2c5;
  display: flex;
  justify-content: center;
  color: #18382d;
`;

export const Container = styled.div`
  background-color: white;
  width: 600px;
  min-height: 600px;
  margin-top: 120px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 40px;
  -webkit-box-shadow: 6px 6px 15px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 6px 15px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 6px 6px 15px -6px rgba(0, 0, 0, 0.75);

  h1 {
    padding-top: 40px;
    padding-bottom: 10px;
    font-weight: 900;
    font-size: 25px;
    color: #18382d;
  }

  select {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  p {
    padding: 10px;
  }

  span {
    font-weight: 600;
  }
`;

export const CardsContainer = styled.div`
  width: 80%;
`;

export const CardContainer = styled.div`
  border-top: 1px solid #18382d;
  border-bottom: 1px solid #18382d;
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
`;
