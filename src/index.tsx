import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
document.querySelector('body').classList.add('font-Lato', 'h-max');
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);

