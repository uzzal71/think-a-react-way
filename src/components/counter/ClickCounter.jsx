import React from "react";

class ClickCounter extends React.Component {
    state = {
        count: 0,
    };

    render() {
        const { count } = this.state;

        return(
            <div>
                <button type="button">Clicked { count } times</button>
            </div>
        );
    }
}

export default ClickCounter;