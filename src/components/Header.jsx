import React from "react";
import styled from "styled-components";
import { StyledBorderedText, StyledSpanText } from "../styles/TextStyle";

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
          <Profile src={profileImg || "/img/profile.png"} alt="설정" />
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
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
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
    background-color: yellow;
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

const Profile = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  background-color: white;
  border: 2px solid white;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
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
  border: 2px solid black;
`;
