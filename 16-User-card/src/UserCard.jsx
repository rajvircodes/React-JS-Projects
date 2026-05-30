import React from 'react';
import './index.css'

const UserCard = ({ name, role, image }) => {
  return (
    <div className="user-card">
      <div className="card-background"></div>
      <div className="card-content">
        <div className="image-container">
          <img src={image} alt={name} className="user-image" />
        </div>
        <h2 className="user-name">{name}</h2>
        <p className="user-role">{role}</p>
        <div className="card-footer">
          <button className="btn btn-primary">Follow</button>
          <button className="btn btn-secondary">Message</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;