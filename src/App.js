
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import CompanyList from './components/CompanyList/CompanyList';
import CompanyDetail from './components/CompanyDetail/CompanyDetail';
import About from './components/Header/About';
import ContactForm from './components/CompanyDetail/ContactForm';

const App = () => {
  // Datos simulados de empresas (puedes reemplazarlo con datos reales o una llamada a la API)
  const companiesData = [
    {
      id: 1,
      name: 'Empresa 1',
      logo: 'url-del-logo-empresa-1',
      description: 'Descripción de la empresa 1',
      website: 'https://www.empresa1.com',
    },
    // Agregar más empresas 
  ];

  return (
    <Router>
      <div>
        <Header />

        {/* Configura la ruta para About */}
        <Routes>

          <Route
            path="/"
            element={<CompanyList companies={companiesData} />}
          />
          <Route
            path="/company/:id"
            element={<CompanyDetail />}
          />
          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/a"
            element={<ContactForm />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
