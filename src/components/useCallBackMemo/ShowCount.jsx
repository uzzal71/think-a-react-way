import React from 'react';

const ShowCount = ({count, title}) => {
    console.log(`rendering ${title}...`);

    return (
        <div>
            {title} is {count}
        </div>
    );
};

export default React.memo(ShowCount);