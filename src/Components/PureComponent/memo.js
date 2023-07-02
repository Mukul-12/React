import React from 'react'

function memo({name}) {
    console.log("Memo")
  return (
    
    <div>memo {name}</div>
  )
}

export default React.memo(memo)