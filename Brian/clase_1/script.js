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
