import { useState } from "react";
//display score

export default function Game ({ numberList, currentScore, setListAllScores, setNumberList }) {
  const [num, setNum] = useState(0);
  const [gameStatus, setGameStatus] = useState(true); //status of true means game is still active
  const correctAnswer = numberList?.includes(num); //not in state store so it renders realtime // true/false boolean, is the num in the array
  
  // const { numberList } = props;
  // const { setListAllScores } = props;
  // const { currentScore } = props; 
  // const { bestScore } = props;
  // const [numberList, setNumberList] = useState([]);
  // const [listAllScores, setListAllScores] = useState([0]);
  // const currentScore = (numberList.length);  
  // const bestScore = ((Math.max(...listAllScores)));

  console.log(" A num", num);
  console.log(" B numberList", numberList);
  console.log(" C correctAnswer", correctAnswer);
  console.log(" D numberList.includes(num)", numberList?.includes(num));
  console.log(" E gameStatus", gameStatus);
  console.log(" F currentScore", currentScore); 
  // console.log(" G listAllScores", listAllScores);
  // console.log(" H bestScore", bestScore); 

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  //targetId is click.event.target.id, No btn = "false"  or Yes btn = "true"
  const checkAnswer = (targetId) => {
    // sets a boolean T/F instead of a string. "true" === "true" then clickedAnswer = true
    const clickedAnswer = targetId === "true"; 
    console.log(" I clickedAnswer", clickedAnswer);

    //alert Game Over and restart game
    if (correctAnswer != clickedAnswer) {
      setGameStatus(false);
      setListAllScores(function (listAllScores){return [...listAllScores, currentScore]}); 
      setNum("");
      setNumberList([]);
      console.log(" J Game Over");
      // console.log(" K listAllScores", listAllScores);
    }
  };

  const handleClick = (e) => {
    setNum(randomNumberInRange(1, 30));
    setNumberList([...numberList, num]);
    checkAnswer(e.target.id);
  };

  const restartHandleClick = () => {
    console.log("L restart");
    setGameStatus(true); 
    setNum("0"); 
  } 

  return (
    <div className="number-div ">
      <div> 
        <h2>{gameStatus ? <p>Let&apos;s Play!</p> : <p>Game Over!</p>}</h2>
        <div>
          {gameStatus ? 
          <p></p> :
          <button id="restart-btn" className="btn" onClick={restartHandleClick}>
          Restart Game 
        </button> 
          }
        </div>
      </div>
      <h3>Number is: {num}</h3>
      <div className="question-div">
        <h3>Have you seen this Number yet?</h3>
        <div className="btn-div">
          <button id="false" className="btn" onClick={(e) => handleClick(e)}>
            No
          </button>
          <button id="true" className="btn" onClick={(e) => handleClick(e)}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}


