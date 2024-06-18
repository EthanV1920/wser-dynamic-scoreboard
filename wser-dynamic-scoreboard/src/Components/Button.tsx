import React, { useState } from "react";

function Button() {
    const [score, setScore] = useState(0);

    const buttonHandler = () => {
        setScore(score + 1);
        console.log(score);

    };


    return(
        <div>
            <button onClick={buttonHandler} className="button">Click Me!</button>
            <p>Score: {score}</p>
        </div>
    );
}

export default Button
