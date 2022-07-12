import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../../ThemeContext/ThemeContext";
import { BiWorld } from "react-icons/bi";
import Option from "./Option";

const RegionList = [
  { icon: BiWorld, value: "All" },
  { icon: BiWorld, value: "Africa" },
  { icon: BiWorld, value: "Americas" },
  { icon: BiWorld, value: "Asia" },
  { icon: BiWorld, value: "Europe" },
  { icon: BiWorld, value: "Oceania" },
];

function Options(props) {
  const themeContext = useContext(ThemeContext);
  return (
    <OptionsPane className={themeContext.theme}>
      {RegionList.map((region, index) => (
        <Option region={region} key={index} />
      ))}
    </OptionsPane>
  );
}

const OptionsPane = styled.ul`
  width: 100%;
  margin-top: 2px;
  border-radius: 4px;
  position: absolute;
  overflow: hidden;
  z-index: 1;
`;

export default Options;
