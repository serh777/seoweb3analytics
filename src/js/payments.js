import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { ethers } from "ethers";
import React, { useState } from "react";

// Componente para manejar pagos en PayPal y Criptomonedas
function Payments() {
  const [paymentMethod, setPaymentMethod] = useState(null);

  // Función para el pago con PayPal
  const PayPalPayment = () => (
    <PayPalScriptProvider options={{ "client-id": "serhiyskl@gmail.com" }}>
      <PayPalButtons />
    </PayPalScriptProvider>
  );

  // Función para el pago con criptomonedas (ETH)
  const handleCryptoPayment = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      try {
        const signer = await provider.getSigner();
        const tx = await signer.sendTransaction({
          to: "0x545d5eDfCafB5e43068991C2FA1Ea6f0F1E9B561", // Cambia por tu wallet ETH
          value: ethers.parseEther("0.00005"), // Precio en ETH
        });
        console.log("Transacción completada: ", tx);
        alert("Pago en criptomonedas completado.");
      } catch (error) {
        console.error("Error en el pago con criptomonedas: ", error);
        alert("Hubo un error en el pago con criptomonedas.");
      }
    } else {
      alert("Por favor, instala Metamask para realizar pagos en criptomonedas.");
    }
  };

  // Renderizar el componente de pago según el método elegido
  return (
    <div>
      <h2>Elige tu método de pago:</h2>
      <button onClick={() => setPaymentMethod("paypal")}>Pagar con PayPal</button>
      <button onClick={() => setPaymentMethod("crypto")}>Pagar con Cripto (ETH)</button>

      {paymentMethod === "paypal" && <PayPalPayment />}
      {paymentMethod === "crypto" && (
        <button onClick={handleCryptoPayment}>Confirmar pago con ETH</button>
      )}
    </div>
  );
}

export default Payments;