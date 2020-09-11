import React from 'react'
import Part from '../components/Part'

const Content = ({ name1, name2, name3, ex1, ex2, ex3 }) => {
    return (
        <>
            <Part name1={name1} exercise1={ex1}/>
            <Part name2={name2} ex2={ex2}/>
            <Part name3={name3} ex3={ex3}/> 
        </>
    )
}

export default Content