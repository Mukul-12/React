import React from 'react'

function List_Rendering() {
    let names = ["Mukul", "Shyam"]
    // let namelist = names.map(name => <h5> {name}</h5>)
  return (
    <div>
        {/* <h1>{names[0]}</h1>
        <h1>{names[1]}</h1> */}

        {
            names.map(name => <h5>{name}</h5>)
        }
        {/* namelist */}
    </div>

  )
}

export default List_Rendering