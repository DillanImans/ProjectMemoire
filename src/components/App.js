import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import history from '../history';
import Header from './Header';
import MainPage from './MainPage';
import OurStory from './OurStory';
import FindUs from './FindUs';
import './styling/app.scss';

const App = () => {

  useEffect(() => {
    document.body.className = "bodyStyle";
  }, [])

  return (
    <div>
      <BrowserRouter history={history}>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/ourstory" element={<OurStory />} />
            <Route path="/findUs" element={<FindUs />} />
          </Routes>  
      </BrowserRouter>
    </div>
  )
}

export default App;