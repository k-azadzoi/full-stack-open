import React from 'react'
import Part from '../components/Part'

const Content = ({ part1, part2, part3, exercises1, exercises2, exercises3 }) => {
    return (
        <>
            <Part part1={part1} exercise1={exercises1}/>
            <Part part2={part2} exercises2={exercises2}/>
            <Part part3={part3} exercises3={exercises3}/> 
        </>
    )
}

export default Content