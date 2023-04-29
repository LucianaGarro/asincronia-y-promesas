//setTimeOut
//Recibe dos parámetros: una función o un callback con alguna tarea que tiene que
//ejecutar y como segundo parámetro el tiempo de espera para finalizar la tarea.

// setTimeout(()=>{
//     console.log("Tarea A");
// }, 5000)

// setTimeout(()=>{
//     console.log("Tarea B");
// }, 1000)

//Utilizar setTimeOut para modificar el body luego de tres segundos

// setTimeout(()=>{
//     document.body.style.backgroundColor= "blueviolet";
// }, 4000)

//Utilizar con array

// for (let letra of "Vamos Asincrnía"){
//     setTimeout(()=>{
//         console.log(letra)
    
// }, 6000)}

//setInterval: la unidad de tiempo en un intervalo para la repetición de la función asociada

// setInterval (()=>{
//     console.log("Tic")
// }, 4000)

// let contador = 0
// const interval = setInterval(()=>{
//     console.log("vaciones");
//     contador++;
//     if(contador == 5){
//         clearInterval(interval)
//     }
// }, 3000)

//cambiar el color del body cada 3seg. Para esto vamos a utilizar array de colores.

// const colores = ["red", "green", "blueviolet", "black", "orange", "purple","white"];

// let i = 0;
// const interval = setInterval(()=>{
//     document.body.style.backgroundColor = colores[i];
//     i++;
//     if(i == colores.length){
//     clearInterval(interval)

//     }
// }, 1000)

//Promesas:
//formar de trabajar con servidores.
//sintaxis

// const falsasPromesas = ()=>{
//     return new Promise ((resolve, reject)=>)
//     //resolve: se ejecuta cuando la promesa se cumple
//     //reject: se ejecuta cuando la promesa no se cumple
// })
// }

//promise: pending: esta pendiente de conexión
//tres estados: pending, fulfilled (se logró conectar), reject (se rechazó la conexión)

class Usuario {
    constructor (user, password){
        this.user = user;
        this.password = password;
    }
}

const usuario1 = new Usuario ("Usuario1", "123");
const usuario2 = new Usuario ("Usuario2", "123");
const admin = new Usuario ("Admin", "123");

const usuarios = [usuario1, usuario2, admin];

//creación de la promesa que va a tratar de conectarse a una base de datos ficticia.

const solicitarUsuario = (estado) =>{
    return new Promise ((resuelto, rechazado)=>{
        if (estado == true){
            resuelto(usuarios)
        } else{
            rechazado ("Reintente nuevamento en unos minutos");
        }
    })
}

console.log(solicitarUsuario(true));
solicitarUsuario(false)
    .then((usuarios)=>{
        console.table(usuarios);
    }) .catch ((error)=>{
        console.log(error);
    }) .finally(()=>{
        console.log("Fin del proceso")
    })

//then y catch

//then: se ejecuta cuando una promesa se cumple
//catch: se ejecuta cuando la promesa no se cumple





