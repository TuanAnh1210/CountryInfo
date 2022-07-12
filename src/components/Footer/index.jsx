import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../ThemeContext/ThemeContext";

function Footer() {
  const themeContext = useContext(ThemeContext);
  return (
    <FooterContainer className={themeContext.theme}>
      <h4>TA Group</h4>
      <p>tuananh0852131210@gmail.com</p>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
`;
