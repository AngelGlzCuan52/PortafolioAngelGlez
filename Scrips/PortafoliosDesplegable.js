// script.js
document.addEventListener("DOMContentLoaded", function () {
    const seleccion = document.getElementById("seleccion");
    const proyectos = document.querySelectorAll(".proyecto");

    seleccion.addEventListener("change", function () {
        const proyectoSeleccionado = seleccion.value;

        proyectos.forEach(proyecto => {
            proyecto.style.display = "none";
        });

        const proyectoMostrado = document.getElementById(proyectoSeleccionado);
        proyectoMostrado.style.display = "block"; 
    });
});
