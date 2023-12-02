import { useReducer } from 'react';

const initialState = {
    counter: 0,
    counter2: 0,
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
           return {...state, counter: state.counter + action.value};
        case 'decrement':
            return {...state, counter: state.counter - action.value};
        case 'increment2':
            return {...state, counter2: state.counter2 + action.value};
        case 'decrement2':
            return {...state, counter2: state.counter2 - action.value};
        default:
            return state;
    }
}

const ComplexCounter = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <section>
            <div>
                <div>Count 1 - {count.counter}</div>
                <button type="button" onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
                {/* <button type="button" onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment by five</button> */}
                <button type="button" onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
                {/* <button type="button" onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement by five</button> */}
            </div>
            <div>
                <div>Count 2 - {count.counter2}</div>
                <button type="button" onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment2</button>
                {/* <button type="button" onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment by five</button> */}
                <button type="button" onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement2</button>
                {/* <button type="button" onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement by five</button> */}
            </div>
        </section>
    );
};

export default ComplexCounter;