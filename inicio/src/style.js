import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: center;
  background-color: papayawhip;
`;

export const Title = styled.h1`
  color: palevioletred;
`;
export const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

export const Footer = styled.footer`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  position: fixed;
  bottom: 10;
  left: 0;
  right: 0;
`;
export const StyledNavbar = styled.nav`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  position: sticky;
  top: 0;
  background-color: white;

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 2px;
    spacing: 2px;

    li {
      margin: 2px;
      padding: 2px;
      a {
        color: violet;
        text-decoration: none;
      }
  }
`;


