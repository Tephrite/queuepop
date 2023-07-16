import logo from './logo.svg';
import './App.css';
import { io } from "socket.io-client";
import React, { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    const socket = io("http://localhost:5000")
  }, [])

  return (
    <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          QUEUE POP
        </p>
      </header>
    </div>
  );
}

export default App;
