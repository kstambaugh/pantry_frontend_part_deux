import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CurrentUserProvider from './context/CurrentUser';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { MyStore } from './store';
import { createStore } from 'redux';
import rootReducer from './store/reducer';
const myStore = createStore(rootReducer)




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <Router  >
        <CurrentUserProvider>
          <App />
        </CurrentUserProvider>
      </Router>
    </Provider>
  </React.StrictMode>



);

