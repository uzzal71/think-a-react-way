const Text = ({ addEmoji, addBracket }) => {
    let text = 'I am JavaScript Programming Language.';

    // {addEmoji ? addEmoji(text, '🏩') : text}
    if (addEmoji) {
        text = addEmoji(text, '🏩');
    }
    if (addBracket) {
        text = addBracket(text)
    }

    return (
        <div>
            {text}
        </div>
    );
};

export default Text;