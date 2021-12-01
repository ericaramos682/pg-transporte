import './index.css';
import './estilo.css';
import React from "react";
import Routes from './naveg';



export default function App() {
   return (
    <div className="App">
      <h1> PG Transportes </h1>
      <div id="imgcarreta">
        <img alt="imagem de carreta" src="imagem/carreta.jpg" id="imgc" />
      </div>


      <div id="voltar">
        <a href="index.html" target="_parent"><button>Voltar ao menu</button></a>
        
      </div>
    </div>
  );
}


