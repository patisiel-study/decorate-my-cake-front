import React, { useState } from 'react';
import styled from 'styled-components';
import FriendList from './FriendList';


function FriendPage() {
  const TabData = [
    { id: 1, button: "친구목록", content:<FriendList/> , imageUrl: 'img/friendListImg.png' },
    { id: 2, button: "달력", content: "달력입니다" , imageUrl: 'img/calendarImg.png' },
    { id: 3, button: "친구요청", content: "친구 요청입니다" , imageUrl: 'img/friendAddImg.png' },
  ];

  
  const [activeTab, setActiveTab] = useState(TabData[0].id);

  return (
    <FriendPageStyle>
      <TabBox>
      {TabData.map((tab) => (
        <StyledButtonWithImage
            key={tab.id}
            active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            imageUrl={tab.imageUrl} 
        >
        </StyledButtonWithImage>
        ))}
      </TabBox>
      <TabContent>
        {TabData.find((a) => a.id === activeTab)?.content}
      </TabContent>
    </FriendPageStyle>
  );
  
}

const FriendPageStyle = styled.div`
  position: absolute;
  top: 4rem;
  height: 45rem;  
  width: 25rem;
  right: 0;
  background-color: #FEF1F1;
`;

const TabBox = styled.div`
  display: flex;
`;


const TabContent = styled.div`
  padding: 1rem;
  height:30rem;
  border-bottom-left-radius:1rem;
  background-color:white;
`;

const StyledButtonWithImage = styled.button`
  border: none;
  height: 2rem;
  width: ${({ active }) => (active ? "8rem" : "3rem")}; 
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background-color: ${({ active }) => (active ? "#FFDFDF" : "white")}; 
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  background-size: 25px 25px;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export default FriendPage;
