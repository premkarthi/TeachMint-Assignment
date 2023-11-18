import React from 'react';
import './userPosts.css'

function UserPosts({posts}) {
  return (
    <div className="user-posts-container">
    <h2 className="user-posts-title">User Posts</h2>
    <div className="user-posts">
      {posts.map(post => (
        <div key={post.id} className="post-item">
          <div className="post-title">{post.title}</div>
          <div className="post-body">{post.body}</div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default UserPosts