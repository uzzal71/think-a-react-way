import React from 'react';

const Title = () => {
    console.log('rendering title...')
    return (
        <div>
            <h1>useCallback Hook Tutotial</h1>
        </div>
    );
};

export default React.memo(Title);