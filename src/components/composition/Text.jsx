import React from 'react';

const Text = ({ addEmoji }) => {
    const text = 'I am JavaScript Programming Language.';

    return (
        <div>
            {addEmoji ? addEmoji(text, '🏩') : text}
        </div>
    );
};

export default Text;