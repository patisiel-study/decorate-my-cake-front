import React, { useState } from "react";
import styled from "styled-components";
import LoginButton from "../../components/loginButton";
import TitleBorder from "../../components/titleBorder";
import { StyledPageContainer, StyledCakeTitle } from "../../styles/titleLocation";
import { InputStyle } from "../../styles/inputStyle";
import { Link } from "react-router-dom";

const ContentContainer = styled.div`
  background-color: white;
  color: #3d3d3d;
  margin-top: 1.5rem;
  height: 30rem;
  padding: 5rem;
  border-radius: 2rem;
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
`;

const LoginImg = styled.img`
  width: 10rem;
  margin-bottom: 2rem;
  
`;
const CheckContainer = styled.label`
  font-size: x-small;
  display: flex;
  align-items: center;
  margin-top: 0.2rem;
`;
const LoginCheck = styled.input`

    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 1px solid #999;
    appearance: none;
    cursor: pointer;
    transition: background 0.2s;

    &:checked {
        background: #FFDFDF;
        border: none;
`;

const LoginOption = styled.div`
  font-size: x-small;
  margin-top: 1.5rem;

  ul {
    list-style: none;
    padding: 0;
    display: flex;
  }
  li {
    margin-right: 0.9rem;
  }
  a {
    text-decoration: none;
    color: #3d3d3d;
  }
`;

export default function Login() {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <StyledPageContainer>
      <TitleBorder>
        내 <StyledCakeTitle>케이크</StyledCakeTitle>를 꾸며줘!
      </TitleBorder>
      <ContentContainer>
        <LoginImg src="img/loginCakeImg.png"></LoginImg>
        <form>
         
            <InputStyle
              type="text"
              placeholder="아이디"
              imagePath="/img/user.png"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <InputStyle
              type="password"
              placeholder="비밀번호"
              imagePath="/img/password.png"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
         
          <CheckContainer>
            <LoginCheck type="checkbox" />
            로그인 상태 유지
          </CheckContainer>
          <div>
            <LoginButton type="submit">로그인</LoginButton>
          </div>
        </form>

        <LoginOption>
          <ul>
            <li>
              <Link to="" href="#">비밀번호 찾기</Link>
            </li>
            <li>|</li>
            <li>
              <Link to="" href="#">아이디 찾기</Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/signUp">회원가입</Link>
            </li>
          </ul>
        </LoginOption>
      </ContentContainer>
    </StyledPageContainer>
  );
}
