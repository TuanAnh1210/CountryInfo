import styled from "styled-components";
import SwitchMode from "./SwitchMode";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
function Header() {
  const themeContext = useContext(ThemeContext);
  return (
    <HeaderPane className={themeContext.theme}>
      <Link to="/">
        <span>Where in the world?</span>
      </Link>
      <SwitchMode />
    </HeaderPane>
  );
}

export default Header;

const HeaderPane = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  align-items: center;
  padding: 0 26px;
  box-shadow: 0 4px 8px #000;

  span {
    font-size: 24px;
    font-weight: 600;
    text-shadow: 1px 2px 8px #ccc;
    cursor: pointer;
    user-select: none;
  }
`;
