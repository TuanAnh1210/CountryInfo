import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Option({ region }) {
  const navigate = useNavigate();
  const handleValueOption = () => {
    if (region.value !== "All") {
      navigate(`/region/${region.value}`);
    } else {
      navigate("/");
    }
  };

  return (
    <OptionItem onClick={handleValueOption}>
      <region.icon />
      <span>{region.value}</span>
    </OptionItem>
  );
}

export default Option;

const OptionItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 100;
  cursor: pointer;
  padding: 4px 8px;

  &:hover {
    font-weight: bold;
    background: var(--SelectOptionBackground);
  }

  span {
    margin-left: 6px;
  }
`;
