import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      console.log('Child Constructor')
      console.log('bvgh')
<<<<<<< HEAD
      console.log(vv)
=======
>>>>>>> 7e0bd721c44bce0c6e3880c3c06e17fa8a73adf8
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
