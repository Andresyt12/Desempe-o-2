import React from 'react';
import './ProductoBiodegradable.css';

function ProductoBiodegradable() {
  return (
    <div className="biodegradables-layout">
      <header className="biodegradables-header">
        <h1>Productos Biodegradables</h1>
      </header>

      <aside className="biodegradables-aside">
        <nav>
          <ul>
            <li><a href="/" className="biodegradables-link">Home</a></li>
            <li><a href="/productos" className="biodegradables-link">Productos</a></li>
            <li><a href="/Tipos" className="biodegradables-link">Tipos de Productos</a></li>
            <li><a href="/Contactenos" className="biodegradables-link">Contáctenos</a></li>
          </ul>
        </nav>
      </aside>

      <main className="biodegradables-main">
        <section className="info-section">
          <h2>Productos Amigables con el Planeta</h2>
          <p className="intro-text">
            Nuestros productos biodegradables están hechos con materiales sostenibles y respetuosos con el medio ambiente. 
            ¡Haz tu compra ahora y contribuye al cuidado del planeta!
          </p>
        </section>

        <section className="benefits-section">
          <h2>¿Por qué Elegir Productos Biodegradables?</h2>
          <ul>
            <li>Reducen el impacto ambiental</li>
            <li>Son compostables y retornan a la naturaleza</li>
            <li>Hechos con materiales renovables</li>
          </ul>
        </section>
        
        <section className="products-gallery">
          <h2>Nuestra Colección</h2>
          <div className="gallery">
            <div className="gallery-item">
              <img src="http://awsassets.panda.org/img/original/bag_416587_1280.jpg" alt="Bolsa Biodegradable" />
              <p>Bolsa Biodegradable</p>
            </div>
            <div className="gallery-item">
              <img src="https://envanature.com/blog/wp-content/uploads/2022/02/vacie-tazas-desechables-papel-envase-comida-llevar-aislado-verde_73966-2586.jpg" alt="Envase Compostable" />
              <p>Envase Compostable</p>
            </div>
            <div className="gallery-item">
              <img src="https://tse3.mm.bing.net/th?id=OIP.L0nU-P-dMg-kUCQ6fR1C8AHaEK&pid=Api&P=0&h=220" alt="Toallita Ecológica" />
              <p>Toallita Ecológica</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="biodegradables-footer">
        <p>&copy; 2024 Tienda Ecológica. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default ProductoBiodegradable;
