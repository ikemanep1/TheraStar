import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';

function App() {
  const appStyle = {
    backgroundColor: "orange",
  }
  return (
    <div style={appStyle} className="HomeStretch">
      <header className="TheraStar">
        <Header/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
