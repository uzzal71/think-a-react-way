import { useEffect, useState } from 'react';

const MyComponent = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date());
    }

    useEffect(() => {
        console.log('updating document title');
        document.title = `Clicked ${count} times`;
    }, [count]);

    useEffect(() => {
        console.log('starting timer');
        setInterval(tick, 1000);
    }, []);

    const addClick = () => {
        setCount((prevCount) => prevCount + 1);
    }

    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                <input type='text' name='text' value={text} onChange={(e) => setText(e.target.value)}/>
            </p>
            <p>
                <button type='button' onClick={addClick}>Click</button>
            </p>
        </div>
    );
};

export default MyComponent;