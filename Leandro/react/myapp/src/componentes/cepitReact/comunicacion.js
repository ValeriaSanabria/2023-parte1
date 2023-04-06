import { Component } from "react";

function ComunicacionHijo(props){
    return(
        <>
        <h2>{props.mensaje}</h2>
        <h2>{props.otroMensaje}</h2>
        <button onClick={(props.modificar)}></button>
        {props.children}
        </>
    )
}

class Comunicacion extends Component {

    constructor(){
        super();
        this.state = {
            numero : 0
        }
    }




}