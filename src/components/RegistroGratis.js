import React, { useState } from "react";

function RegistroGratis() {
  const [telefono, setTelefono] = useState("");
  const [movil, setMovil] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registrado con éxito. Teléfono: ${telefono}, Móvil: ${movil}`);
    // Aquí puedes manejar la lógica de enviar los datos a un backend
  };

  return (
    <div>
      <h2>Registro Plan Gratis</h2>
      <form onSubmit={handleSubmit}>
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
          Móvil:
          <input
            type="text"
            value={movil}
            onChange={(e) => setMovil(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default RegistroGratis;
