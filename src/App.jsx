// import { Component } from "react";
import './App.css'
import { Header } from './components/Header';
import Game from './components/Game';

//     super(); 
//     this.state = {
//       currentScore: 0, 
//       bestScore: 0,
//     };
    
//    render() {
//       const { currentScore, bestScore } = this.state ; 

function App () {
      return (
          <main className= "App-container">
            <Header /> {/* currentScore={currentScore} bestScore={bestScore} */}
            <Game />
          </main>
      );
    }

export default App;
