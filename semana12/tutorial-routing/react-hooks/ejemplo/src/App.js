// import React,{ Component, useState } from 'react';
import React,{ useState } from 'react';
// import Counter from './Counter_class';
import Counter from './Counter_hooks2';
import './App.css';


// you a few seconds ago | 1 author (you)
// 
// class App extends Component {
//   constructor(){
//       super();
//       this.state = {
//           showingCounter: false
//       }
//   };


// render() {
//   const handleShowCounterOnClick = () => {
//     this.setState({
//       showingCounter: !this.state.showingCounter
//     })
      
//   };
const App = () => {
  const [showingCounter, setShowingCounter] = useState(false);

  const handleShowCounterOnClick = () => {
    setShowingCounter(!showingCounter);
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <h2>
    //       The count is: {count}
    //     </h2>
    //     <button onClick = {handleIncrementOnClick}>
    //       Increment count
    //     </button>
    //   </header>
    // </div>
    <div className="App">
      <header className="App-header">
        <button onClick={handleShowCounterOnClick}>
            Show / Hide counter
        </button>
        {/* {this.state.showingCounter && <Counter />} */}
        {showingCounter && <Counter />}
      </header>
    </div>
  )
};

export default App;
    
    

   

