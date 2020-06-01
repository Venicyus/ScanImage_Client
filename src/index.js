import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';

const App = () => (
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

ReactDOM.render(<App />, global.document.getElementById('root'));