import React from 'react';
import UserCard from './UserCard';

function App() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <UserCard 
        name="Sarah Johnson"
        role="Product Designer"
        image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
      />
    </div>
  );
}

export default App;