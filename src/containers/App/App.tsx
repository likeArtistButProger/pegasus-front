import React from 'react';

import { Header } from './components';
import { MainContent } from './components';

import "./styles.scss";

function App() {

  return (
    <div className="app">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
