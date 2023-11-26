import React from 'react';
import Content from './Content';

const Section = ({ theme }) => {
    return (
        <div>
            <h1>This is a section</h1>
            <Content theme={theme}/>
        </div>
    );
};

export default Section;