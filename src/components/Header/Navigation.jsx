import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="./About">Acerca de</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
        {/* Agrega más enlaces según sea necesario */}
      </ul>
    </nav>
  );
};

export default Navigation;

