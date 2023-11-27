const HoverCounter = ({ counter, incrementCounter }) => {
    return <h1 onMouseOver={incrementCounter}>Hovered {counter} times</h1>;
};

export default HoverCounter;