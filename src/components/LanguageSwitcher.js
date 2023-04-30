import React from 'react';

const LanguageSwitcher=React.createContext({
  state : {
    lang: 'en',
  },
});

export default LanguageSwitcher;
