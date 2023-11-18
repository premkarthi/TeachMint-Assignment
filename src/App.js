import { useEffect, useState } from 'react';
import './App.css';
import UsersList from './users';
import { Route,Routes, useNavigate } from 'react-router-dom';
import UserDetails from './Details';


function App() {
  const [users, setUsers] = useState([]);
  const [userPostCount, setUserPostCount] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        const count = posts.reduce((acc, post) => {
          acc[post.userId] = (acc[post.userId] || 0) + 1;
          return acc;
        }, {});
        setUserPostCount(count);
      })
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  const onSelectUser = user => {
    navigate(`/${user.id}`);
  };


  return (
      <Routes>
        <Route path="/" element={<UsersList users={users} userPostCount={userPostCount} onSelectUser={onSelectUser} />} />
        <Route path="/:userId" element={<UserDetails />} />
      </Routes>
  );
}

export default App;
