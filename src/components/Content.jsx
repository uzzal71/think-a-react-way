import React from 'react';
import Counter from './counter/Counter';
import HoverCounter from './counter/HoverCounter';

const Content = ({theme}) => {
    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
                {(counter, incrementCount) => {
                    return (value) => <HoverCounter counter={counter} incrementCount={incrementCount} theme={theme}/>
                }}
            </Counter>
        </div>
    );
};

export default Content;