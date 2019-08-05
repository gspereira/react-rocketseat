import React from 'react';
import logo from './logo.svg';
import './App.css';

import Routes from './routes';
import Header from './components/Header';
import Main from './pages/main';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
