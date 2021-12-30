import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styles from './App.css';

import Route from './Routes';

function App() {
  return (
    <BrowserRouter>
      <Route/>
    </BrowserRouter>
  );
}

export default App;
