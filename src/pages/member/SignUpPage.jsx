import React, { useState } from 'react';
import { signUpAPI } from '../../apis/SignUpApi';
import styled from 'styled-components';
import { BorderedText, SpanText } from '../../styles/TextStyle';
import { StyledPageContainer } from '../../styles/TitleLocation';
import PinkButton from '../../components/PinkButton';
import StyledInput from '../../components/InputStyle';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';

export default function SignUp() {
  const [newId, setNewId] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newConfirmPassword, setNewConfirmPassword] = useState('');
  const [newNickName, setNewNickName] = useState('');
  const [newBirthday, setNewBirthday] = useState(new Date());
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/login');
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (newPassword !== newConfirmPassword) {
      return alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
    }

    try {
      await signUpAPI({
        email: newId,
        password: newPassword,
        nickname: newNickName,
        birthday: newBirthday,
        profileImg: 'string',
      });

      alert('회원가입이 완료되었습니다.');
      navigate('/login');
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  };

  return (
    <StyledPageContainer>
      <BorderedText>
        내 <SpanText>케이크</SpanText>를 꾸며줘!
      </BorderedText>
      <ContentContainer>
        <form action="/signup" method="post" onSubmit={onSubmitHandler}>
          <ContentTitle>아이디</ContentTitle>
          <StyledInput
            type="text"
            value={newId}
            onChange={(e) => setNewId(e.target.value)}
          />

          <ContentTitle>비밀번호</ContentTitle>
          <StyledInput
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <ContentTitle>비밀번호 확인</ContentTitle>
          <StyledInput
            type="password"
            value={newConfirmPassword}
            onChange={(e) => setNewConfirmPassword(e.target.value)}
          />

          <ContentTitle>닉네임</ContentTitle>
          <StyledInput
            type="text"
            value={newNickName}
            onChange={(e) => setNewNickName(e.target.value)}
          />

          <ContentTitle>생년월일</ContentTitle>
          <DatePickerContainer>
            <StyledDatePicker
              selected={newBirthday}
              onChange={(date) => setNewBirthday(date)}
              dateFormat="yyyy-MM-dd"
              locale={ko}
              maxDate={new Date()}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
          </DatePickerContainer>

          <PinkButton type="submit">회원가입</PinkButton>
        </form>
        <PinkButton onClick={handleButtonClick}>취소</PinkButton>
      </ContentContainer>
    </StyledPageContainer>
  );
}

const ContentContainer = styled.div`
  background-color: white;
  color: #3d3d3d;
  margin-top: 1.5rem;
  height: 35rem;
  padding: 5rem;
  border-radius: 2rem;
`;

const ContentTitle = styled.div`
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
  margin-top: 0.2rem;
`;

const DatePickerContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 12rem;
`;
const StyledDatePicker = styled(DatePicker)`
  width: 16rem;
  border-radius: 0.25rem;
  outline: none;
  border: 1px solid #3d3d3d;
  border-radius: 2rem;
  margin-bottom: 1rem;
  padding: 1rem;
`;
