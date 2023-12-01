import { useEffect, useRef } from 'react';
import Input from './Input';

const Form = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        // component did load
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <p>
                <Input ref={inputRef} type='text' placeholder='enter something'/>
            </p>
        </div>
    );
};

export default Form;