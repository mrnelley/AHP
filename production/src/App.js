import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';
// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />
import './App.css';
// Fonts
import './assets/css/flaticon-set.css'
import './assets/fonts/remixicon.css';
import './assets/fonts/themify-icons.css';

// Css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'react-modal-video/css/modal-video.css'
import 'react-multi-carousel/lib/styles.css';
import 'react-toastify/dist/ReactToastify.css';

import './assets/css/helper.css'
import './assets/css/unit-test.css'
import './assets/css/style.css'

// Components
import PreLoader from './Components/PreLoader';
import Home from './Pages/Home';
import NotFound from './Components/NotFound';
import ScrollUpBtn from './Components/ScrollUpBtn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Routes>
            <Route path='/' name='home' element={<Home />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
