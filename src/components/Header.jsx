import React, { useState } from "react";
import styled from "styled-components";
import {
  StyledBorderedText,
  StyledText,
  StyledSpanText,
} from "../styles/TextStyle";
import FriendPage from "../pages/friend/FriendPage"

const Header = ({ profileImg }) => {
  const [isSettingActive, setIsSettingActive] = useState(false);
  const [friendPage, setFriendPage] = useState(false);

  const toggleSettingActive = () => {
    setIsSettingActive(!isSettingActive);
  };

  return (
    <div>
      <Container>
        <StyledBorderedText fontSize="1.5rem">
          내 <StyledSpanText>케이크</StyledSpanText>를 꾸며줘!
        </StyledBorderedText>
        <MenuContainer>
          <Icon className="homeIcon" src="/img/home.png" alt="홈" />
          <InnerContainer className="friendContainer">
            <Icon
              className="friend"
              src="/img/friendWhite.png"
              alt="친구"
              onClick={() => setFriendPage(!friendPage)} 
            />
            {friendPage === true && <FriendPage/>}
          </InnerContainer>
          <InnerContainer className="settingContainer">
            <Profile
              className="profile"
              src={profileImg || "/img/profile.png"}
              alt="설정"
              onClick={toggleSettingActive}
            />
            {isSettingActive && (
              <SettingContainer isVisible={isSettingActive}>
                <SettingInnerContainer>
                  <SettingInnerContainer>
                    <Profile
                      className="profileIcon"
                      src={profileImg || "/img/profile.png"}
                      alt="설정"
                    />
                    <StyledText>
                      <StyledSpanText>꿈빛파티시엘</StyledSpanText>님
                    </StyledText>
                  </SettingInnerContainer>
                  <SettingInnerContainer className="edit">
                    <Icon className="editIcon" src="/img/edit.png" alt="편집" />
                    <StyledText>편집</StyledText>
                  </SettingInnerContainer>
                </SettingInnerContainer>
                <SettingInnerContainer className="cakeHistory">
                  <Icon
                    className="cakeHistoryIcon"
                    src="/img/cakeBox.png"
                    alt="내 케이크 보관함"
                  />
                  <StyledText className="cakeHistoryText">
                    내 케이크 보관함
                  </StyledText>
                </SettingInnerContainer>
                <SettingInnerContainer className="candleHistory">
                  <Icon
                    className="candleHistoryIcon"
                    src="/img/candleBlack.png"
                    alt="보낸 편지 보관함"
                  />
                  <StyledText className="candleHistoryText">
                    보낸 편지 보관함
                  </StyledText>
                </SettingInnerContainer>
                <SettingInnerContainer className="logoutAndResign">
                  <StyledText>로그아웃</StyledText>
                  <StyledText>회원탈퇴</StyledText>
                </SettingInnerContainer>
              </SettingContainer>
            )}
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
  display: ${(props) => (props.isVisible ? "flex" : "none")};
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


const InnerContainer = styled.div`
  position: relative;
`;

const SettingContainer = styled.div`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
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

  &.profile:hover {
    cursor: pointer;
    & ~ ${SettingContainer} {
      display: flex;
    }
  }
`;


const SettingInnerContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  height: 3rem;

  &.edit:hover,
  &.cakeHistory:hover,
  &.candleHistory:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
