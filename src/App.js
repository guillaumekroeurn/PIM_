import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pagestart from './pages/__startpage';
import Pageregister from './pages/_registerpage';
import Pagelogin from './pages/_loginpage';
import Pagemission from './pages/missionpage';
import Pagephoto from './pages/pagephoto';
import Pagecollection from './pages/collectionpage';
import Pageplante from './pages/plantepage'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pagestart/>} />
        <Route path="/inscription" element={<Pageregister/>} />
        <Route path="/connexion" element={<Pagelogin/>} />
        <Route path="/mission" element={<Pagemission/>} />
        <Route path="/photo" element={<Pagephoto/>} />
        <Route path="/collection" element={<Pagecollection/>} />
        <Route path="/description" element={<Pageplante/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


