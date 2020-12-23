import React, { useState, useEffect } from 'react';
import './App.css';

export default () => {
  const [count, setCount] = useState(0);

  const [data, setData] = useState(null);
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);
  

  //similar to componentDidMount and componentDidUpdate
  // useEffect(() => {
  //   //update the document title using the browser api
  //   document.title = `you clicked ${count} time`;
  // }, [count]);

  useEffect(async () => {
    const response = await fetch('http://apirandomuser.me/');
    const data = await response.json();
    const [ item ] = data.results;
    setPerson(item);
    setLoading(false);
  }, []); //si quito los corchetes busca en todo el archivo en un loop infinito

  return(
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}> click me</button>
      {/* {person && <div>{person.name.first}</div>} */}
      {loading ? <div>...loading</div> : <div>{data.name.first}</div>}
    </div>
  );
};