import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pagestart from './pages/__startpage';
import Pageregister from './pages/_registerpage';
import Pageform from './pages/formpage';
import Pagelogin from './pages/_loginpage';
import Pagemission from './pages/xmissionpage';
import Pagephoto from './pages/pagephoto';
import Pagecollection from './pages/xcollectionpage';
import Pagecollection2 from './pages/xcollectionpage2';
import Pageplante from './pages/xplantepage';
import Pagequizz from './pages/quizzpage';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pagestart/>} />
        <Route path="/inscription" element={<Pageregister/>} />
        <Route path="/form" element={<Pageform/>} />
        <Route path="/connexion" element={<Pagelogin/>} />
        <Route path="/mission" element={<Pagemission/>} />
        <Route path="/photo" element={<Pagephoto/>} />
        <Route path="/plantes" element={<Pagecollection/>} />
        <Route path="/Badges" element={<Pagecollection2/>} />
        <Route path="/description" element={<Pageplante/>} />
        <Route path="/quizz" element={<Pagequizz/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


