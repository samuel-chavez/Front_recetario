import React, { useState } from 'react';
import { FaUserEdit } from 'react-icons/fa'; // Importamos el nuevo icono

const Register = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [description, setDescription] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = { name, user, email, password, description };
    localStorage.setItem('userData', JSON.stringify(newUser));
    onRegister(newUser);
  };

  return (
    <div className="form-card"> 
      <div className="background-image"></div>  
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <div className="input-group">
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Introduce tu nombre"
            required
          />
        </div>
        <div className="input-group">
          <label>Usuario:</label>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Introduce un nombre de usuario"
            required
          />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Introduce un correo"
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
        <div className="input-group">
          <label>Descripción:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Escribe una breve descripción"
            required
          />
        </div>    
        <button type="submit" className="submit-button">
          <FaUserEdit style={{ marginRight: '8px' }} /> Registrar
        </button>
      </form>
    </div>
  );
};

export default Register;
