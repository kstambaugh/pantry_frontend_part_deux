import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//Browser Router provides history context for routes (located in App.js)
import { BrowserRouter } from 'react-router-dom';

//Redux Store Config
import { createStore } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';
const store = createStore(reducer)


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>

);

