import { useContext } from 'react';
import ThemeContext from '../contexts/themeContext';
import Counter from './counter/Counter';
import HoverCounter from './counter/HoverCounter';

const Content = () => {
    const context = useContext(ThemeContext);
    const {theme, switchTheme} = context;
    
    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
                {(counter, incrementCount) => (
                    <HoverCounter counter={counter} incrementCount={incrementCount} theme={theme} switchTheme={switchTheme}/>
                )}
            </Counter>
        </div>
    );
};

export default Content;