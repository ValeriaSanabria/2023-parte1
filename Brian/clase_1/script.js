// siempre debo traer un elemento con query para poder hacerle algo como añadir class
// o para ver el padre o el hijo



// selecciono el div1 con la clase
let div1 = document.querySelector(".contenedor1");

// selecciono el div2 con el id
let div2 = document.getElementById("contenedor2");

// al div2 le creo un estilo segun una clase creada en el archivo StyleSheet.css
div2.classList.add("fondoRojo");

// creo un arreglo de clases
let multiples = document.getElementsByClassName("multiplesContenedores");

// selecciono un elemento de ese arreglo y le agrego un estilo
multiples[1].classList.add("fondoVerde");

console.log(multiples);

let multiplesDivs = document.querySelectorAll("div");

console.log(multiplesDivs[0]);
console.log(multiplesDivs[3]);

// me muestra el primer hijo del div seleccionado
let hijosdiv2 = div2.children;
console.log(hijosdiv2);

let btn = document.getElementById("enviar");

// APLICANDO LA FORMA NORMAL DE LA FUNCION//ACCESIBLE PARA CUALQUIER BOTON***********
// btn.addEventListener("click", verificarClick);

// function verificarClick() {
//     console.log("Hola tierra del fuego");
// };

// APLICANDO FUNCION ANONIMA//UNICAMENTE ACCESIBLE PARA ESTE BOTON***************
btn.addEventListener("click", function(e) {
    console.log("Hola tierra del fuego");
});

// PARA USAR FUNCION FLECHA TENGO QUE DECLARARLA ANTES DE LLAMAR AL BOTON*******************

let verificarClick = () => {
    console.log("Hola a todos");
};

let boton = document.getElementById("insertar");
boton.addEventListener("click", verificarClick);

// LLAMADO DE FUNCION POR PARAMETRO********
function saludar(parametro){
    console.log("Hola ",parametro);
}

let nombre = "Valeria";

saludar(nombre);