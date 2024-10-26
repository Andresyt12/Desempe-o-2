import React from 'react';
import './Bolsas.css';

function Bolsas() {
  return (
    <div className="bolsas-layout">
      <header className="bolsas-header">
        <h1>Bolsas Biodegradables</h1>
      </header>
      <main className="bolsas-main">
        <section>
          <h2>Variedad de Bolsas Ecológicas</h2>
          <p>Nuestras bolsas biodegradables están diseñadas para descomponerse rápidamente, ayudando a reducir la contaminación y el impacto ambiental.</p>
        </section>
        <section className="bolsas-gallery">
          <img src="https://www.grupomarplast.com/images/bolsa-tipo-boutique-marplast-colombia-01.jpg" alt="Bolsa 1" className="bolsa-img" />
          <img src="https://1.bp.blogspot.com/-MFSP5t3MpO0/XROZpZsDIwI/AAAAAAAAcKk/z-y606lj7XEyfK8viJnGcHP_6xH1eQ-igCLcBGAs/s1600/bolsas-hechas-reciclaje-bolsas-plastico9.jpg" alt="Bolsa 2" className="bolsa-img" />
        </section>
      </main>
      <footer className="bolsas-footer">
        <p>&copy; 2024 Tienda Ecológica. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Bolsas;
