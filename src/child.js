import React from "react";

import "./styles.css";

export default class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
  return (
    <div>
      <h1>Hello I am {this.state.value}</h1>
      <button onClick={()=>{this.setState({value:'Ankit'})}}>Click Me</button>
    </div>
  );
  }
}