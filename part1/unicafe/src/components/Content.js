import React from 'react'
import Part from '../components/Part'

const Content = ({ parts }) => {
    return (
        <>
            <Part name={parts[0].name} ex={parts[0].exercises}/>
            <Part name2={parts[1].name} ex2={parts[1].exercises}/>
            <Part name3={parts[2].name} ex3={parts[2].exercises}/> 
        </>
    )
}

export default Content