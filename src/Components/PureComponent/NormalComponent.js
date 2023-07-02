import React, { Component } from 'react'

class NormalComponent extends Component {
  render() {
    console.log('Normal Component')
    return (
      <div>NormalComponent {this.props.name}</div>
    )
  }
}

export default NormalComponent