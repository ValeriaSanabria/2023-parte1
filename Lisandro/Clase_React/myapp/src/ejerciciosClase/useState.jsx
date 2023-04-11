import React , {useState, useEffect} from "react";
import { useEffect } from "react";

const Ejercicio = () => {

    // desestructuacion de react de arrays
    // con setPeso modificamos a peso mediante setPeso(peso)
    const[peso, setPeso] = useState(0);


    useEffect(
        ()=>{
            fetchUsers()
// el parametro [] siempre tiene que estar vacio para que no se vuelva a repetir el uso de la api
        },[]     
    )

    return(
        <h2>Hola mundo</h2>
    )




}