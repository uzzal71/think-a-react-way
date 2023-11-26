import React from 'react';
import withLiked from './HOC/withLiked';

const WriterLike = ({like, handlePostLike}) => {
    return (
        <div>
          <button onClick={handlePostLike}>Writer Like: {like}</button>
        </div>
    )
};

export default withLiked(WriterLike);
