import { useState } from 'react';
 //array to hold list of numbers already shown -boolean true/false // add to array if duplicate (array.includes  !array.includes)
//end game: start over and empty array 
//function to check if your answer yes no is correct or not 
// track score (.length or array)
//display score 

function RandomNumber (){
   
    const [num, setNum] = useState(0);
    const [numberList, setNumberList] = useState([]); 
    const [clickedAnswer, setClickedAnswer] = useState (false); // button id = true/false
    const [correctAnswer, setCorrectAnswer] = useState (Boolean);
        console.log("num", num); 
        console.log("numberList", numberList); 
        
    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    const updateCorrectAnswer = () => {
        //if current number = number in the array answer should be true otherise it should be false
        if (numberList.includes(num)) {
            setCorrectAnswer(true); 
        } setCorrectAnswer(false);
    };

console.log("correctAnswer", correctAnswer);

    const checkAnswer =() => 
        { if (correctAnswer !== clickedAnswer) {
            //alert Game Over and restart game 
        } 
        };

    const handleClick = (e) => {
        setNum(randomNumberInRange(1, 5));
        setNumberList([...numberList, num]);
        setClickedAnswer(e.target.id); // id = true/false
        updateCorrectAnswer; //run to set the correct answer 
        checkAnswer;
    };
    console.log("clickedAnswer", clickedAnswer);

    return (
        <div className="number-div">
            <h2>Number is: {num}</h2>
            <div className="question-div">
                <h3>Have you seen this Number yet?</h3>
                <div className="btn-div d-flex justify-content-around align-items-centerd">
                    <button id="false" className="btn" onClick={(e) => handleClick(e)}>No</button>
                    <button id="true" className="btn" onClick={handleClick}>Yes</button>
                </div>
            </div>
        </div>    
    );
};
  export default RandomNumber; 