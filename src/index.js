import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CurrentUserProvider from './context/CurrentUser';
import { BrowserRouter as Router } from 'react-router-dom';




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <CurrentUserProvider>
        <App />
      </CurrentUserProvider>
    </Router>
  </React.StrictMode>



);

