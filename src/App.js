import './App.scss';
import Routes from './routes';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import AOS from 'aos';
import "aos/dist/aos.css";
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  AOS.init({
    mobile: 'disable'
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes/>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
