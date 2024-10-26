import React from 'react';
import './TiposPro.css';

function TiposPro() {
  return (
    <div className="tipospro-layout">
      <header className="tipospro-header">
        <h1>Tipos de Productos Biodegradables</h1>
      </header>

      <main className="tipospro-main">
        <section className="tipo-item">
          <h2>Bolsas Biodegradables</h2>
          
          <p>
            Las bolsas biodegradables están diseñadas para descomponerse rápidamente y volver a la naturaleza sin dañar el medio ambiente.
          </p>
        </section>

        <section className="tipo-item">
          <h2>Envases Compostables</h2>
          <p>
            Hechos con materiales naturales, los envases compostables se descomponen en condiciones adecuadas de compostaje, dejando cero residuos tóxicos.
          </p>
        </section>

        <section className="tipo-item">
          <h2>Toallitas Ecológicas</h2>
          
          <p>
            Las toallitas ecológicas están hechas de fibras naturales que no contaminan y se descomponen rápidamente, cuidando del planeta.
          </p>
        </section>

        <section className="tipo-item">
          <h2>Utensilios Desechables</h2>
         
          <p>
            Los utensilios desechables biodegradables están fabricados de materiales naturales que se descomponen fácilmente en el ambiente.
          </p>
        </section>

        <section className="tipo-item">
          <h2>Vasos Ecológicos</h2>
          <p>
            Los vasos ecológicos son perfectos para reducir el consumo de plástico y cuidar el planeta. Ideales para bebidas frías y calientes.
          </p>
        </section>
      </main>

      <footer className="tipospro-footer">
        <p>&copy; 2024 Tienda Ecológica. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default TiposPro;
