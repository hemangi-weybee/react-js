import React, { useState, useCallback } from 'react'
import Button from './callbackComponents/Button'
import Count from './callbackComponents/Count'
import Title from './callbackComponents/Title'

function UseCallBackParent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() => setAge(age + 1), [age])
    const incrementSalary = useCallback(() => setSalary(salary + 1000), [salary])

    return (
        <div>
            <Title />
            <Count text={"age"} count={age} />
            <Button handleClick={incrementAge}> increment Age </Button>
            <Count text={"salary"} count={salary} />
            <Button handleClick={incrementSalary}> increment Salary</Button>
        </div>
    )
}

export default UseCallBackParent