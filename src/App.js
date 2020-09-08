import React from 'react';
import './App.css';
import './styles/globalstyle'

import {ToastContainer} from 'react-toastify'
import {Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import Routes from './routes.js';
import history from './services/history'
import NavBar from './components/nav-bar/index'
import Footer from './components/footer/index'

function App() {
  return (
      <Provider store={store}>
        <Router history={history}>
          <NavBar/>
            <ToastContainer autoClose={5000} className='toast-container' />
            <Routes/>
          <Footer/>
        </Router>
      </Provider>
  );
}

export default App;
