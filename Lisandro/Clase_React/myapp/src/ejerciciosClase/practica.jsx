import React, {useState, useEffect} from "react";

const Contador = () => {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');

    useEffect(() => {
        count = 0 ? 'Haz click en el boton para comenzar' : `El contador esta en ${count}`
}, [count]
)

// quiero que se actualice cada vez que se ejecuta el contador
function incrementar(){
    setCount(count + 1);
}

return (
    <div>
        <h2>Contador</h2>
        <p>You clicked {count} times</p>
      <button onClick={() => incrementar}>
        Click me
      </button>
    </div>
)

}

export default Contador