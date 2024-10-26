import React from 'react';
import './Productos.css';

function Productos() {
  return (
    <div className="productos-layout">
      <header className="productos-header">
        <h1>Productos Disponibles</h1>
      </header>

      <aside className="productos-aside">
        <nav>
          <ul>
            <li><a href="/" className="productos-link">Home</a></li>
            <li><a href="/biodegradable" className="productos-link">Productos Biodegradables</a></li>
            <li><a href="/contactenos" className="productos-link">Contáctenos</a></li>
            <li><a href="/Envases" className="productos-link">Envases</a></li>
            <li><a href="/Toallitas" className="productos-link">Toallitas</a></li>
            <li><a href="/Bolsas" className="productos-link">Bolsas</a></li>

          </ul>
        </nav>
      </aside>

      <main className="productos-main">
        <section>
          <h2>Explora nuestra colección</h2>
          <p>Encuentra productos variados que respetan el medio ambiente. Tenemos una amplia selección de envases, bolsas, y más.</p>
        </section>
        
        <section>
          <h2>Categorías Disponibles</h2>
          <ul className="productos-list">
            <li className="producto-item">
              <img src="https://www.fundacionaquae.org/wp-content/uploads/2019/07/bolsaplastico.jpg" alt="Bolsas Biodegradables" className="producto-imagen" />
              <p>Bolsas Biodegradables</p>
            </li>
            <li className="producto-item">
              <img src="https://tse3.mm.bing.net/th?id=OIP.NrAttUuSz88AtkC_C_PYLwHaE8&pid=Api&P=0&h=220" alt="Envases Ecológicos" className="producto-imagen" />
              <p>Envases Ecológicos</p>
            </li>
            <li className="producto-item">
              <img src="https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750179162953L.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" alt="Toallitas Desechables" className="producto-imagen" />
              <p>Toallitas Desechables</p>
            </li>
          </ul>
        </section>
      </main>

      <footer className="productos-footer">
        <p>&copy; 2024 Tienda Ecológica. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Productos;
