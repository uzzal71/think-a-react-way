import React from "react";

class ClickCounter extends React.Component {
    state = {
        count: 0,
    };
    
    render() {
        return(
            <div>
                <button type="button">Clicked X Times</button>
            </div>
        );
    }
}

export default ClickCounter;