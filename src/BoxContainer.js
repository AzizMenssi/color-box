import React, { Component } from 'react'
import Box from './Box'
import './BoxContainer.css'
export default class BoxContainer  extends Component {
    static defaultProps={
        numBoxes:15
    }
    constructor(props){
        super(props)
        this.state={
            color:"pink"
        }
    }
  render() {
    const boxes=Array.from({length: this.props.numBoxes}).map(()=>(<Box />));
    return <div className='boxC'>{boxes}</div>
    
  }
}
