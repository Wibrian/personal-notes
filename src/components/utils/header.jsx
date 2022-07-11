import React from 'react';

function Header({ name }) {
  return (
    <nav>
      <header>
        <h1>{name}</h1>
      </header>
    </nav>
  );
}

export default Header;
