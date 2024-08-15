import './App.css'
import { Header } from './components/Header';
import Game from './components/Game';
import { useState } from 'react';

function App () {
  const [numberList, setNumberList] = useState([]);
  const [listAllScores, setListAllScores] = useState([0]);
  const currentScore = numberList.length;  
  const bestScore = Math.max(...listAllScores);

  console.log(" G listAllScores", listAllScores);
  console.log(" H bestScore", bestScore); 
  console.log(" K listAllScores", listAllScores);

      return (
          <main className= "App-container">
            <Header currentScore={currentScore} bestScore={bestScore}/> 
            <Game numberList={numberList} setNumberList={setNumberList} setListAllScores={setListAllScores} currentScore={currentScore}  />
          </main>
      );
    }

export default App;
