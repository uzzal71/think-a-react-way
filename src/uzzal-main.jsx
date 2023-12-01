import React from 'react';
import ReactDOM from 'react-dom';

const states = [];
let stateIndex = 0;

function useState(defaultValue) {
    const index = ++stateIndex;

    if (states[index]) return states[index];

    const setValue = (newValue) => {
        states[index][0] = newValue;
        renderApp();
    };

    const returnArray = [defaultValue, setValue];
    states[index] = returnArray;
    return returnArray;
}

function App() {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState(null);

    const handleInput = (e) => {
        const inputValue = e.target.value;
        const updatedWarning = inputValue.includes('.js')
            ? 'You need JavaScript skill to complete the task. Do you have it?'
            : null;

        setTodo(inputValue);
        setWarning(updatedWarning);
    };

    return (
        <div>
            <p>{todo}</p>
            <p>
                <textarea name="todo" value={todo} onChange={handleInput} />
            </p>
            <hr />
            <p>{warning || 'Good choice!'}</p>
        </div>
    );
}

function renderApp() {
  stateIndex = -1;
  ReactDOM.render(<App />, document.getElementById('root'));
}

renderApp();