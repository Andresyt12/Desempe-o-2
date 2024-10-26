import React from 'react';
import './Home.css'; // Importa los estilos

function Home() {
  return (
    <div className="home-layout">
      <header className="home-header">
        <h1>Bienvenido a nuestra tienda</h1>
      </header>

      <aside className="home-aside">
        <nav>
          <ul>
            <li><a href="/productos" className="home-link">Productos</a></li>
            <li><a href="/biodegradable" className="home-link">Productos Biodegradables</a></li>
            <li><a href="/contactenos" className="home-link">Contáctenos</a></li>
          </ul>
        </nav>
      </aside>

      <main className="home-main">
        <section>
          <h2>Descubre nuestros productos ecológicos</h2>
          <p>
            Estamos dedicados a ofrecer productos biodegradables que ayudan a reducir el impacto ambiental. Explore nuestra amplia gama de bolsas, envases y toallitas desechables.
          </p>
        </section>
        <section>
          <h2>Nuestras categorías</h2>
          <p>Encuentra productos biodegradables que se adapten a tus necesidades.</p>
        </section>
      </main>

      <footer className="home-footer">
        <p>&copy; 2024 Tienda Ecológica. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
