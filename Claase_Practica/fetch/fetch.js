// consumo de API

function consumirAPI(){
    const respuesta = fetch("https://rickandmortyapi.com/api/character");//por defecto fetch() hace una peticion GET
    
    // console.log(respuesta);
    respuesta
    .then((res) => res.json() ) // convertimos la respuesta a Json
    .then((data) => console.log(data) ) // Mostramos los datos en consola 
    .catch((error)=> console.log(error) ); //capturamos errores 
};

consumirAPI(); //llamamos a la funcion  para consumir la API de Rick and Morty