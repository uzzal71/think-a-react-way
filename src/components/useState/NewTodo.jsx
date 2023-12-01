import { useState } from 'react';

const NewTodo = () => {
    const [todo, setTodo] = useState({
        title: '',
        description: ''
    });

    const {title, description} = todo;

    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>
                <input type='text' name='title' onChange={(e) => setTodo({...todo, title: e.target.value})}/>
            </p>
            <p>
                <textarea name='description' value={description} onChange={(e) => setTodo({...todo, description: e.target.value})}/>
            </p>
        </div>
    );
};

export default NewTodo;