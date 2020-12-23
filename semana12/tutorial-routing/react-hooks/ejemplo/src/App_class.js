import React,{ Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
      super();
        this.state = {
          count: 0
        }
      };
    
    render(){
        const handleIncrementOnClick = () => {
        this.setState({
            count: this.state.count + 1
            })
        };
    
    
        return (
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>
                    The coutn is: {this.state.count}
                </h2>
                <button onClick = {handleIncrementOnClick}>
                    Increment count
                </button>
                </header>
            </div>
        )
    };
}

export default App;