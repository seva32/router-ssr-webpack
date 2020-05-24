import React, { useState, useEffect } from 'react';
import loadData from './loadData';

function Posts(props) {
  const [postArr, setPostArr] = useState([]);
  useEffect(() => {
    if (props.staticContext && props.staticContext.data) {
      setPostArr([...postArr, ...props.staticContext.data]);
    } else if (window.__ROUTE_DATA__) {
      setPostArr([...postArr, ...window.__ROUTE_DATA__]);
      delete window.__ROUTE_DATA__;
    } else {
      loadData('posts').then((data) => {
        setPostArr([...postArr, ...data]);
      });
    }
  }, []);
  return (
    <ul>
      {postArr.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default Posts;
