import React from 'react';
import '../Header/Header.scss';
import Generate from './Generate/Generate';
import Contacts from './Contacts/Contacts';
import Pricing from './Pricing/Pricing';
import Blog from './Blog/Blog';

import { Routes, Route, Link } from 'react-router-dom';

const Header = () => {
  return ( 
   
    <>
      <div className="header-navigate">
        <p className="header-navigate-name">Iterms</p>
        <nav className="header-navigate-menu">
          <Link className="header-navigate-menu-noLink" to="/">Generate</Link>
          <Link to="/contacts">Contacts</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Generate />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );};
export default Header;
