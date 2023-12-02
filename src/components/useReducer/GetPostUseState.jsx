import { useEffect, useState } from 'react';

const GetPostUseState = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => {
                setLoading(false);
                setPost(data);
                setError('')
            })
            .catch(() => {
                setLoading(false);
                setPost({});
                setError('There was a problem!');
            });
    }, []);

    return (
        <div>
            {loading ? 'Loading...' : <div><h2>{post.title}</h2><p>{post.body}</p></div>}
            {error || null}
        </div>
    );
};

export default GetPostUseState;