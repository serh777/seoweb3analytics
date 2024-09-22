import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de autenticación exitosa
    if (email === 'test@usuario.com' && password === '123456') {
      localStorage.setItem('isAuthenticated', 'true');  // Guardamos que está autenticado
      alert('Sesión iniciada correctamente');
      window.location.href = '/';  // Redirigir al home
    } else {
      alert('Email o contraseña incorrectos');
    }
  };  

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
