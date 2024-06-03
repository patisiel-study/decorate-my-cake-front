import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StyledBackgroundIvory from "../../styles/BackgroundStyle";
import Header from "../../components/Header";
import { StyledBorderedText, StyledSpanText } from "../../styles/TextStyle";
import { RedButton, Icon } from "../../components/RedButton ";
import { CakeAPI } from "../../apis/CakeApi";

export default function MyCakeMain() {
  const [nickname, setNickname] = useState("");
  const [message, setMessage] = useState("");
  const [candleCount, setCandleCount] = useState("");
  const [cakeName, setCakeName] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CakeAPI();
        console.log(response);
        alert(response.data.message);
        const {
          birthday,
          cakeCreatedYear,
          cakeName,
          candleCount,
          candleCountPermission,
          candleCreatePermission,
          candleList,
          candleViewPermission,
          message,
          nickname,
        } = response.data.data;

        setMessage(message);
        setNickname(nickname);
        setCandleCount(candleCount.toString());
        setCakeName(cakeName);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류가 발생했습니다.", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <StyledBackgroundIvory />
      <Plate src="../../../img/plate.png" />
      <Cake
        src="../../../img/cake1.png"
        style={{ display: cakeName ? "flex" : "none" }}
      />
      <CakeMessage style={{ display: cakeName ? "none" : "flex" }}>
        <StyledBorderedText fontSize="1.5rem">{message}</StyledBorderedText>
      </CakeMessage>
      <RedButtonContainer>
        <RedButton>
          <Icon src="../../../img/share.png" />
          초대장 보내기
        </RedButton>
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
        <StyledBorderedText fontSize="1.2rem">
          📩
          <StyledSpanText>{candleCount}</StyledSpanText>개의 메시지가
          도착했어요!
        </StyledBorderedText>
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
  font-family: "SejonghospitalBold", sans-serif;
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
  margin-left: 1rem;
  & > * {
    margin-top: 1rem; // 모든 자식 컴포넌트에 10px 마진 적용
  }
`;
