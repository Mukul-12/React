import React, { Component } from 'react'

class Form_Handling extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name :'',
        desc : '',
        sub : 'Angular'
      }
    }

    changeName = event => {
        this.setState({
            name : event.target.value
        })
    }

    changeDesc = event =>{
        this.setState({
            desc : event.target.value
        })
    }
    change = event =>{
        this.setState({
            sub : event.target.value
        })
    }
    submit = event =>{
        alert(`${this.state.name} ${this.state.desc}`)
        event.preventDefault()
    }
  render() {
    return (
        <form onSubmit={this.submit}>
            <div>
                <label>Name</label>
                <input type='text' value={this.state.name} onChange={this.changeName}/>
            </div>
            <div>
                <label>Description</label>
                <textarea value={this.state.desc} onChange={this.changeDesc}></textarea>
            </div>
            <div>
                <label>Choice</label>
                <select value={this.state.sub} onChange={this.change}>
                    <option>React</option>
                    <option>Angular</option>
                </select>
            </div>
            <button>submit</button>
        </form>
      
    )
  }
}

export default Form_Handling

