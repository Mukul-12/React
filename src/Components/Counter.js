import {React, Component} from 'react'
class Counter extends Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    change(){
        // this.setState({
        //     count : this.state.count + 1
        // }, () => {
        //     console.log(this.state.count)
        // })
        // console.log(this.state.count)

        this.setState(
            prevState => ({                                // (prevState, props)
                count: prevState.count + 1
            })
        )
        console.log(this.state.count);
    }
    change5(){
        this.change();
        this.change();
        this.change();
        this.change();
        this.change();
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>{this.change5()}}>Increase</button>
            </div>
        )
    }
}
   
export default Counter