import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledPageContainer = ({ children }) => {
  return <PageContainer>{children}</PageContainer>;
};


export { StyledPageContainer};
