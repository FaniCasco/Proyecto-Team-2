// CompanyDetail.js

import React from 'react';
import ContactForm from './ContactForm';

const CompanyDetail = ({ company }) => {
  return (
    <div>
      <h2>{company.name}</h2>
      <p>{company.description}</p>
      <img src={company.logo} alt={`${company.name} logo`} />
      
      {/* Renderizar el componente ContactForm */}
      <ContactForm />

      {/* O, si necesitas pasar información de la empresa al formulario, podrías hacerlo así: */}
      {/* <ContactForm company={company} /> */}
    </div>
  );
};

export default CompanyDetail;
