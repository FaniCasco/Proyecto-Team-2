PROYECTO GRUPO 2  
POLO IT
LISTA DE EMPRESAS SOCIAS

ESTRUCTURA DEL PROYECTO

src/
├── components/
|   ├── CompanyList/
|   |   ├── Company.js
|   |   ├── CompanyList.js
|   |   └── SearchBar.js
|   ├── CompanyDetail/
|   |   ├── CompanyDetail.js
|   |   └── ContactForm.js
|   └── Header/
|       ├── Header.js
|       └── Navigation.js
├── data/
|   ├── companies.js
|   └── categories.js
|------assets/images
 |        | -logo
  |       | - banner
├── App.js
└── index.js

Componentes:
CompanyList.js:
Contiene la lista de empresas.
Importa y renderiza el componente Company para cada empresa.
Puede contener la barra de búsqueda.
Company.js:
Muestra la información básica de una empresa (nombre, logo, enlace).
Puede tener un enlace a la página de detalles de la empresa.
SearchBar.js:
Permite buscar empresas por categorías y productos/servicios.
Puede tener un estado local para gestionar las consultas de búsqueda.


CompanyDetail.js:
Muestra información detallada de una empresa.
Importa y renderiza el componente ContactForm.
ContactForm.js:
Contiene un formulario de contacto para la empresa.
Header.js:
Contiene la barra de navegación y cualquier información de encabezado.
Puede tener un enlace al inicio o cualquier otra funcionalidad que desees.
Navigation.js:
Contiene enlaces de navegación.

Datos:
companies.js:
Contiene datos de empresas (nombre, logo, enlace, detalles, etc.).
Puedes almacenar información simulada o conectarte a una base de datos real.
categories.js:
Contiene datos de categorías y productos/servicios para la barra de búsqueda.

Enrutamiento:

Habrá páginas separadas para la lista de empresas y los detalles de la empresa, asi que utilizaremos el enrutamiento con react-router-dom.


