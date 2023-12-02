import { useReducer } from 'react';

const initialState = 0;
const initialState2 = 5
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
           return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
}

const CounterThree = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [count2, dispatch2] = useReducer(reducer, initialState2);

    return (
        <section>
            <div>
                <div>Count 1 - {count}</div>
                <button type="button" onClick={() => dispatch('increment')}>Increment</button>
                <button type="button" onClick={() => dispatch('decrement')}>Decrement</button>
            </div>
            <div>
                <div>Count 2 - {count2}</div>
                <button type="button" onClick={() => dispatch2('increment')}>Increment</button>
                <button type="button" onClick={() => dispatch2('decrement')}>Decrement</button>
            </div>
        </section>
    );
};

export default CounterThree;