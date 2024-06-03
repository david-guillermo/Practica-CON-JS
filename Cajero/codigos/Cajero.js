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
