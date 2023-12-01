import { useEffect, useState } from 'react';

const Time = () => {
    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date());
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000);

        // do the cleanup - stop the timer
        return () => {
            clearInterval(interval)
        }
    });

    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
        </div>
    );
};

export default Time;