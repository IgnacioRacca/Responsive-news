import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
    
  const fetchItems = async () => {
    const data = await fetch ('https://fortnite-api.theapinetwork.com/upcoming/get')
    // const data = await fetch('https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get')
    ;
    const items = await data.json();
    //console.log (data);
    console.log (items.data);
    setItems(items.data);
  };


  return (
    <div >
        {/* <h1>Shop page</h1> */}
        {items.map(item => (
          <h1 key={item.itemId}> 
            <Link to={`/shop/${item.itemId}`}>{item.name}</Link>
          </h1>
        ))}
    </div>
  );
}

export default Shop;
