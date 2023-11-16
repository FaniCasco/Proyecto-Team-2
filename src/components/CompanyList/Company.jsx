
import React from 'react';

const Company = ({ company }) => {
  return (
    <li>
      <div>
        <img src={company.logo} alt={`${company.name} logo`} />
      </div>
      <div>
        <h3>{company.name}</h3>
        <p>{company.description}</p>
        <a href={company.website} target="_blank" rel="noopener noreferrer">
          Visitar sitio web
        </a>
      </div>
    </li>
  );
};

export default Company;
