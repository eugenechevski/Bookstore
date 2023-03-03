import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteSwitch from 'components/RouteSwitch';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
document.querySelector('body').classList.add('font-Lato', 'h-max');
root.render(
  <React.StrictMode>
    <RouteSwitch></RouteSwitch>
  </React.StrictMode>
);

