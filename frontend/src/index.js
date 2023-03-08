import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

reportWebVitals();
