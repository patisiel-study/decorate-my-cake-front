import React from "react";
import styled from "styled-components";
import {
  StyledBorderedText,
  StyledText,
  StyledSpanText,
} from "../styles/TextStyle";

const Header = ({ profileImg }) => {
  return (
    <div>
      <Container>
        <StyledBorderedText fontSize="1.5rem">
          내 <StyledSpanText>케이크</StyledSpanText>를 꾸며줘!
        </StyledBorderedText>
        <MenuContainer>
          <Icon className="home" src="/img/home.png" alt="홈" />
          <InnerContainer className="friendContainer">
            <Icon className="friend" src="/img/friendWhite.png" alt="친구" />
            <FriendTapsContainer>
              <FriendTaps className="friendTaps">
                <FriendTap className="friendList">친구목록</FriendTap>
                <FriendTap className="friendBirthday">친구생일</FriendTap>
                <FriendTap className="friendRequest">친구요청</FriendTap>
              </FriendTaps>
              <FriendContents>
                <div>친구목록입니다.</div>
              </FriendContents>
            </FriendTapsContainer>
          </InnerContainer>
          <InnerContainer className="settingContainer">
            <Profile
              className="profile"
              src={profileImg || "/img/profile.png"}
              alt="설정"
            />
            <SettingContainer>
              <SettingInnerContainer>
                <Profile
                  className="profile"
                  src={profileImg || "/img/profile.png"}
                  alt="설정"
                />
                <StyledText>
                  <StyledSpanText>꿈빛파티시엘</StyledSpanText>님
                </StyledText>
              </SettingInnerContainer>
              <SettingInnerContainer>
                <Icon className="cakeHistory" src="/img/cakeBox.png" alt="내 케이크 보관함" />
                <StyledText>내 케이크 보관함</StyledText>
              </SettingInnerContainer>
              <SettingInnerContainer>
                <Icon className="candleHistory" src="/img/candleBlack.png" alt="보낸 편지 보관함" />
                <StyledText>보낸 편지 보관함</StyledText>
              </SettingInnerContainer>
              <SettingInnerContainer>
                <StyledText>로그아웃 | 회원탈퇴</StyledText>
              </SettingInnerContainer>
            </SettingContainer>
          </InnerContainer>
        </MenuContainer>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  width: 100vw;
  height: 4rem;
  padding: 1rem;
  background-color: #facccc;
`;

const MenuContainer = styled.div`
  display: flex;
  position: absolute;
  right: 1.5rem;
`;

const FriendTapsContainer = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  top: 1.5rem;
  right: -0.5rem;
`;

const Icon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  margin-right: 1rem;

  &:hover {
    cursor: pointer;
  }

  &.friend:hover {
    & ~ ${FriendTapsContainer} {
      display: flex;
    }
  }
`;

const FriendContents = styled.div`
  width: 30rem;
  height: 40rem;
  background-color: white;
`;

const InnerContainer = styled.div`
  position: relative;
`;

const SettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 4rem;
  right: -0.5rem;
  width: 15rem;
  height: 10rem;
  background-color: white;
  border-radius: 1rem;
`;

const Profile = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  background-color: white;
  border: 2px solid white;
  border-radius: 50%;

  &:hover {
    & ~ ${SettingContainer} {
      display: flex;
    }
  }
`;

const FriendTaps = styled.div`
  display: flex;
`;

const FriendTap = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 2.5rem;
  background-color: white;
  border-radius: 1rem;
  border: none;
`;

const SettingInnerContainer = styled.div`
  display: flex;
  arign-items: center;
  text-align: center;
`;
