// App.jsx
import React, { useState } from 'react';
import './App.css';
import Lemon from"./assets/Lemon.png"
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Page from './Page';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    const login = () => setLoggedIn(true);
    const logout = () => setLoggedIn(false);

    const bird1 = new Audio( 
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3" 
  ); 
 
  const bird2 = new Audio( 
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3" 
  ); 

  function toggle1() { 
    if (bird1.paused) { 
      bird1.play(); 
    } else { 
      bird1.pause(); 
    } 
  }; 
 
  function toggle2() { 
    if (bird2.paused) { 
      bird2.play(); 
    } else { 
      bird2.pause(); 
    } 
  }; 

    return (
        <>
        <div>
        <h1>Task: Add an image below</h1>
        <img src={Lemon} alt="Lemon" height={50}/>
        </div>
            {loggedIn ? (
                <div>
                    <Page />
                    <LogoutButton logout={logout} />
                </div>
             ): (
                <LoginButton login={login} />
            )}

            <div> 
      <button onClick={toggle1}>Caspian Tern 1</button> 
      <button onClick={toggle2}>Caspian Tern 2</button> 
    </div> 
        </>
    );
}

export default App;