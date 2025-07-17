import styled from 'styled-components';

export const CardBarberContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  width: 80%;
  display: flex;
  align-items: center;
  border-top: 0.5px solid #18382d;
  border-bottom: 0.5px solid #18382d;
  padding-bottom: 10px;
  padding-top: 10px;

  span {
    font-weight: 600;
  }

  p {
    width: 35%;
    text-align: center;
  }

  div {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    ul {
      list-style: none;
      padding: 0;
      margin: 5px 0;
      font-size: 12px;

      li {
        text-align: center;
        margin: 2px 0;
      }
    }

    > div {
      display: flex;
      gap: 8px;
      width: 100%;
      justify-content: center;
    }
  }
`;
