import React, { useState } from 'react';
import { FaSignInAlt } from 'react-icons/fa'; // Importamos el icono

const Login = ({ onLogin }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('userData'));
    if (storedUser && storedUser.user === user && storedUser.password === password) {
      onLogin(storedUser);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <div className="background-image"></div>
      <div className="form-card">
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Usuario:</label>
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="Introduce tu usuario"
              required
            />
          </div>
          <div className="input-group">
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Introduce tu contraseña"
              required
            />
          </div>
          <button type="submit" className="submit-button">
            <FaSignInAlt style={{ marginRight: '8px' }} /> Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
