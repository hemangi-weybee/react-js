import React from 'react'
// import Person from './Person'

function Lists() {
    // const persons = [
    //     { id: 1, name:'Damon', skill: 'React' },
    //     { id: 2, name:'Elena', skill: 'React' },
    //     { id: 3, name:'Stefan', skill: 'Angular' },
    //     { id: 4, name:'Caroline', skill: 'Angular' },
    //     { id: 5, name:'Bonnie', skill: 'Node' },
    // ]

    const names = ['Damon', 'Elena', 'Stefan', 'Caroline', 'Bonnie']
    const nameList = names.map((ele, i) => <h5 key={i}> {i} : {ele}</h5>)
    // const personList = persons.map(p => <Person key={p.id} person={p}/>)

    return <div>{nameList}</div>
}

export default Lists