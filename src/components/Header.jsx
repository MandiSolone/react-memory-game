import { useContext } from "react";

export function Header (){
        const currentScore = useContext(currentScore); 
        const bestScore = useContext(bestScore); 

        return(
            <header className="App-header">
            <h1>React Memory Game</h1>
            <p>Objective: Answer the questions to test your memory.</p>
            <h2>Highest Score is 15!</h2>
            <div className= "d-flex justify-content-around align-items-center">
                <div><p>Current Score: </p>
                <p>{currentScore}</p>
                </div>
                <div><p>Best Score: </p>
                <p>{bestScore}</p>
                </div>
            </div>
            </header>
        );
}