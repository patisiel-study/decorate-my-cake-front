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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CakeAPI();
        console.log(response);
        // const { nickname, candleCount, message } = response.data;

        setMessage(message || "");
        setNickname(nickname || "");
        setCandleCount(candleCount || "");

        console.log(message, nickname, candleCount);
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
      <Cake src="../../../img/cake1.png" />
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
      <StyledBorderedText>
        <StyledSpanText>꿈빛 파티시엘</StyledSpanText>님의 케이크
      </StyledBorderedText>
      <p>닉네임: {nickname}</p>
      <p>메시지: {message}</p>
      <p>촛불 개수: {candleCount}</p>
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
  color: #3D3D3D;
  border: none;
  border-radius: 50%;
  font-family: "SejonghospitalBold", sans-serif;
  &:hover {
    background-color: #facccc;
  }
`;
