import { useState, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Form from './components/Form'
import Display from "./components/Display.jsx";

// Creates shared context for the app allowing shared storage between components
export const ProfileContext = createContext();

function App() {
    // Keep track of user's information
    const [profile, setProfile] = useState({name: "", email: "", bio: ""});

  return (
      // Shares profile data with Display and Form components
      <ProfileContext.Provider value = {{profile, setProfile}}>
          <div>
              <h1>User Profile Manager</h1>

              <Form />

              <br></br>

              <Display />
          </div>
      </ProfileContext.Provider>
  );
}

export default App;
