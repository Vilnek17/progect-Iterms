import React from 'react';
import '../Header/Header.scss';
import Generate from './Generate/Generate';
import Contacts from './Contacts/Contacts';
import Pricing from './Pricing/Pricing';
import Blog from './Blog/Blog';
import { Routes, Route, Link} from 'react-router-dom';
import { LOCALES } from '../../i18nProvider';
import translate from '../../i18nProvider/translate';
import { useNavigate } from 'react-router-dom';


const Header = ({setLocale}) => {
  const navigate=useNavigate();
  const handleClick=()=> {
    navigate ('/blog');
  };
  return ( 
    <><div className="header_navigate">
      <p className="header_navigate_name">iTerms</p>
      <nav className="header_navigate_menu">
        <Link dir="auto" className="header_navigate_menu_noLink" to="/">{translate('header-generate')}</Link>
        <Link className="header_navigate_menu_noLink" to="/contacts">{translate('header-contacts')}</Link>
        <Link className="header_navigate_menu_noLink" to="/pricing">{translate('header-pricing')}</Link>
        <Link className="header_navigate_menu_noLink" to="/blog">{translate('header-blog')}</Link>
      </nav>
      <div className="header_navigate_switcher">
        <select className="header_navigate_switcher_selected" onChange={(event) => setLocale(event.target.value)}>
          <option value={LOCALES.ENGLISH}>EN</option>
          <option value={LOCALES.UKRAINE}>UA</option>
        </select>
      </div>
      <div className="header_navigate_button">
        <button type="button" className="header_navigate_button_login" onClick={()=> navigate('/contacts')}>{translate('header-logIn')}</button>
        <button className="header_navigate_button_signup"onClick={handleClick} >{translate('header-signUp')}</button>
      </div>
    </div>
    <Routes >
      <Route path="/" element={<Generate handleClick={handleClick}/>} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/blog" element={<Blog />} />
    </Routes></>
  
  );};
export default Header;
