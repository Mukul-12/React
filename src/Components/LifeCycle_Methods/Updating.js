import React, { Component } from 'react'
import Child from './Updating_Child'

export default class Updating extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        first : 'abc'
      }
    }
    static getDerivedStateFromProps(){
        console.log('Updating getDerivedStateFromProps')
        return null
    }
    shouldComponentUpdate(){
        console.log('Updating shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('Updating getnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('Updating componentDidUpdate')
    }
    change = () =>{
        this.setState({
            first : 'def'
        })
    }
  render() {
    console.log('Updating render')
    return (
      <>
      <div>Updating</div>
      <Child />
      <button onClick={this.change}>Click</button>
      </>
    )
  }
}
