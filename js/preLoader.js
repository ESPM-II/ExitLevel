//Funcion encargada de la redirección automática
function redireccion() {
    window.location = "file:///home/jjaolivos/proyectos-git/ExitLevel/html/es/inicio.html";
}

// Llamamos a la ufncion que redirecciona despues de 1 minuto.
var temp = setTimeout(redireccion, 5000);

// Cuando se pulse en cualquier parte del documento.
document.addEventListener("click", function() {
    //borrar el temporizador que redireccionaba
    clearTimeout(temp);
    //volver a iniciarlo
    tempo = setTimeout(redireccion, 5000);
})