function pressKey(num) {
    const message = document.getElementById('message');
    message.innerText += num;
}

function clearScreen() {
    const message = document.getElementById('message');
    message.innerText = '';
}

function cancel() {
    const message = document.getElementById('message');
    message.innerText = 'Operación cancelada';
}

function enter() {
    const message = document.getElementById('message');
    message.innerText = 'Procesando...';
}






// cambio de color (dark-light)

document.addEventListener("DOMContentLoaded", function() {
    const themeToggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    // Cargar el tema guardado en localStorage si existe
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
    }

    themeToggleButton.addEventListener("click", function() {
        // Alternar entre las clases de tema
        if (body.classList.contains("light-theme")) {
            body.classList.replace("light-theme", "dark-theme");
            localStorage.setItem("theme", "dark-theme");
        } else {
            body.classList.replace("dark-theme", "light-theme");
            localStorage.setItem("theme", "light-theme");
        }
    });
});