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





const cambiartema = document.getElementById ('cambiartema2');
cambiartema2.onclick = ()=>{
    if(document.body.classList.contains("#f0f0f0")){
        document.body.classList.remove("#f0f0f0");

        document.body.classList.add("#1d1d1d");
    }else{

    }

}