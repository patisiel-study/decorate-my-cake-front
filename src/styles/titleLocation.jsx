import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const CakeTitle = styled.span`
  color: #ff3b3b;
`;

const StyledPageContainer = ({ children }) => {
  return <PageContainer>{children}</PageContainer>;
};

const StyledCakeTitle = ({ children }) => {
  return <CakeTitle>{children}</CakeTitle>;
};

export { StyledPageContainer, StyledCakeTitle };
