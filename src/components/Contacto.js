import React, { useState } from "react";

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias, ${nombre}. Te contactaremos en ${email} o ${telefono}`);
    // Aquí puedes manejar la lógica para enviar el formulario a un backend
  };

  return (
    <div>
      <h2>Contáctanos para tu Plan Gratuito de SEO Web3</h2>
      <p>¿Listo para llevar tu presencia en línea al siguiente nivel? En SEOWeb3Analytics, estamos aquí para ayudarte a optimizar tu sitio web y mejorar tu visibilidad en los motores de búsqueda. Nuestro plan gratuito de SEO Web3 está diseñado para ofrecerte una muestra de lo que podemos hacer por ti.Rellena el formulario para registrarte en el Plan Gratis. Nos pondremos en contacto contigo lo antes posible para activar tu cuenta gratuita.</p>
      <h3>¿Qué incluye nuestro plan gratuito?</h3>
      <li>Auditoría SEO inicial de tu sitio web</li>
      <li>Análisis de palabras clave</li>
      <li>Recomendaciones para mejorar el rendimiento de tu sitio</li>
      <h4>¿Cómo puedes empezar?</h4>
      <p>Simplemente completa el formulario a continuación con tus datos y nos pondremos en contacto contigo lo antes posible. Estamos emocionados de trabajar contigo y ayudarte a alcanzar tus objetivos en línea.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Teléfono:
          <input
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Mensaje:
          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
