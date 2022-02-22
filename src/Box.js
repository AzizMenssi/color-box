import React, { Component } from "react";
import "./Box.css";
export default class Box extends Component {
  static defaultProps = {
    colors: ["purple", "pink", "magenta"],
  };
  
  constructor(props){
      super(props);
      this.state={
        choice:"green"
    }
    this.handleClick=this.handleClick.bind(this)

  }
  handleClick(){
    let ind;
    do {
      ind = Math.floor(Math.random() * this.props.colors.length);
    } while (this.state.choice === this.props.colors[ind]);
    this.setState({choice:this.props.colors[ind]})
  };
  render() {
    return (
      <div
        className="box"
        onClick={this.handleClick}
        style={{ backgroundColor: this.state.choice }}
      />
    );
  }
}
