// src/App.js

import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Minha Aplicação React</h1>
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
