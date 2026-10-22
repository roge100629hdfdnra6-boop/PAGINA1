alert("ESTE NAVEGADOR WEB TIENE VIRUS")

document.addEventListener("click", function(event) {
    let emoji = document.createElement("span");
    emoji.textContent = "😎";
    emoji.style.position = "absolute";
    emoji.style.left = event.pageX + "px";
    emoji.style.top = event.pageY + "px";
    emoji.style.fontSize = "30px";
    emoji.style.pointerEvents = "none";
    document.body.appendChild(emoji);

    setTimeout(function() {
        emoji.remove();
    }, 1000);
});


let clics = 0;
let contador = document.createElement("p");
contador.textContent = "Clics: 0";
document.body.prepend(contador);

document.addEventListener("click", function() {
    clics++;
    contador.textContent = "Clics: " + clics;
});


let reloj = document.createElement("p");
document.body.prepend(reloj);

function actualizarHora() {
    reloj.textContent = "Hora actual: " +
        new Date().toLocaleTimeString();
}

actualizarHora();
setInterval(actualizarHora, 1000);


let botonGracias = document.createElement("button");
botonGracias.textContent = "Ver mensaje de agradecimiento";
document.body.appendChild(botonGracias);

botonGracias.addEventListener("click", function() {
    alert("¡Gracias por visitar mi página personal! 😊");
});


let botonFondo = document.createElement("button");
botonFondo.textContent = "Cambiar fondo";
document.body.appendChild(botonFondo);

botonFondo.addEventListener("click", function() {
    let colores = [
        "lightblue",
        "lightgreen",
        "lightyellow",
        "pink",
        "lavender"
    ];

    let color = colores[
        Math.floor(Math.random() * colores.length)
    ];

    document.body.style.backgroundColor = color;
});
