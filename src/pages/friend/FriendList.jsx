import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FriendList() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    const API_TOKEN = process.env.REACT_APP_API_TOKEN;

  
    const fetchFriends = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}/friend/list`, {
          headers: {
            'Authorization': `Bearer ${API_TOKEN}`
          }
        });
        
        if (response && response.data) {
          setFriends(response.data);
        } else {
          throw new Error("Unexpected response format");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching friends:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchFriends();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Friend List</h1>
      <ul>
        {friends.map(friend => (
          <li key={friend.id}>{friend.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FriendList;
