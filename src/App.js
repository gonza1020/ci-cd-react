import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hola mundo desde corrientes Argentina</p>
        <h3>Testing slack integration<h3/>
        <HelloWorld />
      </header>
    </div>
  );
}

export default App;
