// CompanyList.js

import React, { useState } from 'react';
import Company from './Company'; // Asegúrate de tener un archivo Company.js en la misma carpeta

const CompanyList = ({ companies }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Buscar empresas..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />

      {/* Lista de empresas */}
      <ul>
        {filteredCompanies.map(company => (
          <Company key={company.id} company={company} />
        ))}
      </ul>
    </div>
  );
};

export default CompanyList;
