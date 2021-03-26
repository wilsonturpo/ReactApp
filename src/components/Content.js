import React from 'react'
import Part from './Part'

const Content = (props) => {

    //Recorremos el array de objetos de partes y enviamos los props al componente Part
    //Luego renderizamos el objeto que contiene todas las partes
    const listItems = props.parts.map((element, index) =>
        <Part key={index} parte={element.name} numEjercicios={element.exercises} />
    );
    return (
    <div>        
        {listItems}
    </div>
    )
}

export default Content