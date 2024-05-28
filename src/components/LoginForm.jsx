import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';
import { LoginAPI, TestAPI } from '../apis/LoginApi';
import PinkButton from './PinkButton';
import StyledInput from '../components/InputStyle';

export default function LoginForm() {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [cookies, setCookies, removeCookies] = useCookies(['rememberUserId']);
  const [isRemember, setIsRemember] = useState(false);

  useEffect(() => {
    if (cookies.rememberUserId !== undefined) {
      setUserId(cookies.rememberUserId);
      setIsRemember(true);
    }
  }, [cookies.rememberUserId]);

  const onRememberHandler = (e) => {
    const checked = e.target.checked;
    setIsRemember(checked);
    if (checked) {
      setCookies('rememberUserId', userId, { path: '/' });
    } else {
      removeCookies('rememberUserId');
    }
  };

  const onUserIdChange = (e) => {
    const value = e.target.value;
    setUserId(value);
    if (isRemember) {
      setCookies('rememberUserId', value, { path: '/' });
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      console.log(userId);
      console.log(userPassword);
      const response = await LoginAPI(userId, userPassword);
      const { accessToken, refreshToken } = response.data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      const testResponse = await TestAPI(accessToken);
      console.log(testResponse);

      alert(response.message);

      setUserId('');
      setUserPassword('');
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };

  return (
    <form action="/login" method="post" onSubmit={onSubmitHandler}>
      <StyledInput
        type="text"
        placeholder="아이디"
        imagePath="/img/user.png"
        value={userId}
        onChange={onUserIdChange}
      />
      <StyledInput
        type="password"
        placeholder="비밀번호"
        imagePath="/img/password.png"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
      />

      <StyledCheckContainer>
        <StyledLoginCheck
          type="checkbox"
          onChange={(e) => onRememberHandler(e)}
          checked={isRemember}
        />
        아이디 유지
      </StyledCheckContainer>
      <div>
        <PinkButton type="submit">로그인</PinkButton>
      </div>
    </form>
  );
}

const StyledLoginCheck = styled.input`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 1px solid #999;
  appearance: none;
  cursor: pointer;
  transition: background 0.2s;

  &:checked {
    background: #ffdfdf;
    border: none;
  }
`;

const StyledCheckContainer = styled.label`
  font-size: x-small;
  display: flex;
  align-items: center;
  margin-top: 0.2rem;
`;
