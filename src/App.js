import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [resourcetype, setResourceType] = useState('');

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourcetype}`)
      .then(response => response.json())
      .then(json => console.log(json))

    return () => {
      console.log('return from resource change')
    }
  }, [resourcetype])
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={() => setResourceType('posts')}>Post</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <h1>{resourcetype}</h1>
    </div>
  );
}

export default App;
