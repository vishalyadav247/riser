import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppHeader />
      <App />
      <AppFooter />
    </BrowserRouter>
  </React.StrictMode >
);

reportWebVitals();
