import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CurrentUserProvider from './context/CurrentUser';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducer'
const myStore = createStore(reducer)




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <Router  >
    <Provider store={myStore}>
      <CurrentUserProvider>
        <App />
      </CurrentUserProvider>
    </Provider>
  </Router>




);

