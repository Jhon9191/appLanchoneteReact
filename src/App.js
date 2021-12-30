import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Route from './Routes';
//import firebase from './services/firebase';

function App() {
  return (
    <BrowserRouter>
      <Route/>
    </BrowserRouter>
  );
}

export default App;
