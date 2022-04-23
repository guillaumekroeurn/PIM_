import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Startpage from './pages/__startpage';
import Pageregister from './pages/_registerpage';
import Pagelogin from './pages/_loginpage';
import Pagehome from './pages/homepage';
import Pagephoto from './pages/pagephoto';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Startpage/>} />
        <Route path="/inscription" element={<Pageregister/>} />
        <Route path="/Connexion" element={<Pagelogin/>} />
        <Route path="/mission" element={<Pagehome/>} />
        <Route path="/photo" element={<Pagephoto/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


