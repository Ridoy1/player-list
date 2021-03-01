import logo from './logo.svg';
import './App.css';
import playerData from './data/data.json';
import { useEffect, useState } from 'react';
import Player from './components/Player/Player';
import Selected from './components/Player/Selected/Selected';

function App() {
  const [players, setPlayer] = useState([]);
  const [selected, setSelected] = useState([]);
  useEffect(() =>{
    setPlayer(playerData);
  }, [])

  const handleAddPlayer = (player) => {
    const newSelected = [...selected, player];
    setSelected(newSelected);
  }
  return (
    <div className="App">
      <h1>Player List: {players.length}</h1>
      <h3>Player Selected: {selected.length}</h3>
      <Selected selected={selected} ></Selected>
      {
        players.map(player => <Player player={player} handleAddPlayer={handleAddPlayer} key={player.id}></Player>)
      }
    </div>
  );
}

export default App;
