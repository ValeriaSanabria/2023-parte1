import {useEffect, useState} from 'react';



const Hora = ()  => {
    const [hora, setHora] = useState(new Date().toLocaleTimeString());

useEffect (()=>{
    let tiempo = setInterval(()=>{
        setHora(new Date().toLocaleTimeString())
    },1000)
})

    return(
        <>
        <h1>Hora: {hora}</h1>
        </>
    )
}

export default Hora;