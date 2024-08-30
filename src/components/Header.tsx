import React from 'react';

// Definine la prop que aceptará el componente
interface HeaderProps {
  title: string;
}

// Aqui se crea el componente Header utilizando React.FC y el tipo HeaderProps
const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;