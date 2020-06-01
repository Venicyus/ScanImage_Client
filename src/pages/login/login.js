import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function LoginPage() {
  return (
    <div>
      <span>Login Page!</span>

      <Link to="/">
        <button>Entrar</button>
      </Link>
    </div>
  );
}

export default LoginPage;