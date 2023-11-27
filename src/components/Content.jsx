import React from 'react';
import ThemeContext from '../contexts/themeContext';
import Counter from './counter/Counter';
import HoverCounter from './counter/HoverCounter';

const Content = () => {
    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
                {(counter, incrementCount) => {
                    return <ThemeContext.Consumer>{({theme}) => <HoverCounter counter={counter} incrementCount={incrementCount} theme={theme}/>}</ThemeContext.Consumer>
                }}
            </Counter>
        </div>
    );
};

export default Content;