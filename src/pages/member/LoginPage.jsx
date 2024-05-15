import styled from "styled-components";
import { BorderedText, SpanText } from "../../styles/TextStyle"
import { StyledPageContainer } from "../../styles/TitleLocation";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm";

export default function LoginPage() {
  return (
    <StyledPageContainer>
      <BorderedText>
        내 <SpanText>케이크</SpanText>를 꾸며줘!
      </BorderedText>
      <ContentContainer>
        <LoginImg src="img/loginCakeImg.png"></LoginImg>
        <LoginForm />
        <LoginOption>
          <ul>
            <li>
              <Link to="" href="#">
                비밀번호 찾기
              </Link>
            </li>
            <li>|</li>
            <li>
              <Link to="" href="#">
                아이디 찾기
              </Link>
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

const LoginOption = styled.div`
  font-size: x-small;
  margin-top: 1.5rem;
  margin-left: 1rem;

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
