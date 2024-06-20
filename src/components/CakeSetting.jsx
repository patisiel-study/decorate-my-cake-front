import React, { useState } from "react";
import styled from "styled-components";
import { StyledText } from "../styles/TextStyle";

const CakeSetting = ({
  candleCreatePermission,
  candleViewPermission,
  candleCountPermission,
  onPermissionChange,
}) => {
  const settings = ["메시지 작성 범위", "받은 메시지 내용", "받은 메시지 개수"];

  const handleIconClick = (index, permission) => {
    onPermissionChange(index, permission);
  };

  return (
    <Container>
      <StyledText fontSize="1.5rem">케이크 설정</StyledText>
      <PrivacyOptions>
        <StyledText fontSize="1rem">비공개</StyledText>
        <StyledText fontSize="1rem">친구 공개</StyledText>
        <StyledText fontSize="1rem">전체 공개</StyledText>
      </PrivacyOptions>
      {settings.map((setting, index) => (
        <Setting
          key={index}
          label={setting}
          index={index}
          candleCreatePermission={candleCreatePermission}
          candleViewPermission={candleViewPermission}
          candleCountPermission={candleCountPermission}
          onIconClick={handleIconClick}
        />
      ))}
    </Container>
  );
};

const Setting = ({
  label,
  index,
  candleCreatePermission,
  candleViewPermission,
  candleCountPermission,
  onIconClick,
}) => {
  return (
    <SettingContainer>
      <LeftContainer>
        <StyledText fontSize="1.2rem">{label}</StyledText>
      </LeftContainer>
      <RightContainer>
        {index === 0 ? (
          <>
            <IconSpacer />
            <Icon
              src="../../../img/friendBlack.png"
              isSelected={candleCreatePermission === "ONLY_FRIENDS"}
              onClick={() => onIconClick(index, "ONLY_FRIENDS")}
            />
            <Icon
              src="../../../img/anyone.png"
              isSelected={candleCreatePermission === "ANYONE"}
              onClick={() => onIconClick(index, "ANYONE")}
            />
          </>
        ) : index === 1 ? (
          <>
            <Icon
              src="../../../img/onlyMe.png"
              isSelected={candleViewPermission === "ONLY_ME"}
              onClick={() => onIconClick(index, "ONLY_ME")}
            />
            <Icon
              src="../../../img/friendBlack.png"
              isSelected={candleViewPermission === "ONLY_FRIENDS"}
              onClick={() => onIconClick(index, "ONLY_FRIENDS")}
            />
            <Icon
              src="../../../img/anyone.png"
              isSelected={candleViewPermission === "ANYONE"}
              onClick={() => onIconClick(index, "ANYONE")}
            />
          </>
        ) : index === 2 ? (
          <>
            <Icon
              src="../../../img/onlyMe.png"
              isSelected={candleCountPermission === "ONLY_ME"}
              onClick={() => onIconClick(index, "ONLY_ME")}
            />
            <Icon
              src="../../../img/friendBlack.png"
              isSelected={candleCountPermission === "ONLY_FRIENDS"}
              onClick={() => onIconClick(index, "ONLY_FRIENDS")}
            />
            <Icon
              src="../../../img/anyone.png"
              isSelected={candleCountPermission === "ANYONE"}
              onClick={() => onIconClick(index, "ANYONE")}
            />
          </>
        ) : null}
      </RightContainer>
    </SettingContainer>
  );
};

export default CakeSetting;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30rem;
  height: 24rem;
  background-color: #ffdfdf;
  border-radius: 3rem;
`;

const PrivacyOptions = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 25rem;
  margin-top: 1.1rem;

  & > * {
    margin-left: 1rem;
  }
`;

const SettingContainer = styled.div`
  display: flex;
  padding-top: 1rem;
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;
  height: 4.5rem;
  background-color: #facccc;
  border-radius: 1rem 0 0 1rem;
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 13rem;
  height: 2.5rem;
  padding: 1rem;
  background-color: white;
  border-radius: 0 1rem 1rem 0;
`;

const Icon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.8rem;
  border-radius: 30%;
  background-color: ${({ isSelected }) =>
    isSelected ? "#ffdfdf" : "transparent"};

  &:hover {
    cursor: pointer;
    background-color: #ffdfdf;
  }
`;

const IconSpacer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.8rem;
`;
