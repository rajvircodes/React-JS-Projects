import ProfileCard from "./components/ProfileCard";
import './App.css';

import React from 'react'

const App = () => {
  return (
    <div className="app">
      <h1>Meet Our Team</h1>
      <div className="profile-container">
      <ProfileCard 
        name="Rajvirsinh"
        role="Frontedn Developer"
        bio="I love building beautiful UIs with React! ☕ Coffee enthusiast."
        avatar="https://i.pinimg.com/736x/f2/48/c4/f248c4c3bd31d48ec47e867e7f32171d.jpg"
        followers={63}
        following={97}
        />

        <ProfileCard
          name="Dharmesh"
          role="UI/UX Designer"
          bio="Designing experiences that users love. 🎨 Creative problem solver."
          avatar="https://i.pinimg.com/736x/fc/cf/36/fccf365288b90c4a0a4fb410ca24c889.jpg"
          followers={412}
          following={311}
        />

        <ProfileCard
          name="Ketan"
          role="Fullstack Developer"
          bio="Building scalable apps from front to back. 🚀 Tech explorer."
          avatar="https://i.pinimg.com/736x/16/d8/64/16d864bb052f2351caa737e32229cbc7.jpg"
          followers={163}
          following={70}
        />
      </div>
    </div>
  )
}

export default App