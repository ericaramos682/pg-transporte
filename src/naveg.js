import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Menu from "./Menu.js"
import Empresa from "./Empresa.js"
import Entregas from './Entregas.js';
import Cadastro from './Cadastro.js';
import Contato from './Contato.js';
import Rastrear from './Rastrear.js';
import Rotas from './Rotas.js';


const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Menu }  path="/Menu" exact />
           <Route component = { Empresa }  path="/Empresa" />
           <Route component = { Contato }  path="/Contato" />
       </BrowserRouter>
   )
}

export default Routes;