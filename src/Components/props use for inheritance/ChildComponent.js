import React, { Component } from 'react'

class ChildComponent extends Component {
  render() {
    return (
      <div>
        {/* <button onClick={this.props.greetHandler}>Greet</button> */}
        <button onClick={() =>this.props.greetHandler('child')}>Greet</button>
      </div>
    )
  }
}

export default ChildComponent