const usuarios = [
    {
        id: 1,
        nombre: "Guillermo",
        apellido: "Gonzalez",
        sexo: "Masculino",
        edad: 25,
        foto: "https://covalto.com/static/78498ccda70933a5f1e3edc3e40d3cbe/34aca/Hero_Mobile_Cuenta_Personas_V1_1_8046e424ea.webp"
    },{
        id: 2,
        nombre: "Victor",
        apellido: "Hernandez",
        sexo: "Masculino",
        edad: 17,
        foto: "https://covalto-production-website.s3.amazonaws.com/Hero_Desktop_Acerca_De_Covalto_V1_79ce51b800.webp"
    },{
        id: 3,
        nombre: "Edward",
        apellido: "Ventura",
        sexo: "Masculino",
        edad: 24,
        foto: "https://covalto-production-website.s3.amazonaws.com/Hero_Mobile_Invierte_Ahora_V4_3e5c745c7d.webp"
    },{
        id: 4,
        nombre: "Luis",
        apellido: "Tarifa",
        sexo: "Masculino",
        edad: 20,
        foto: "https://covalto-production-website.s3.amazonaws.com/Hero_Mobile_Pagare_Lealtad_V2_4c1bb0820b.jpg"
    },{
        id: 5,
        nombre: "Ana",
        apellido: "Lopez",
        sexo: "Femenino",
        edad: 22,
        foto: "https://www.mundopsicologos.com/site/article/62173/52366/13-habitos-que-te-ayudaran-a-ser-una-persona-mas-feliz-0_ai1.jpg"
    },{
        id: 6,
        nombre: "Luisa",
        apellido: "Gomez",
        sexo: "Femenino",
        edad: 18,
        foto: "https://secrecyjewels.es/blog/wp-content/uploads/2022/10/esencia-de-una-persona.jpg"
    }
];


async function obtenerUsuarios(){
    const misDatos = [];
    return new Promise((resolve, reject)=>{
        if(usuarios.length < 11){
            // Se cumple la promesa
            usuarios.forEach(usuario => {
                misDatos.push(
                    {
                        nombre: usuario.nombre,
                        foto: usuario.foto
                    }
                );
            });
            resolve(misDatos);
        }else{
            // No se cumple la promesa / Se rechaza
            reject("No se cumple la promesa porque hay mas de 10 usuarios");
        };
    });
};

