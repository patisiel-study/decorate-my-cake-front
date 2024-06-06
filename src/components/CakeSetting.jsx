import styled from "styled-components";
import { StyledText } from "../styles/TextStyle";

const CakeSetting = () => {
  const settings = ["메시지 작성 범위", "받은 메시지 내용", "받은 메시지 개수"];

  return (
    <Container>
      <StyledText fontSize="1.5rem">케이크 설정</StyledText>
      <PrivacyOptions>
        <StyledText fontSize="1rem">비공개</StyledText>
        <StyledText fontSize="1rem">친구 공개</StyledText>
        <StyledText fontSize="1rem">전체 공개</StyledText>
      </PrivacyOptions>
      {settings.map((setting, index) => (
        <Setting key={index} label={setting} index={index} />
      ))}
    </Container>
  );
};

const Setting = ({ label, index }) => (
  <SettingContainer>
    <LeftContainer>
      <StyledText fontSize="1.2rem">{label}</StyledText>
    </LeftContainer>
    <RightContainer>
      {index === 0 ? (
        <>
          <IconSpacer />
          <Icon src="../../../img/friendBlack.png" />
          <Icon src="../../../img/anyone.png" />
        </>
      ) : (
        <>
          <Icon src="../../../img/onlyMe.png" />
          <Icon src="../../../img/friendBlack.png" />
          <Icon src="../../../img/anyone.png" />
        </>
      )}
    </RightContainer>
  </SettingContainer>
);

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

  &:hover {
    cursor: pointer;
    background-color: #ffdfdf;
    border-radius: 50%;
  }
`;

const IconSpacer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.8rem;
`;
