const ClickCounter = ({ counter, incrementCounter }) => {
    return <button onClick={incrementCounter}>Clicked {counter} times</button>;
};

export default ClickCounter;