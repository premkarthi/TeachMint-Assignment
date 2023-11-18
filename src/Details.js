import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UserInfo from './UserInfo';
import UserPosts from './UserPosts';
import Header from './Header';

function UserDetails() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user details:', error));

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => response.json())
      .then(posts => setUserPosts(posts))
      .catch(error => console.error('Error fetching user posts:', error));
  }, [userId]);

  if (!user) {
    return <div className='user-posts-container'>Loading...</div>;
  }

  return (
    <>
      <Header />
      <UserInfo user={user} />
      <UserPosts posts={userPosts} />
    </>
  );
}

export default UserDetails