// src/components/Profile.js
import React from 'react';

const Profile = ({ user }) => {
  return (
    <div className="profile-container">
      <h2>Bienvenido, {user.user}!</h2>
      <p>Este es tu perfil.</p>
      <button onClick={() => window.location.href = '/login'}>Cerrar sesión</button>
    </div>
  );
};

export default Profile;
