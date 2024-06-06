import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
`;

const Input = styled.input`
  border: 1px solid #3d3d3d;
  border-radius: 2rem;
  margin-bottom: 1rem;
  width: 55%;
  padding: 1rem;
  outline: none;
  padding-left: 4rem;
  padding-right: 4rem;
  background: ${({ imagepath }) =>
    imagepath ? `url("${imagepath}") 1rem no-repeat` : "none"};
  background-size: 1.5rem;
  &::placeholder {
    color: #3d3d3d;
  }
`;

export default function StyledInput({ imagePath, ...props }) {
  return (
    <InputContainer>
      <Input {...props} imagepath={imagePath} />
    </InputContainer>
  );
}
