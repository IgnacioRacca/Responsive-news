import React from 'react';
//import './App.css';
import Styles from './Style.module.css';

console.log(Styles);

const App = () => (
  <div className={Styles.container}>
    <h1 className={Styles.title}>hola</h1>
  </div>
);

export default App;
