import React, { PureComponent } from 'react'

class Pure extends PureComponent {
  render() {
    console.log('Pure Component')
    return (
      <div>PureComponent {this.props.name}</div>
    )
  }
}

export default Pure