import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        first : 'abc'
      }
    }
    static getDerivedStateFromProps(){
        console.log('Child getDerivedStateFromProps')
        return null
    }
    shouldComponentUpdate(){
        console.log('Child shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('Child getnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('Child componentDidUpdate')
    }
    
  render() {
    console.log('Child render')
    return (
      <>
      
      </>
    )
  }
}
