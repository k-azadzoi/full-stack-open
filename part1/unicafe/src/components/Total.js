import React from 'react'

const Total = ({ parts }) => {
    const ex1 = parts[0].exercises
    const ex2 = parts[1].exercises
    const ex3 = parts[2].exercises
    
    return (
        <>
        <p> Number of exercises { ex1 + ex2 + ex3 } </p>
        </>
    )
}

export default Total