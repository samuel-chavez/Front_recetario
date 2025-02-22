// src/components/Login.js
import React, { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login con usuario:', user, 'y contraseña:', password);
  };

  return (
    <div className="login-container">
      <div className="background-image"></div> {/* Imagen de fondo fuera del formulario */}
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
          <button type="submit" className="submit-button">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
