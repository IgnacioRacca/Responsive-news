import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleIncrementOnClick = () => {
        setCount(count + 1);
    }

    const [countTwo, setCountTwo] = useState(0);
    const handleIncrementTwoOnClick = () => {
        setCountTwo(countTwo + 1);
    }

    useEffect(() => {
        console.log('component did mount');
    }, []);

    useEffect(() => {
        console.log('component did update')
    }, [count, countTwo]);

    useEffect(() => {
        console.log('component did unmount')
    }, []);

    return (
      <div>
        <h2>
            coutn #1: {count}
        </h2>
        <button onClick = {handleIncrementOnClick}>
             Increment count
        </button>
        <h2>
            coutn #2: {countTwo}
        </h2>
        <button onClick = {handleIncrementTwoOnClick}>
             Increment count Two
        </button>
      </div>
    )
  
};

export default Counter;




