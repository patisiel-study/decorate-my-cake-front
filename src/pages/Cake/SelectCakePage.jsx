import React, { useState } from 'react';
import styled from 'styled-components';
import StyledBackgroundIvory from '../../styles/BackgroundStyle';
import Header from '../../components/Header';
import { RedButton } from '../../components/RedButton';
import {
  StyledBorderedText,
  StyledText,
  StyledSpanText,
} from '../../styles/TextStyle';
import { useNavigate } from 'react-router-dom';

const CreateCakePage = () => {
  const nickname = localStorage.getItem('nickname');
  const [cakeName, setCakeName] = useState(null);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/myCakeMain');
  };

  const handleCakeClick = (cake) => {
    setCakeName(cake);
  };

  const handleNextClick = () => {
    if (cakeName) {
      navigate('/setCake', { state: { cakeName } });
    }
  };

  return (
    <div>
      <StyledBackgroundIvory />
      <CakeContainer>
        <Cake
          src="../../../img/WHITE_CAKE.png"
          onClick={() => handleCakeClick('WHITE_CAKE')}
          isSelected={cakeName === 'WHITE_CAKE'}
        />
        <Cake
          src="../../../img/RED_CAKE.png"
          onClick={() => handleCakeClick('RED_CAKE')}
          isSelected={cakeName === 'RED_CAKE'}
        />
        <Cake
          src="../../../img/BROWN_CAKE.png"
          onClick={() => handleCakeClick('BROWN_CAKE')}
          isSelected={cakeName === 'BROWN_CAKE'}
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
        <BackContainer onClick={handleHomeClick}>
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
  bottom: 13rem;
  left: 50%;
  transform: translateX(-50%);
`;

const Cake = styled.img`
  position: relative;
  width: 14rem;
  height: 14rem;
  margin: 0 1.5rem;
  padding: 3rem;
  background-color: ${({ isSelected }) =>
    isSelected ? '#ffdfdf' : 'transparent'};
  border-radius: ${({ isSelected }) => (isSelected ? '25%' : '0')};
  cursor: ${({ isSelected }) => (isSelected ? 'default' : 'pointer')};

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
  bottom: 6rem;
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
