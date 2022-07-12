import React from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
function Search(props) {
  const [valueInput, setValueInput] = useState("");

  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      valueInput !== "" ? navigate(`/search/${valueInput}`) : navigate("/");
    }
  };
  return (
    <SearchPane>
      <h3>Search Country:</h3>
      <SearchElement>
        <input
          type="text"
          placeholder="input the and enter to search... "
          onChange={(e) => setValueInput(e.target.value)}
          value={valueInput}
          onKeyDown={handleKeyDown}
        />
        <Link
          to={valueInput !== "" ? `/search/${valueInput}` : "/"}
          style={{ width: "40px", height: "100%" }}
        >
          <BsSearch className="icon" />
        </Link>
      </SearchElement>
    </SearchPane>
  );
}

export default Search;

const SearchPane = styled.div`
  max-width: 320px;
  width: 100%;
  margin-top: 20px;

  h3 {
    font-size: 18px;
    font-weight: 600;
    text-shadow: var(--TextShadow);
  }
`;

const SearchElement = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 34px;
  background: #fff;
  box-shadow: 4px 2px 12px #888;
  border-radius: 4px;
  overflow: hidden;

  .icon {
    height: 100%;
    width: 100%;
    font-size: 2px;
    padding: 8px;
    text-align: center;
    background: #aaa !important;
    opacity: 75%;
    transition: opacity 0.2s linear;

    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }

  input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    margin: 0 8px;
  }
`;
