import React, { Component } from 'react'

class Conditional_rendering extends Component {
    constructor(props){
        super(props)
        this.state = {
            loggedIn : 10
        }
    }
    render() {
        // if(this.state.loggedIn){
        //     return (
        //         <div>
        //             <h1> Hello Mukul</h1>
        //         </div>
        //     )
        // }
        // else{
        //     return (
        //         <div>
        //             <h1>Hello Guest</h1>
        //         </div>
        //     )
        // }

        //   ============= Element Variable ============================
        // let message
        // if(this.state.loggedIn){
        //     message = <h1>Hello Mukul</h1>
        // }
        // else{
        //     message = <h1>Hello Guest</h1>
        // }
        // return message;
        

        // ==============Ternary Operator ==============================
        // Benefit is it can be used in jsx as well 
        return(
            this.state.loggedIn ? (
                <h1>Hello Mukul</h1> ):
                ( <h1>Hello Guest</h1> ) 
        )

        // =============== Short Circuit Operator =======================
        //return this.state.loggedIn && <h1>Hello Mukul</h1>
     }
}

export default Conditional_rendering