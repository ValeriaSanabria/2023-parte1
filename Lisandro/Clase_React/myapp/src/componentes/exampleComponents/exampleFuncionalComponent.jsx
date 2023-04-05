import React from "react";

function ExampleFunctionComponent(props) {
    return (
        <div>
            <h1>Hola, soy un componente funcional</h1>
            <h3>Mi nombre es {props.name} y tengo {props.edad} años</h3>
        </div>
    )
}
export default ExampleFunctionComponent;

