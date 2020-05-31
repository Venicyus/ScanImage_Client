import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <React.StrictMode>
      <div>
        <span>Scan Image</span>
      </div>
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, global.document.getElementById('root'));