import React from 'react';

const BoilingVerdict = ({ celsius = 0}) => {
    let result = null;
    if (celsius >= 100) {
        result = <p>The water would boil.</p>
    } else {
        result = <p>Water would not boil</p>
    }

    return (
        <div>
            {result}
        </div>
    );
};

export default BoilingVerdict;