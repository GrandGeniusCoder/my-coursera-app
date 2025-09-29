import "./Math.css";
import Card from "../src/Card";

const randNum = () => Math.floor(Math.random() * 100) + 1;

function Math() {

  function handleClick() {
let randomNum = Math.floor(Math.random() * 3) + 1;
console.log(randomNum);
let userInput = prompt('type a number');
alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }

    return (
        <div>
            <h1>Task: Add three Card elements</h1>
            <Card num={randNum()} />
            <Card num={randNum()} />
            <Card num={randNum()} />
      
      <h1>Task: Add a button and handle a click event</h1>
    <button onClick={handleClick}>Guess the number between 1 and 3</button>
    </div>
    );
}

export default Math;