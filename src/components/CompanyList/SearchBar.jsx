// SearchBar.js

import React, { useState } from 'react';

const SearchBar = ({ categories, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearch = () => {
    // Lógica de búsqueda 
    const searchQuery = {
      term: searchTerm,
      category: selectedCategory,
    };

    // Llama a la función onSearch pasando la consulta de búsqueda
    onSearch(searchQuery);
  };

  return (
    <div>
      {/* Input para el término de búsqueda */}
      <input
        type="text"
        placeholder="Buscar empresas..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Dropdown para seleccionar la categoría */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Todas las categorías</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* Botón de búsqueda */}
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;
