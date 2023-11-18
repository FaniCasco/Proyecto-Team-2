
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="container">
        {/* Logo */}
        <img className="logo" src={logo} alt="Logo de la empresa" />
        {/* Navegación */}
        <nav>
          <ul>
            <li className="boton-link"><Link to="/" className="nav-link">Inicio</Link></li>
            <li className="boton-link"><Link to="/about" className="nav-link">Acerca</Link></li>
            <li className="boton-link"><Link to="/contact" className="nav-link">Contacto</Link></li>

          </ul>
        </nav>
        <h1>Empresas socias</h1>
      </div>

    
    </header>
  );
};

export default Header;


