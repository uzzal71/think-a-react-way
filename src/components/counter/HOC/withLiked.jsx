import React from 'react';

const withLiked = (OriginalComponent) => {
    class NewComponent extends React.Component {
        state = {
            likeCount: 0,
        }
    
        createPostLike = () => {
            this.setState((prevLikeCount) =>({ likeCount: prevLikeCount.likeCount + 1 }));
        }
        render() {
            const { likeCount } = this.state;

            return <OriginalComponent like={likeCount} handlePostLike={this.createPostLike}/>;
        }
    }
    return NewComponent;
};

export default withLiked;