import React from 'react';
import Profil from './profile/Profile'
import './App.css';

function App() {
  let k="student"
  return (
    <div style={{textAlign:"center"}}>
      <Profil fullName='Mohamed Ali Bouzaiene' bio='a motivated student' profession={k}>/me.jpg</Profil>
    </div>
  );
 };

export default App;
