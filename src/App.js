import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pagestart from './pages/__startpage';
import Pageregister from './pages/_registerpage';
import Pagelogin from './pages/_loginpage';
import Pagehome from './pages/homepage';
import Pagephoto from './pages/pagephoto';
import Pagecollection from './pages/collectionpage';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pagestart/>} />
        <Route path="/inscription" element={<Pageregister/>} />
        <Route path="/Connexion" element={<Pagelogin/>} />
        <Route path="/mission" element={<Pagehome/>} />
        <Route path="/photo" element={<Pagephoto/>} />
        <Route path="/collection" element={<Pagecollection/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


