import React from 'react';
// import { useContext } from 'react';
import '../Header/Header.scss';
import Generate from './Generate/Generate';
import Contacts from './Contacts/Contacts';
import Pricing from './Pricing/Pricing';
import Blog from './Blog/Blog';
import { Routes, Route, Link } from 'react-router-dom';



const Header = () => {
  return ( 
   
    <>
      <div className="header_navigate">
        <p className="header_navigate_name">Iterms</p>
        <nav className="header_navigate_menu">
          <Link className="header_navigate_menu_noLink" to="/">Generate</Link>
          <Link to="/contacts">Contacts</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/blog">Blog</Link>
        </nav>
        <div className="header_navigate_switcher">
          <select className="header_navigate_switcher_selected">
            <option>EN</option>
            <option>UA</option>
          </select>
        </div>
        <div className="header_navigate_button">
          <button className="header_navigate_button_login">Log in</button>
          <button className="header_navigate_button_signup">Sign up</button>
        </div>
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
