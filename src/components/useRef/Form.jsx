import { useEffect } from 'react';

const Form = () => {
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