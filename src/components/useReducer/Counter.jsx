import { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {

}

const Counter = () => {
    useReducer(reducer, initialState);

    return (
        <div>
            <div>Count - 0</div>
            <button type="button">Increment</button>
            <button type="button">Decrement</button>
        </div>
    );
};

export default Counter;