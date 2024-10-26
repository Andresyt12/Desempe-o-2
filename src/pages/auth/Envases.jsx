import React from 'react';
import './Envases.css';

function Envases() {
  return (
    <div className="envases-layout">
      <header className="envases-header">
        <h1>Envases Biodegradables</h1>
      </header>
      <main className="envases-main">
        <section>
          <h2>Nuestra Colección de Envases</h2>
          <p>Ofrecemos una variedad de envases hechos de materiales biodegradables, ideales para preservar el medio ambiente mientras mantienes tus productos seguros.</p>
        </section>
      </main>
      <footer className="envases-footer">
        <p>&copy; 2024 Tienda Ecológica. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Envases;