import React from 'react'
import Object from './Object';

function Object_rendering() {
    let persons = [
         {  id: 1,
            name : 'Mukul',
            age : 22},
         {
            id: 2,
            name : 'Shyam',
            age : 20
         }
    ]
    const personlist = persons.map(person => <Object key={person.id} person={person} />);
  return <div> {personlist}</div>
}

export default Object_rendering