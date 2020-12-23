import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleIncrementOnClick = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        console.log('this count component mounted')
    }, []);

    useEffect(() => {
        //console.log('the coutn has been incremented')
        return () => {
            console.log('this cleanup has been called')
        }
    }, [])

    return (
      <div>
        <h2>
            the count is: {count}
        </h2>
        <button onClick = {handleIncrementOnClick}>
             Increment count
        </button>
      </div>
    )
  
};

export default Counter;




