import React from 'react';
import './App.css';
import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  

  return (
    <div>
      <Header course={course}/>
      <Content 
        name1={part1.name}
        name2={part2.name}
        name3={part3.name}
        ex1={part1.exercises}
        ex2={part2.exercises}
        ex3={part3.exercises}
      />
      <Total 
        ex1={part1.exercises}
        ex2={part2.exercises}
        ex3={part3.exercises}
      />
    </div>
  )
}

export default App;
