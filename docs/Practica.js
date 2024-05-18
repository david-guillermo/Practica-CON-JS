function calcularEdad() {
    const fechaNacimiento = new Date(document.getElementById("fechaNacimiento").value);
    const fechaActual = new Date();

    const anios = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    const meses = fechaActual.getMonth() - fechaNacimiento.getMonth();
    const dias = fechaActual.getDate() - fechaNacimiento.getDate();

    if (dias < 0) {
        meses--;
    } else if (meses < 0) {
        anios--;
    }

    let mensaje = "Su edad es de ";

    if (anios > 0) {
        mensaje += anios + " años";
    }

    if (meses > 0) {
        if (anios > 0) {
            mensaje += " y ";
        }
        mensaje += meses + " meses";
    }

    if (dias > 0) {
        if (anios > 0 || meses > 0) {
            mensaje += " y ";
        }
        mensaje += dias + " días";
    }

    document.getElementById("resultado").innerHTML = mensaje;
}









