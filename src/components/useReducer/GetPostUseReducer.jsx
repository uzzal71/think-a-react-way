import React, { useEffect, useReducer } from 'react';

const initialState = {
  loading: true,
  error: "",
  post: {}
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SUCCESS':
    case 'ERROR':
      return {
        loading: action.payload.isLoading,
        error: action.payload.errorMessage,
        post: action.payload.result
      };
    default:
      return state;
  }
};

const GetPostUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: "SUCCESS", payload: { isLoading: false, errorMessage: "", result: data } });
      })
      .catch(() => {
        dispatch({ type: "ERROR", payload: { isLoading: false, errorMessage: "There was a problem!", result: {} } });
      });
  }, []);

  return (
    <div>
      {state.loading ? "Loading..." : <div><h2>{state.post.title}</h2><p>{state.post.body}</p></div>}
      {state.error || null}
    </div>
  );
};

export default GetPostUseReducer;
