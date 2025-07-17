import styled from "styled-components";

export const HeaderCustomerContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;
  position: fixed;
  z-index: 6;
  width: 100%;
  top: 0;
  left: 0;
  padding: 0 20px;

  @media (max-width: 767px) {
    display: none;
  }

  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    width: 580px;
    max-width: 100%;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.401);
    padding: 15px 25px;
    border: none;
    border-radius: 40px;
    margin: 0;
    align-items: center;
    overflow: hidden;

    @media (max-width: 768px) {
      width: 100%;
      height: 45px;
      padding: 12px 20px;
      justify-content: center;
      gap: 10px;
    }
  }

  li {
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  a {
    display: inline-block;
    margin: 0 15px;
    color: #18382d;
    text-decoration: none;
    font-weight: 700;
    font-size: 18px;
    white-space: nowrap;
    cursor: pointer;

    @media (max-width: 768px) {
      margin: 0 10px;
      font-size: 16px;
    }
  }

  a:hover {
    color: #84a98c;
    transition: 0.7s;
    transform: scale(1.05);
  }
`;

export const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const MobileMenuContainer = styled.header`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 6;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 767px) {
    display: flex;
  }
`;