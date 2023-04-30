import React from 'react';
import Header from './components/Header/Header';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper_background_selection">
        <Header />
      </div>
    </BrowserRouter>
    
  );
}
export default App;