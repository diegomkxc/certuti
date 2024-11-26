let contadorElemento = document.getElementById("contador");
let contador = 0;

let botonAumentar = document.getElementById("botonAumentar");

botonAumentar.addEventListener("click", function() {
    contador++;
    contadorElemento.textContent = contador;
});