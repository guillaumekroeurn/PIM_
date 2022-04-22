import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Pagephoto from './pages/pagephoto';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1/>} />
        <Route path="/page2" element={<Page2/>} />
        <Route path="/page3" element={<Page3/>} />
        <Route path="/photo" element={<Pagephoto/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


