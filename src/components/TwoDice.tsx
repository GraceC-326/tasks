import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(2);

    const rollLeft = () => {
        setLeftDie(d6());
    };

    const rollRight = () => {
        setRightDie(d6());
    };

    const isSnakeEyes = leftDie === 1 && rightDie === 1;
    const isWin = leftDie === rightDie && !isSnakeEyes;

    return (
        <div>
            <h2>Two Dice</h2>

            <div>
                Left die last rolled a <span data-testid="left-die">{leftDie}</span>.{"    "}
                Right die last rolled a <span data-testid="right-die">{rightDie}</span> .
            </div>

            <div>
                <Button onClick={rollLeft}>Roll Left</Button>{" "}
                <Button onClick={rollRight}>Roll Right</Button>
            </div>

            {isSnakeEyes && <p>Snake Eyes! You Lose!</p>}
            {isWin && <p>Matching Pair! You Win!</p>}
        </div>
    );
}


/*
The TwoDice component will simulate a game where you roll two dice in an attempt to get matching values. However, you lose the game if your dice ever come up as a pair of ones (“snake eyes”).

- You will need two states, one for each die.
- Each die’s value should be rendered in the View in a span tag of their own, with the first dice having the data-testid of left-die and the second dice having the data-testid of right-die.
- You will need two “Roll” buttons (labelled Roll Left and Roll Right).
- Clicking a Roll button will change the value for the corresponding dice using the provided d6 function.
- Make the default initial values of the dice be different, i.e. each value in useState(value)
- When the two states are equal and equal to 1, render a message that includes the word Lose.
- When the two states are equal, render a message that includes the word Win.
- If you do all these and are still not passing all tests, read the test file, it is a good practice! In much of software engineering, the tests are the product spec.
*/

// Note: span works like <span data-testid="left-die">42</span>