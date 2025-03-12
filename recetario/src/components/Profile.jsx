import React, { useEffect, useState } from 'react';
import { FaUserEdit, FaDoorOpen } from 'react-icons/fa'; // Importamos los iconos
import './App.css'; // Importamos los estilos

const Profile = ({ onLogout }) => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ name: '', description: '', email: '', password: '' });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('userData'));
    if (storedUser) {
      setUser(storedUser);
      setEditedUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    onLogout();
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    setUser(editedUser);
    localStorage.setItem('userData', JSON.stringify(editedUser));
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  if (!user) {
    return <h2>No hay usuario autenticado</h2>;
  }

  return (
    <div className="profile-container" style={{ position: 'absolute', bottom: 10, left: 0 }}>
      <div className="sidebar">
        <div className="avatar-container" style={{ marginBottom: '10px' }}>
          <img src={user.avatar || "https://randomuser.me/api/portraits/men/36.jpg"} alt="User Avatar" className="avatar" />
        </div>
        <h3 className="user-name">{user.name}</h3>
        {isEditing ? (
          <div className="form-card">
            <h2>Editar Perfil</h2>
            <form onSubmit={handleSaveClick}>
              <div className="input-group">
                <label>Nombre:</label>
                <input type="text" name="name" value={editedUser.name} onChange={handleChange} required />
              </div>
              <div className="input-group">
                <label>Usuario:</label>
                <input type="text" name="user" value={editedUser.user} onChange={handleChange} required />
              </div>
              <div className="input-group">
                <label>Email:</label>
                <input type="email" name="email" value={editedUser.email} onChange={handleChange} required />
              </div>
              <div className="input-group">
                <label>Contraseña:</label>
                <input type="password" name="password" value={editedUser.password} onChange={handleChange} required />
              </div>
              <div className="input-group">
                <label>Descripción:</label>
                <textarea name="description" value={editedUser.description} onChange={handleChange} required />
              </div>
              <button type="submit" className="submit-button">Guardar</button>
            </form>
          </div>
        ) : (
          <button className="edit-profile-button" onClick={handleEditClick}>
            <FaUserEdit style={{ marginRight: '8px' }} /> Editar Perfil
          </button>
        )}
        <button className="logout-button" onClick={handleLogout}>
          <FaDoorOpen style={{ marginRight: '8px' }} /> Cerrar sesión
        </button>
      </div>
      <div className="profile-content"></div>
    </div>
  );
};

export default Profile;
