import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section id="hero">
        <div className="logo-container">
          <h1>Agencia de Analítica SEO para Web3</h1>
        </div>
      </section>

      <section id="about-us">
        <h2>En la era de Web3, la optimización para motores de búsqueda (SEO) es más crucial que nunca.</h2>
        <p>En <strong>SEOWeb3Analytics</strong>, nos especializamos en ofrecer soluciones avanzadas de analítica SEO para ayudarte a sobresalir en el competitivo mundo digital.</p>
      </section>

      <section id="why-us">
        <h2>¿Por qué elegirnos?</h2>
        <ul>
          <li><strong>Experiencia en Web3:</strong> Nuestro equipo está a la vanguardia de las tecnologías Web3, asegurando que tu sitio web esté optimizado para el futuro de la web.</li>
          <li><strong>Análisis profundo:</strong> Utilizamos herramientas y técnicas avanzadas para analizar el rendimiento de tu sitio web y ofrecerte recomendaciones precisas.</li>
          <li><strong>Estrategias personalizadas:</strong> Cada negocio es único. Creamos estrategias SEO adaptadas a tus necesidades y objetivos específicos.</li>
          <li><strong>Resultados medibles:</strong> Nos enfocamos en ofrecer resultados tangibles que puedes ver y medir, mejorando la visibilidad y el tráfico de tu web.</li>
        </ul>
      </section>

      <section id="services">
        <h2>Nuestros Servicios</h2>
        <ul>
          <li>Auditoría SEO completa</li>
          <li>Análisis de palabras clave</li>
          <li>Optimización On-Page y Off-Page</li>
          <li>Informes detallados de rendimiento</li>
          <li>Consultoría y estrategias SEO personalizadas</li>
        </ul>
      </section>

      <section id="cta">
        <h2>Únete a la Revolución Web3</h2>
        <p>No te quedes atrás en la evolución de la web. Con <strong>SEOWeb3Analytics</strong>, puedes estar seguro de que tu presencia en línea está en las mejores manos.</p>
      </section>

      <section id="business-model">
        <h2>Seleccionar Planes</h2>
        <div className="plans-container">
          <div className="plan-box">
            <h3>Plan Gratis</h3>
            <p>Análisis de metadatos.</p>
            <p>Revisión de 5 palabras clave.</p>
            <p>Acceso limitado a herramientas.</p>
            <Link to="/contacto">
              <button>Registrarse Gratis</button>
            </Link>
          </div>

          <div className="plan-box">
            <h3>Plan Pro</h3>
            <p>Análisis SEO detallado con informes avanzados.</p>
            <Link to="/pago-pro">
              <button>Seleccionar Plan Pro</button>
            </Link>
          </div>

          <div className="plan-box">
            <h3>Plan Premium</h3>
            <p>Consultoría mensual personalizada + informes SEO avanzados.</p>
            <Link to="/pago-premium">
              <button>Seleccionar Plan Premium</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
