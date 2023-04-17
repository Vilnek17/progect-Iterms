import React from 'react';
import './Header.css'
import Generate from './Generate/Generate';
import Contacts from './Contacts/Contacts';
import Pricing from './Pricing/Pricing';
import Blog from './Blog/Blog';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Items = () => {
  return (
    <BrowserRouter> 
    <div className='header'>
    <div className='header-navigate'>
    <p className='header-navigate-name'>Iterms</p>
     <nav className="header-navigate-menu">
     <Link className='header-navigate-menu-noLink' to="/">Generate</Link>
    <Link to="/contacts">Contacts</Link>
    <Link to="/pricing">Pricing</Link>
    <Link to="/blog">Blog</Link>
      </nav>
      </div>
      </div>
      <>
      <Routes>
          <Route path='/' element={<Generate />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='*' element={<h1>Not Found</h1>} />

        </Routes>
       </> 
    </BrowserRouter>
    )}
export default Items