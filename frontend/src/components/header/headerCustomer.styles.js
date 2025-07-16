import styled from "styled-components";

export const HeaderCustomerContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 119px;
  position: fixed;
  z-index: 6;
  width: -webkit-fill-available;

  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    width: 580px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.401);
    padding: 10px 20px;
    border: none;
    border-radius: 40px;
  }

  li {
    overflow-y: hidden;
  }

  a {
    display: inline-block;
    margin: 0 15px;
    color: #18382d;
    text-decoration: none;
    font-weight: 700;
  }

  a:hover  {
    color: #84a98c;
    transition: 0.7s;
  }
`;

export const NavContainer = styled.nav`

`;