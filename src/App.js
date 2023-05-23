import React from 'react';
import Header from './components/Header/Header';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { I18nProvider } from './i18nProvider';
import { LOCALES } from './i18nProvider';
import { useState } from 'react';
import backgroundImage from './assets/Hero-image-backgruund.webp';


function App() {
  
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  return (
    <I18nProvider locale={locale}>
      <BrowserRouter>
        <div className="wrapper_background_selection" style={{ backgroundImage: `url(${backgroundImage})`}}>
          <div className="app">
            <Header setLocale={setLocale} />
          </div>
        </div>  
      </BrowserRouter>
    </I18nProvider>
  );
}

export default App;