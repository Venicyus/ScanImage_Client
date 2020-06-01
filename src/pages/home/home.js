import React from 'react';
import { Link } from 'react-router-dom'

// import { Container } from './styles';

function HomePage() {
  return (
    <div>
      <span>Home Page!</span>

      <Link to="/login">
        <button>Sair!</button>
      </Link>
    </div >
  );
}

export default HomePage;