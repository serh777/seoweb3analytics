import React from "react";
import Payments from "../js/payments"; // Importamos el archivo de pagos

function Pago({ plan, precio }) {
  return (
    <div>
      <h2>{plan}</h2>
      <p>El precio es de {precio}. Selecciona tu método de pago.</p>
      <Payments />
    </div>
  );
}

export default Pago;
