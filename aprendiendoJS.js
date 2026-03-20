function mostrar(){

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let carrera = document.getElementById("carrera").value;

    document.getElementById("mensaje").innerText =
    "Registro exitoso, " + nombre + " " + apellido +" de la carrera" + " " + carrera;

    document.getElementById("cuadro").style.display = "block";
    
}

function cerrar(){
    document.getElementById("cuadro").style.display = "none";
    document.getElementById("formulario").reset();
    
}