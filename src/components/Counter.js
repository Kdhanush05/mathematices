import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");

    const increment = () => {
        setCount(count + 1);
        setMessage("");

        
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            setMessage("Mininum Limit Reached!");
        }
    };

    const reset = () => {
        setCount(0);

    };

    return (
        <>
            <h1>Counter</h1>

            <h2 className="count" >{count}</h2>

            <button onClick={increment}>
                Increment
            </button>

            <button onClick={decrement}>
                Decrement
            </button>

            <button onClick={reset}>
                Reset
            </button>

            <p className="message">{message}</p>
        </>
    );
};

export default Counter;