import React from 'react'
import './mystyle.css'
import styles from './mystyle.module.css'

function style({primary}) {
    let result = primary ? 'primary' : ''
    let heading = {
        color:'green'
    }
  return (
    <div>
    <h1 className={`${result} font-xl`}>Style</h1>
    <h5 className='primary font-xl'>Mukul</h5>

    {/* Inline Styling  */}
    <h2 style={heading}>Shyam</h2>

    {/* CSS Module*/}
    <h2 className={styles.success}>Harsh</h2>

    </div>
  )

  

}

export default style