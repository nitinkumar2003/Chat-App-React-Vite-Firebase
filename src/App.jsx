import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './component/NavBar'
import Layout from './pages/Layout'
import WelCome from './pages/WelCome'
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from '../src/component/firebase'
import ChatBox from './pages/ChatBox'
function App() {
  const [count, setCount] = useState(0)
  const [user] = useAuthState(auth);
  console.log("user",user)


  return (
    <>
      <div className='bg-gray-800 h-screen' >
        <NavBar />
        <Layout>
         {user ? <ChatBox />: <WelCome />} 
        </Layout>
      </div>
    </>
  )
}

export default App
