import React from 'react'

const Part = ({ name, name2, name3, ex, ex2, ex3 }) => {
    return (
        <>
            <p>
                {name} {ex}
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