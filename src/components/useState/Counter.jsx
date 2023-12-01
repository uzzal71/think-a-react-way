import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    let i = 0;
    const addFive = () => {
        while(i < 5) {
            setCount((prevState) => prevState + 1);
            i = i + 1;
        }
    }

    return (
        <div>
            <h2>{count}</h2>
            <button type='button' onClick={() => setCount((prevState) => prevState + 1)}>Add +1</button>
            <button type='button' onClick={addFive}>Add +5</button>
        </div>
    );
};

export default Counter;