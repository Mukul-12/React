import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      console.log('Child Constructor')
      console.log('bvgh')
      console.log(vv)
    }

    static getDerivedStateFromProps(props,state){
        console.log('Child getDerivedStateFromProps')
        return null;
    }
    componentDidMount(){
        console.log('Child ComponentDidMount')
    }
  render() {
    console.log('Child render')
    return (
        
      <div>
        
        Child
      </div>
    )
  }
}
