import React, { useState } from 'react'
import styled from 'styled-components';
import FriendPage from "../friend/FriendPage";

function Main() {

  const [firendPage, setFriendPage] = useState(false);
  
  return (
    <div>
        <div>Main</div>
        <FriendButton onClick={ () =>{ setFriendPage(!firendPage) }}>친구 버튼</FriendButton>
        {firendPage === true ? <FriendPage/> : null}
    </div>
  )
}

const FriendButton = styled.button`
  position: absolute;
  right:0;
`;

export default Main