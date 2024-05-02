import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import TitleBorder from "../../components/titleBorder";
import {
  StyledPageContainer,
  StyledCakeTitle,
} from "../../styles/titleLocation";
import LoginButton from "../../components/loginButton";
import { InputStyle } from "../../components/inputStyle";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";

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
  width:12rem;
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

export default function SignUp() {
  const [newId, setNewId] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newConfirmPassword, setNewConfirmPassword] = useState("");
  const [newNickName, setNewNickName] = useState("");
  const [newBirthday, setNewBirthday] = useState(new Date());
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/login"); 
  };


  const onSubmitHandler = async (e) => {
    e.preventDefault();
    

    if (newPassword !== newConfirmPassword) {
      return alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    }

    try {
      const response = await axios.post(
        "http://3.37.89.60:8080/member/signup",
        {
          email: newId,
          password: newPassword,
          nickname: newNickName,
          birthday: newBirthday,
          profileImg: null,
        }
      );

      console.log(response.data);
      alert(response.data.message);

      setNewId("");
      setNewPassword("");
      setNewConfirmPassword("");
      setNewNickName("");
      setNewBirthday(new Date());
      navigate("/login")
     
    } catch (error) {
      alert(error.response.data.message);
      console.log(error.response.data);
    }
  };

  return (
    <StyledPageContainer>
      <TitleBorder>
        내 <StyledCakeTitle>케이크</StyledCakeTitle>를 꾸며줘!
      </TitleBorder>
      <ContentContainer>
        <form action="/signup" method="post" onSubmit={onSubmitHandler}>
          
          <ContentTitle>아이디</ContentTitle>
          <InputStyle
            type="text"
            value={newId}
            onChange={(e) => setNewId(e.target.value)}
          />

          <ContentTitle>비밀번호</ContentTitle>
          <InputStyle
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <ContentTitle>비밀번호 확인</ContentTitle>
          <InputStyle
            type="password"
            value={newConfirmPassword}
            onChange={(e) => setNewConfirmPassword(e.target.value)}
          />

          <ContentTitle>닉네임</ContentTitle>
          <InputStyle
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
          

          <LoginButton type="submit">회원가입</LoginButton>
        </form>
        <LoginButton onClick={handleButtonClick}>취소</LoginButton>
      </ContentContainer>
    </StyledPageContainer>
  );
}
