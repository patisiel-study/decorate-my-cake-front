import React from "react";
import styled from "styled-components";
import StyledBackgroundIvory from "../../styles/BackgroundStyle";
import Header from "../../components/Header";
import CakeSetting from "../../components/CakeSetting";
import { RedButton } from "../../components/RedButton";
import {
  StyledBorderedText,
  StyledText,
  StyledSpanText,
} from "../../styles/TextStyle";
import { useNavigate, useLocation } from "react-router-dom";

const SetCakePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const nickname = localStorage.getItem("nickname");
  const cakeName = location.state?.cakeName;

  const handleHomeClick = () => {
    navigate("/myCakeMain");
  };

  const handleBackClick = () => {
    window.history.back();
  };

  const handleNextClick = () => {
    if (cakeName) {
      navigate("/myCakeMain", { state: { cakeName } });
    }
  };

  return (
    <div>
      <StyledBackgroundIvory />
      <Header />
      <RedButtonContainer>
        <RedButton onClick={handleBackClick}>이전</RedButton>
        <RedButton>완료</RedButton>
      </RedButtonContainer>
      <Container>
        <Cake src={`../../../img/${cakeName}.png`} />
        <CakeSetting />
      </Container>
      <LeftContainer>
        <StyledBorderedText fontSize="1.5rem">
          <StyledSpanText>{nickname}</StyledSpanText>님의 케이크
        </StyledBorderedText>
        <BackContainer onClick={handleHomeClick}>
          <BackIcon on src="../../img/back.png" alt="이전으로 돌아가기" />
          <StyledText>홈으로</StyledText>
        </BackContainer>
        <StyledText fontSize="1.2rem">
          올해의 케이크는 어떻게 만들까요?
        </StyledText>
      </LeftContainer>
    </div>
  );
};

export default SetCakePage;

const Cake = styled.img`
  display: flex;
  width: 14rem;
  height: 14rem;
  margin: 0 1.5rem;
  padding: 5rem;
  background-color: white;
  border-radius: 3rem;
`;

const RedButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 6rem;
  left: 50%;
  transform: translateX(-50%);
  width: 23rem;
`;

const Container = styled.div`
  display: flex;
  position: absolute;
  bottom: 12rem;
  left: 50%;
  transform: translateX(-50%);
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  & > * {
    margin-bottom: 0.6rem;
  }
`;

const BackContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: yellow;
  &:hover {
    cursor: pointer;
  }
`;

const BackIcon = styled.img`
  width: 1.2rem;
  height: 1.2rem;
`;

const RightContainer = styled.div``;
