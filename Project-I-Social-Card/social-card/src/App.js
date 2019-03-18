import React from 'react';
import './App.css';
import './components/HeaderComponents/HeaderContainer.js';
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';
import CardContainer from './components/CardComponents/CardContainer.js';
import Footer from './components/FooterComponents/Footer';

const App = () => {
  return (
    <div className="app">
      <HeaderContainer/>
      <CardContainer/>
      <Footer />
    </div>
  );
}

export default App;