const botonEnviar = document.getElementById('enviar')

botonEnviar.addEventListener('click', ()=>{
const input = document.getElementById('nombre').value;
const div = document.getElementById('salida');

    if (!/^[a-zA-Z]+$/.test(input)){
        div.innerHTML = 'solo se permiten letras'
    }else{
        div.innerHTML = input;
    }
    div.innerHTML = input;
});      
