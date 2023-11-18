import React from 'react';
import './userList.css'

function UsersList({ users, userPostCount, onSelectUser }) {
  return (
    <div className="users-list-container">
        <h1 className="users-list-title">Directory</h1>
        {users.map(user => (
        <div key={user.id} className="user-entry" onClick={() => onSelectUser(user)}>
            <div className="user-name">{user.name}</div>
            <div className="user-posts-count">Posts: {userPostCount[user.id] || 0}</div>
        </div>
        ))}
    </div>
  )
}

export default UsersList