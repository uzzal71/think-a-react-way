import Clock from './Clock';

const ClockList = ({ quantities = []}) => {
    return (
        <div>
            { quantities.map((_, key) => <Clock key={key}/>) }
        </div>
    );
};

export default ClockList;