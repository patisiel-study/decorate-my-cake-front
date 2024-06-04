import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';

const FriendList = () => {
  const [friends, setFriends] = useState([]); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    const API_TOKEN = localStorage.getItem('accessToken');

    
    const fetchFriends = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}/friend/list`, {
          headers: {
            'Authorization': `Bearer ${API_TOKEN}`
          }
        });
        if (response && response.data) {

          if (Array.isArray(response.data)) {
            setFriends(response.data);
            console.log('서버 메시지:', response.data.message);
          } else if (typeof response.data === 'object' && response.data !== null) {
            setFriends([]);
          } else {
            throw new Error("예상치 못한 응답 형식입니다");
          }
        } else {
          throw new Error("예상치 못한 응답 형식입니다");
        }
        
      } catch (error) {
        console.error("친구 목록을 가져오는 중 오류 발생:", error);
        setError(error);
      }
    };
    fetchFriends();
  }, []);

  
  if (error) {
    return <div>{error}</div>;
  }

  
  if (friends.length === 0) {
    return <div>친구 목록이 비어있습니다.</div>;
  }

  return (
    <FriendListContainer>
      {friends.map((friend) => (
        <FriendItem key={friend.id}>
          {friend.name}
        </FriendItem>
      ))}
    </FriendListContainer>
  );
};

export default FriendList;

const FriendListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FriendItem = styled.div`
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
`;
