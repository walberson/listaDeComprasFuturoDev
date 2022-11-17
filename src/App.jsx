import { ListItem } from "./ListItem";
import "./App.css";
import { useState } from "react";
function App() {
  const [texto, setTexto] = useState("");

  return (
    <div className="App">
      <h1>Lista de compras</h1>
      <ul>
        <ListItem label="Cebolinha" />
        <ListItem label="Tomate" />
        <ListItem label="Arroz" />
        <ListItem label="Feijão" />
      </ul>
      <p>você digitou: {texto}</p>
      <input type="text" onChange={(event) => setTexto(event.target.value)} />
      <button>Adicionar</button>
    </div>
  );
}

export default App;
