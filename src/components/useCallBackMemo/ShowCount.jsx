import React from 'react';

const ShowCount = ({count, title}) => {
    return (
        <div>
            {title} is {count}
        </div>
    );
};

export default ShowCount;