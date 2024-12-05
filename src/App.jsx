import './App.css';
import NavBar from './components/navbar/NavBar';
import AccountPages from './components/AccountPages/AccountPages';
import BottomBar from './components/BottomBar/BottomBar';
import { useState, useEffect } from 'react';
import HomePage from "./components/HomePage/HomePage"
function App() {

  
  return (
    <>
    <NavBar/>
    <AccountPages/>
    </>
  );
}

export default App;
