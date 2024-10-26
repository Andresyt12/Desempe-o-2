import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './Contactenos.css';

function Contactenos() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validaciones
    if (!form.nombre.trim()) {
      Swal.fire('Error', 'Por favor ingresa tu nombre', 'error');
      return;
    }

    if (!form.email.trim()) {
      Swal.fire('Error', 'Por favor ingresa tu correo electrónico', 'error');
      return;
    }

    if (!validateEmail(form.email)) {
      Swal.fire('Error', 'Por favor ingresa un correo electrónico válido', 'error');
      return;
    }

    if (!form.mensaje.trim()) {
      Swal.fire('Error', 'Por favor ingresa tu mensaje', 'error');
      return;
    }

    Swal.fire('Enviado', 'Tu mensaje ha sido enviado exitosamente', 'success');
    
    // Aquí puedes agregar lógica para enviar los datos al servidor.
    setForm({
      nombre: '',
      email: '',
      mensaje: ''
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="contacto-layout">
      <h1>Contáctenos</h1>
      <form className="contacto-form" onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Tu nombre completo"
          />
        </label>

        <label>
          Correo Electrónico:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Tu correo electrónico"
          />
        </label>

        <label>
          Mensaje:
          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            placeholder="Escribe tu mensaje aquí..."
          />
        </label>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contactenos;
