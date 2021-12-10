import './index.css';
import './estilo.css';
import {Routes, Route} from 'react-router-dom'
import React from "react";
import Routes from './naveg';
import Cadastro from './pages/Cadastro';
import Contato from './pages/Contato';
import Entregas from './pages/Entregas';
import Rastrear from './pages/Rastrear';
import Empresa from './pages/Empresa';
import Rotas from './pages/Rotas';
import Menu from './Components/Menu';
import Home from './pages/Home';



export default function App() {
   return (
     <>
     <Menu/>
     <Routes>
       <Route element= {<Home/>} path= "Home"/>
       <Route element= {<Cadastro/>} path= "Cadastro"/>
       <Route element= {<Contato/>} path= "Contato"/>
       <Route element= {<Empresa/>} path= "Empresa"/>
       <Route element= {<Rastrear/>} path= "Rastrear"/>
       <Route element= {<Entregas/>} path= "Entregas"/>
       <Route element= {<Rotas/>} path= "Rotas"/>
    
    </Routes>
    </>
  );
}


