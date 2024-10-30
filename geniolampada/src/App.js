import React, { useState } from 'react';
import './App.scss';
import lampImage from './assets/lampada.png'; // Substitua com o caminho real da imagem
import genieImage from './assets/genio.png'; // Substitua com o caminho real da imagem

function App() {
  const [showGenie, setShowGenie] = useState(false);

  const handleClick = () => {
    setShowGenie(!showGenie);
  };

  return (
    <div className="app">
      <h1>"Libere a magia da programação com a lâmpada de Aladim."</h1>
      <div className="image-container" onClick={handleClick}>
        <img src={showGenie ? genieImage : lampImage} alt="Magic" />
      </div>
      <button onClick={handleClick}>Clique Aqui</button>
    </div>
  );
}

export default App;