import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StyledBackgroundIvory from "../../styles/BackgroundStyle";
import Header from "../../components/Header";
import { RedButton } from "../../components/RedButton";
import {
  StyledBorderedText,
  StyledText,
  StyledSpanText,
} from "../../styles/TextStyle";
import { Link, useNavigate } from "react-router-dom";

const CreateCakePage = () => {
  const nickname = localStorage.getItem("nickname");
  const [cakeName, setCakeName] = useState(null);
  const navigate = useNavigate();

  const handleBackClick = () => {
    window.history.back();
  };

  const handleCakeClick = (cake) => {
    setCakeName(cake);
  };

  const handleNextClick = () => {
    if (cakeName) {
      navigate("/next-page", { state: { cakeName } });
    }
  };

  return (
    <div>
      <StyledBackgroundIvory />
      <CakeContainer>
        <Cake
          src="../../../img/cake1.png"
          onClick={() => handleCakeClick("cake1")}
        />
        <Cake
          src="../../../img/cake2.png"
          onClick={() => handleCakeClick("cake2")}
        />
        <Cake
          src="../../../img/cake3.png"
          onClick={() => handleCakeClick("cake3")}
        />
      </CakeContainer>
      <Header />
      <RedButtonContainer>
        <RedButton onClick={handleNextClick}>다음</RedButton>
      </RedButtonContainer>
      <LeftContainer>
        <StyledBorderedText fontSize="1.5rem">
          <StyledSpanText>{nickname}</StyledSpanText>님의 케이크
        </StyledBorderedText>
        <BackContainer onClick={handleBackClick}>
          <BackIcon on src="../../img/back.png" alt="이전으로 돌아가기" />
          <StyledText>홈으로</StyledText>
        </BackContainer>
        <StyledText fontSize="1.2rem">케이크 디자인을 선택해주세요</StyledText>
      </LeftContainer>
    </div>
  );
};

export default CreateCakePage;

const CakeContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 15rem;
  left: 50%;
  transform: translateX(-50%);
`;

const Cake = styled.img`
  position: relative;
  width: 14rem;
  height: 14rem;
  margin: 0 1.5rem;
  padding: 3rem;

  &:hover {
    cursor: pointer;
    background-color: #ffdfdf;
    border-radius: 25%;
  }
`;

const RedButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 8rem;
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
  display: inline-block;
  background-color: yellow;
  &:hover {
    cursor: pointer;
  }
`;

const BackIcon = styled.img`
  width: 1.2rem;
  height: 1.2rem;
`;
