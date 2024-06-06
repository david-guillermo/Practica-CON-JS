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



// CAMBIARTEMA
const cambiartema = document.getElementById('cambiartema');
cambiartema.onclick = ()=>(
    if (document.body.classList.contains("#f0f0f0")){
        document.body.classList.remove("#f0f0f0");

        document.body.classList.add("#ffffff00");
        document.body.classList.add("#ffffff00");
    }else{

    }
)