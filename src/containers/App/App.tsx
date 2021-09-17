import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Header, Footer } from './components';
import Routes from './Routes'

import "./styles.scss";

function App() {

  const backgroundStyle = (): string => {
    const pathname = window.location.pathname;
    
    if(pathname === "/swap") {
      return `linear-gradient(
        95deg,
        rgba(60, 50, 50, 0.8),
        rgba(65, 50, 50, 0.6)),
        url("/images/background.jpg")
        center top no-repeat`
    } else {
      return `linear-gradient(
        95deg,
        rgba(127, 26, 229, 0.8),
        rgba(255, 60, 60, 0.6)),
        url("/images/background.jpg")
        center top no-repeat fixed`
    }
  }

  return (
    <div style={{ background: backgroundStyle() }} className="app">
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />      
      </BrowserRouter>
    </div>
  );
}

export default App;
