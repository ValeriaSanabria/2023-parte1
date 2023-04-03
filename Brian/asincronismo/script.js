let btnConsulta = document.getElementById("consultaApi");

btnConsulta.addEventListener("click", verInfo);

let titulo = document.getElementById("frase");

async function verInfo(){

    try{
        let respuesta = await fetch("https://api.chucknorris.io/jokes/random"); //llamo a una api externa pero tambien puedo llamar al archivo json creado por mi 
        if(respuesta.ok){ //.ok es un metodo de validacion de respuesta correcta 
            let aux = await respuesta.json();
            console.log(aux);
            titulo.innerHTML = aux.value; //hago que el value de la api se pege en el elemento con id frase que esta declarado como titulo
        }
    }catch{
            console.log("Error al obtener los datos");
    }
}