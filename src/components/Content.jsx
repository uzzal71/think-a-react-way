import React from 'react';
import Counter from './counter/Counter';
import HoverCounter from './counter/HoverCounter';

const Content = () => {
    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
                {(counter, incrementCount) => (
                    <HoverCounter counter={counter} incrementCount={incrementCount}/>
                )}
            </Counter>
        </div>
    );
};

export default Content;