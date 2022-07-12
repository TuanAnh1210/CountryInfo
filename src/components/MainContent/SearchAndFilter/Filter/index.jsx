import React, { useContext, useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { BsChevronCompactDown } from "react-icons/bs";

import { ThemeContext } from "../../../ThemeContext/ThemeContext";
import Options from "./Options";
import { useParams } from "react-router-dom";

function Filter(props) {
  const themeContext = useContext(ThemeContext);
  const refSelect = useRef(null);
  const [isShowOptions, setIsShowOptions] = useState(false);
  const [valueOption, setValueOption] = useState("All");

  const { regionName } = useParams();

  const handleOptions = (e) => {
    if (refSelect.current) {
      setIsShowOptions(refSelect.current.contains(e.target));
    }
  };

  useEffect(() => {
    if (regionName) {
      setValueOption(regionName);
    } else {
      setValueOption("All");
    }
  }, [regionName]);

  useEffect(() => {
    if (isShowOptions) {
      document.addEventListener("click", handleOptions);
      return () => {
        document.removeEventListener("click", handleOptions);
      };
    }
  }, [isShowOptions]);

  return (
    <FilterPane>
      <h3>Filter by regions</h3>
      <SelectPane>
        <Select
          className={themeContext.theme}
          ref={refSelect}
          onClick={handleOptions}
        >
          <span>{valueOption}</span>
          <BsChevronCompactDown />
        </Select>
        {isShowOptions && <Options />}
      </SelectPane>
    </FilterPane>
  );
}
export default Filter;

const FilterPane = styled.div`
  max-width: 160px;
  width: 100%;
  margin-top: 20px;

  h3 {
    font-size: 18px;
    font-weight: 600;
    text-shadow: var(--TextShadow);
  }
`;

const SelectPane = styled.div`
  width: 100%;
  margin-top: 8px;
  position: relative;
  cursor: pointer;
`;

const Select = styled.div`
  padding: 0 8px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  justify-content: space-between;
  height: 34px;
  user-select: none;

  span {
    font-size: 18px;
    font-weight: bold;
  }
`;
