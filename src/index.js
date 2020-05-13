import React from 'react';
import { render } from 'react-snapshot';
import App from './pages/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

