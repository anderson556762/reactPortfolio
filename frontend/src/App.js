import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="card">
        <img 
          className="profile-pic" 
          src="imagens/eu.jpg" 
          alt="Foto" 
        />
        <h1 className="name">Anderson Dantas</h1>
        <p className="description">
          Olá! Sou um desenvolvedor apaixonado por tecnologia, sempre em busca de novos desafios e oportunidades de aprendizado. Vamos construir algo incrível juntos!
        </p>
      </div>
    </div>
  );
}

export default App;