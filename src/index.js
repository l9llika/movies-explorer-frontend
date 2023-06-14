import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <BrowserRouter>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </BrowserRouter>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
