import { useEffect, useRef } from 'react';

const Form = () => {
    const inputRef = useRef(null);
    
    useEffect(() => {
        // component did load
    }, []);

    return (
        <div>
            <p>
                <input type='text' placeholder='enter something'/>
            </p>
        </div>
    );
};

export default Form;