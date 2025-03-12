// src/App.js
import React ,{ useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Profile from './components/Profile.jsx';

function App() {
  const [activeForm, setActiveForm] = useState('login');
  const [userData, setUserData] = useState(null);

  const handleFormChange = (form) => {
    setActiveForm(form);
  };

  const handleRegister = (data) => {
    localStorage.setItem('userData', JSON.stringify(data));
    setUserData(data);
    setActiveForm('profile');
  };

  const handleLogin = (credentials) => {
    const storedUser = JSON.parse(localStorage.getItem('userData'));
    if (storedUser && storedUser.user === credentials.user && storedUser.password === credentials.password) {
      setUserData(storedUser);
      setActiveForm('profile');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  const handleLogout = () => {
    setUserData(null);
    setActiveForm('login');
  };

  return (
    <div className="App">
      <Navbar onFormChange={handleFormChange} />
      <div className="form-container">
        {activeForm === 'login' && <Login onLogin={handleLogin} />}
        {activeForm === 'register' && <Register onRegister={handleRegister} />}
        {activeForm === 'profile' && userData ? <Profile user={userData} onLogout={handleLogout} /> : <h2>No ha iniciado sesión</h2>}
      </div>  
    </div>
  );
}

export default App;
