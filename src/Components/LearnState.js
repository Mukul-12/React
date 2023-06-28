import {React, Component} from 'react'
class LearnState extends Component{
    constructor(){
        super()
        this.state = {
            message : 'Welcome Everyone'
        }
    }
    change(){
        this.setState({
            message : "My Name is Mukul"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => {this.change()}}>Click</button>
                {/* <button onClick={this.change.bind(this)}>Click</button>     Event Handler Binding*/} 
            </div>
        )
    }
}
   
export default LearnState 