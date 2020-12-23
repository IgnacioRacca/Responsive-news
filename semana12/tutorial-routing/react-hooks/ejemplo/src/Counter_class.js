import React, { Component } from 'react';


class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
    };

    componentDidMount() {
        console.log('i have mounted!');
    }

    componentDidUpdate() {
        console.log('i have update!');
    }

    componentWillUnmount() {
        console.log('i have unmounted!');
    }


  render() {
    const handleIncrementOnClick = () => {
        this.setState({
            count: this.state.count +1
        })
    };
    
    return (
      <div>      
          <h2>q
              the coutn is: {this.state.count}
          </h2>
          <button onClick = {handleIncrementOnClick}>
             Increment count
           </button>
      </div>
    )
  }
}

export default Counter;

