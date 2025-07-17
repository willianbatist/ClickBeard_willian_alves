import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background-color: #cad2c5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpecialtyForm = styled.form`
  background-color: white;
  width: 600px;
  min-height: 700px;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 40px 20px;
  gap: 30px;

  border-radius: 40px;
  -webkit-box-shadow: 6px 6px 15px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 6px 15px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 6px 6px 15px -6px rgba(0, 0, 0, 0.75);

  p {
    color: red;
    font-size: 12px;
    margin-top: -20px;
    align-self: flex-start;
    margin-left: 10%;
  }

  h1 {
    font-weight: 900;
    font-size: 25px;
    color: #18382d;
    margin-bottom: 20px;
  }

  span {
    text-align: left;
    width: 78%;
    font-weight: 600;
    color: #18382d;
    align-self: flex-start;
    margin-left: 10%;
  }
`;

export const SpecialtyList = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  h2 {
    font-weight: 700;
    font-size: 20px;
    color: #18382d;
    text-align: center;
    margin-bottom: 20px;
    border-bottom: 2px solid #18382d;
    padding-bottom: 10px;
  }

  p {
    color: #666;
    font-style: italic;
    text-align: center;
    margin: 20px 0;
  }
`;

export const SpecialtyItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e9ecef;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  span {
    font-weight: 600;
    color: #18382d;
    font-size: 16px;
    width: auto;
    margin: 0;
  }

  svg {
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;