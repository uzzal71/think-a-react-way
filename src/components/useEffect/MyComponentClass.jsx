import React from 'react';

class MyComponentClass extends React.Component {
    state = {
        count: 0,
        date: new Date(),
    };

    add = () => {
        this.setState(({ count }) => ({
            count: count + 1,
        }))
    };

    render() {
        const { data } = this.state
        return (
            <div>
                <p>Time: {date.toLocalTimeString()}</p>
                <p>
                    <button type='button'>Click</button>
                </p>
            </div>
        )
    }
}

export default MyComponentClass