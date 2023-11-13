import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { EasydevProvider, ThemeTypeVariant } from '@aspirity/easydev';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <EasydevProvider
        themeType={
          localStorage.getItem('EASYDEV_THEME') === 'dark' || localStorage.getItem('EASYDEV_THEME') === 'light'
            ? (localStorage.getItem('EASYDEV_THEME') as ThemeTypeVariant)
            : 'light'
        }
      >
        <App />
      </EasydevProvider>
    </BrowserRouter>
  </React.StrictMode>
);
