import React from 'react';
import withLiked from './HOC/withLiked';

const PostLike = ({like, handlePostLike}) => {
    return (
        <div>
          <button onClick={handlePostLike}>Post Like: {like}</button>
        </div>
    )
};

export default withLiked(PostLike);
