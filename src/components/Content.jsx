import React from 'react';
import ThemeContext from '../contexts/themeContext';
import Counter from './counter/Counter';
import HoverCounter from './counter/HoverCounter';

export default class Content extends React.Component {
    componentDidMount() {
        console.log(this.context);
    }

    render() {
        const {theme, switchTheme} = this.context;

        return (
            <div>
                <h1>This is a content</h1>
                <Counter>
                    {(counter, incrementCount) => (
                        <HoverCounter 
                        counter={counter} 
                        incrementCount={incrementCount} 
                        theme={theme} 
                        switchTheme={switchTheme}
                        />
                    )}
                </Counter>
            </div>
        );
    }
};

Content.contextType = ThemeContext