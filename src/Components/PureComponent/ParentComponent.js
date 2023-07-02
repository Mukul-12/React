import React, { Component} from 'react'
import NormalComponent from './NormalComponent'
import Pure from './Pure'

class ParentComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name : 'Mukul'
    }
  }  
  componentDidMount(){
    setInterval(() =>{
        this.setState({
            name: 'Mukul'
        })
    }, 2000)
  }
  render() {
    console.log('************Parent****************')
    return (
        <div>
      ParentComponent
      <NormalComponent name={this.state.name} />
      <Pure name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComponent

// In console window first show parent, normal, then pure component after that only parent, normal component re
// - render to stop unnecessary rendering use pure component in parentComponent.js