import react, { useState } from 'react';
import './App.css';
import Container1 from './components/container1';
import Container2 from './components2/container2';

function App() {

  return (
    <div className="container">
      <Container1></Container1>
      <Container2></Container2>
    </div>
  );
}

export default App;
