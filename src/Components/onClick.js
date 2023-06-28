import React from "react";

const Click = () => {
    return(
    <div>
        <button onClick={clicked}>click me</button>
    </div>
)}
function clicked(){
    console.log("abc");
}

export default Click;