import {React, Component} from 'react'

// const Greet = (props) =>{
//     return(
//     <div>
//     <h1>Hello {props.name}</h1>
//     {props.children}
//     </div>
//     )
//    }

class Greet extends Component{
    render(){
        return(
            <div>
                <h1>Hi {this.props.name}</h1>
                {this.props.children}
            </div>
        )
    }
}
   
export default Greet 