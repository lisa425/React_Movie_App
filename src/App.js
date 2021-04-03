import React from "react";
import PropTypes from "prop-types";

class App extends React.Component{

  state = {
    count: 0
  };

  add = () => {
    this.setState(current=>({count:current.count+1}));
  };
  sub = () => {
    this.setState(current=>({count:this.state.count-1}));
  };
  componentDidMount(){
    console.log("component rendered");
  }
  componentDidUpdate(){
    console.log("I just updated");
  }
  componentWillUnmount(){
    console.log("Goodbye!");
  }
  render(){
    console.log("im rendering!");
    return <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button> 
      <button onClick={this.sub}>Sub</button>
    </div>;
  }
}

export default App;
