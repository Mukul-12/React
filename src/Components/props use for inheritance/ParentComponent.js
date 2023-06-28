import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  constructor(props){ 
    super(props)
    this.state = {
      message: 'Hello Everyone'
    }
    this.greet = this.greet.bind(this)
  }
  greet(child1){
    alert(`${this.state.message} from ${child1}`)
  }
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greet}/>
      </div>
    )
  }
}

export default ParentComponent