// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
//import Profile from './components/Profile';
import './App.css';

function App() {
  const [activeForm, setActiveForm] = useState('login'); // Estado para saber cuál formulario mostrar

  // Función para cambiar entre Login y Registro
  const handleFormChange = (form) => {
    setActiveForm(form);
  };

  return (
    <div className="App">
      <Navbar onFormChange={handleFormChange} />
      <div className="form-container">
        {activeForm === 'login' ? <Login /> : <Register />}
      </div>
    </div>
  );
}

export default App;
