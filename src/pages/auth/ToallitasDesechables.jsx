// src/pages/Productos/ToallitasDesechables/ToallitasDesechables.jsx
import React from 'react';
import './ToallitasDesechables.css';

function ToallitasDesechables() {
  return (
    <div className="toallitas-layout">
      <header className="toallitas-header">
        <h1>Toallitas Desechables Biodegradables</h1>
      </header>
      <main className="toallitas-main">
        <section>
          <h2>Cuida el Planeta con Nuestras Toallitas</h2>
          <p>Las toallitas desechables biodegradables son perfectas para cuidar de ti y del medio ambiente. Fabricadas con materiales que se descomponen rápidamente.</p>
        </section>
        <section className="toallitas-gallery">
          <img src="https://via.placeholder.com/150" alt="Toallita 1" className="toallita-img" />
          <img src="https://via.placeholder.com/150" alt="Toallita 2" className="toallita-img" />
          <img src="https://via.placeholder.com/150" alt="Toallita 3" className="toallita-img" />
        </section>
      </main>
      <footer className="toallitas-footer">
        <p>&copy; 2024 Tienda Ecológica. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default ToallitasDesechables;
