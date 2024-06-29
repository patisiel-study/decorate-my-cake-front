import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StyledBackgroundIvory from '../../styles/BackgroundStyle';
import Header from '../../components/Header';
import {
  StyledBorderedText,
  StyledText,
  StyledSpanText,
} from '../../styles/TextStyle';
import ToggleSwitch from '../../components/ToggleSwitch';
import { RedButton, Icon } from '../../components/RedButton';
import { CakeViewAPI } from '../../apis/CakeViewApi';
import { Link } from 'react-router-dom';

export default function MyCakeMain() {
  const [nickname, setNickname] = useState('');
  const [message, setMessage] = useState('');
  const [candleCount, setCandleCount] = useState('');
  const [cakeName, setCakeName] = useState(null);
  const [cakeUrl, setCakeUrl] = useState(null);
  const [dDay, setDDay] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CakeViewAPI();
        console.log(response);
        alert(response.data.message);
        const {
          birthday,
          cakeCreatedYear,
          cakeName,
          candleCount,
          candleCountPermission,
          candleCreatePermission,
          candleViewPermission,
          dday,
          message,
          cakeUrl,
          nickname,
        } = response.data.data;

        localStorage.setItem('nickname', nickname);
        setMessage(message);
        setNickname(nickname);
        setCakeUrl(cakeUrl);
        setCandleCount(candleCount != null ? candleCount.toString() : '0');
        setCakeName(cakeName);
        setDDay(dday);
      } catch (error) {
        console.error('데이터를 가져오는 중 오류가 발생했습니다.', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <StyledBackgroundIvory />
      <Plate src="../../../img/plate.png" />
      <Cake src={cakeUrl} style={{ display: cakeUrl ? 'flex' : 'none' }} />
      <CreateCakeContainer
        style={{ display: dDay <= 30 && !cakeUrl ? 'flex' : 'none' }}
      >
        <Link to="/selectCake" style={{ textDecoration: 'none' }}>
          <RedButton>케이크 만들기</RedButton>
        </Link>
      </CreateCakeContainer>
      <CakeMessage style={{ display: cakeUrl ? 'none' : 'flex' }}>
        <StyledBorderedText fontSize="1.5rem">{message}</StyledBorderedText>
      </CakeMessage>
      <RedButtonContainer style={{ display: cakeUrl ? 'flex' : 'none' }}>
        <RedButton>케이크 삭제</RedButton>
        <RedButton>
          <Icon src="../../../img/cake.png" />
          케이크 설정
        </RedButton>
      </RedButtonContainer>
      <Header />
      <LeftContainer>
        <StyledBorderedText fontSize="1.5rem">
          <StyledSpanText>{nickname}</StyledSpanText>님의 케이크
        </StyledBorderedText>
        <StyledText fontSize="1.2rem" fontColor="#c0aaa1">
          📩 {candleCount}개의 메시지가 도착했어요!
        </StyledText>
        <ToggleSwitch />
      </LeftContainer>
    </div>
  );
}

const RedButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 22rem;
`;

const Cake = styled.img`
  position: absolute;
  bottom: 19rem;
  left: 50%;
  transform: translateX(-50%);
  width: 20rem;
  height: 19rem;
`;

const Plate = styled.img`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 25rem;
  height: 27rem;
`;

const PageButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  background-color: white;
  color: #3d3d3d;
  border: none;
  border-radius: 50%;
  font-family: 'SejonghospitalBold', sans-serif;
  &:hover {
    background-color: #facccc;
  }
`;

const CakeMessage = styled.div`
  position: absolute;
  bottom: 25rem;
  left: 50%;
  transform: translateX(-50%);
  width: fit-content;
  word-break: keep-all;
  text-align: center;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  & > * {
    margin-bottom: 0.4rem;
  }
`;

const CreateCakeContainer = styled.div`
  position: absolute;
  bottom: 20rem;
  left: 50%;
  transform: translateX(-50%);
  width: fit-content;
`;
