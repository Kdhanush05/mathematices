import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        const inCount = count + 1;
        setCount(inCount);
    };

    const decrement = () => {
        const deCount = count - 1;
        setCount(deCount);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <>
            <h1>Counter</h1>

            <h2 className="count">
                {count}
            </h2>

            <button onClick={increment}>
                Increment
            </button>

            <button onClick={decrement}>
                Decrement
            </button>

            <button onClick={reset}>
                Reset
            </button>
        </>
    );
};

export default Counter;