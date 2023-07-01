import React, { Component } from 'react'
import Child from './Mounting_Child'

export default class Mounting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      console.log('Mounting Constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('Mounting getDerivedStateFromProps')
        return null;
    }
    componentDidMount(){
        console.log('Mounting ComponentDidMount')
    }
  render() {
    console.log('Mounting render')
    return (
        
      <div>
        
        Mounting
        <Child />
      </div>
    )
  }
}
