import React from 'react'

const Total = (props) => {

    const sumaTotal = props.total.reduce((prev, next) => prev + next.exercises, 0);
    return (
    <div>
        <p>Number of exercises: {sumaTotal}</p>
    </div>
    )
}

export default Total