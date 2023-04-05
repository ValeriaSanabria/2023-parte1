import React, {useState} from "react";

const Contador = () => {
    const [count, setCount] = useState(200);

    function incrementar(){
        setCount(count + 1);
    }

    function decrementar(){
        setCount(count - 1);
    }

    return (
        <div>
            <h2>Contador: {count}</h2> 
            <button onClick={incrementar}>Incrementar</button> {/*dentro del onclick coloco la funcion q ejecuta*/}
            <button onClick={decrementar}>Decrementar</button>
        </div>
    )
}

export default Contador;




