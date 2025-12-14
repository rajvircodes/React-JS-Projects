import React from 'react'

const ProfileCard = (props) => {
  return (
    <div className='profile-card'>
        <img src={props.avatar}
         alt={props.name}
         className='profile-avatar' />
         <h2>{props.name}</h2>
         <p className='profile-role'>{props.role}</p>
         <p className="profile-bio">{props.bio}</p>
         <div className='profile-stats'>
            <div className="stat">
                <strong>{props.followers}</strong>
                <span>Followers</span>  
            </div>
            <div className="stat">
                <strong>{props.following}</strong>
                <span>Following</span>  
            </div>
         </div>
    </div>
  )
}

export default ProfileCard