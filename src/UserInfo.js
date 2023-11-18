import React from 'react'
import './userProfile.css'

function UserInfo({user}) {
  return (
    <div className="user-profile-container">
    <div>
      <h2 className="user-details-title">User Details</h2>
      <div className="user-details">
        <div className='column'>
            <div className="user-detail-item">
            <span className="label">Name:</span>
            <span className="value">{user.name}</span>
            </div>
            <div className="user-detail-item">
            <span className="label">catchPhrase</span>
            <span className="value">{user.company.catchPhrase}</span>
            </div>
        </div>
        <div className='column'>
            <div className="user-detail-item">
            <span className="label">Email:</span>
            <span className="value">{user.email}</span>
            </div>
            <div className="user-detail-item">
            <span className="label">Phone:</span>
            <span className="value">{user.phone}</span>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserInfo