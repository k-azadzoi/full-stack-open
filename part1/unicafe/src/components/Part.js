import React from 'react'

const Part = ({ name1, name2, name3, ex1, ex2, ex3 }) => {
    return (
        <>
            <p>
                {name1} {ex1}
            </p>
            <p>
                {name2} {ex2}
            </p>
            <p>
                {name3} {ex3}
            </p>   
        </>
    )
}

export default Part