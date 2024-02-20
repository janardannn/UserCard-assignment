import axios from 'axios'
import Card from './Components/Card'
import './App.css'
import { useState } from 'react';

function App() {
  const API = "https://randomuser.me/api/?page=1&results=1&seed=abc"

  return (
    <>
      <Card API={API} />
    </>
  )
}

export default App
