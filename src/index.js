import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './store/rootReducer';

const store = configureStore({
  reducer: rootReducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>
);
