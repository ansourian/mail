// //EJERCICIO CLASE 1 - IF, ELSE

// let entrada = prompt("Ingrese un número");
// if (entrada <= 5){
//     alert("el número que seleccionaste es menor a 5");
// } else{
//     alert("el número que seleccionaste es mayor a 5");
// }
// console.log("El número seleccionado fue: " + entrada);

// // EJERCICIO CLASE 2 - ELSE IF , || && !=

// let numero = prompt("Ingrese un numero");
// if (numero == 2) {
//     alert("El número que elegiste es 2")
// } else if ((numero == 3) || (numero == 4)) {
//     alert("El número que elegiste esta entre el 3 y el 4")
// } else if (numero == 5) {
//     alert("El número que elegiste es 5")
// } else if (numero > 5) {
//     alert("El número que elegiste es mayor que 5")
// }
// else {
//     alert("El número que elegiste es menor que 2")
// }

// EJERCICIOS CLASE 3 - FOR, WHILE, DO WHILE

// EJ 1 (FOR):
// let entrada = parseInt(prompt("Indique con un número cuantas veces quiere ser saludado"));
// for (let i = 1; i <= entrada; i++) {
//     console.log("Hola amigo");
// };

// EJ 2 (WHILE):
// let entrada = prompt("Bienvenido a la máquina de molestar, ingrese su nombre:")
// while (entrada !== "salir" && entrada !== "SALIR") {
//     alert("¡Hola " + entrada + "!");
//     entrada = prompt("Ingrese su nombre o escriba 'salir' para terminar:");
// }

//EJ 3 (DO WHILE):
// let entrada = (prompt("Ingrese su nombre:"));
// let entradaNumerica = parseInt(prompt("Ingrese un número:"));
// do {
//     alert("Hola " + entrada);
// } while (entradaNumerica != 5);

//EJ 4 (SWITCH):
// let color = prompt("Ingrese un color");
// switch (color) {
//   case 'rojo':
//   case 'rosa':
//     alert("Color cálido");
//     break;
//   case 'azul':
//   case 'verde':
//     alert("Color frío");
//     break;
//   default:
//     alert("Color no reconocido");
// }

// EJERCICIOS CLASE 4 - FUNCTIONS

//EJ 1 (FUNCTION)
// function suma (a, b) {
//     result = (a + b);
// };

// suma (1, 9);
// alert (result);

//EJ 2 (FUNCTION CON SWITCH)

// function calculadora (primerNumero, segundoNumero, cuenta) {
//     switch (cuenta){
//         case "+":
//             return primerNumero + segundoNumero;
//             break;
//         case "-":
//             return primerNumero - segundoNumero;
//             break;
//         case "*":
//             return primerNumero * segundoNumero;
//             break;
//         case "/":
//             return primerNumero / segundoNumero;
//             break;
//     }
// }
// alert(calculadora (5, 3, "*"));

// EJERCICIOS CLASE 5 - OBJECTS

// const persona = {
//     nombre: "Jorgito",
//     apellido: "Gutierrez",
//     direccion: "Jorgelandina 1234"
// };

// EJERCICIOS CLASE 6 - ARRAYS Y ARRAYS DE OBJETOS

// const personas = [
//     {
//         id: 1,
//         nombre: "José",
//         apellido: "Gutierrez"
//     },
//     {
//         id: 2,
//         nombre: "Matías",
//         apellido: "Fernandez"
//     },
//     {
//         id: 3,
//         nombre: "Micaela",
//         apellido: "Sanchez"
//     },
// ]

// personas.push({id: 4, nombre: "Fernando", apelido: "Palomo"});
// for (const nombre of personas) {
//     console.log(nombre.id);
//     console.log(nombre.nombre);
// }

//EJERCICIOS CLASE 7 - FUNCIONES DE ORDEN SUPERIOR (FIND, FOR EACH, FILTER, MAP, ETC.

// const zapatos =  [
//     {
//     modelo: "Oxford",
//     numero: "1122"
//     },
//     {
//     modelo: "Oxford",
//     numero: "1108"
//     },
//     {
//     modelo:"Derby",
//     numero: "1116"
//     }
// ]

// //FIND SIRVE PARA BUSCAR EL PRIMER ELEMENTO QUE CUMPLE CON EL REQUISITO

// const modelosOxford = zapatos.find((zapato) => zapato.modelo === "Oxford");
// console.log(modelosOxford);

// //FILTER SIRVE PARA BUSCAR TODOS LOS ELEMENTOS QUE CUMPLEN CON EL REQUISITO

// const modelosOxford = zapatos.find((zapato) => zapato.modelo === "Oxford");
// console.log(modelosOxford);

// EJERCICIOS CLASE 8 - FUNCIONES DE ORDEN SUPERIOR II (MATH, DATE)

// EJ 1 (DATE):
// setInterval(() => {
//     const horaActual = new Date();
//     const horaFormateada = horaActual.toLocaleTimeString();
//     document.getElementById('horaActual').textContent = `La hora actual es: ${horaFormateada}`;
// }, 1000);

//EJERCICIO CLASE 9 - DOM

// let div     = document.getElementById("app");
// let parrafo = document.getElementById("parrafo1");
// console.log(div.innerHTML);
// console.log(parrafo.innerHTML);

// // para que funcione se debe poner esto en el html:
// <div id = "app">
// <p id = "parrafo1" >Hola Mundo</p>
// </div>

// //EJERCICIO CLASE 10 - EVENTOS JS

// // esta parte va en el html:

// <h1 id="welcomeMessage">¡Bienvenido!</h1>

// // lo que hacemos aca es un evento en el que cada vez que alguien entra a la web muestra un mensaje aleatorio entre 3 opciones distintas.

// const welcomeMessages = [
//     "¡Hola! Qué alegría verte por aquí.",
//     "¡Bienvenido! Esperamos que disfrutes tu visita.",
//     "¡Saludos! Estamos felices de tenerte con nosotros."
// ];

// function getRandomWelcomeMessage() {
//     const randomIndex = Math.floor(Math.random() * welcomeMessages.length);
//     return welcomeMessages[randomIndex];
// }

// document.getElementById("welcomeMessage").innerText = getRandomWelcomeMessage();

// // EJERCICIO CLASE 11 - STORAGE Y JSON

// // Función para almacenar información en el localStorage
// function storeUserInput() {
//     // Solicitar información al usuario
//     const userInput = prompt("Ingresa un texto, número o una combinación:");

//     // Guardar la información en localStorage
//     localStorage.setItem('userInput', userInput);

//     // Mostrar la información almacenada mediante alert
//     alert("La información almacenada es: " + localStorage.getItem('userInput'));
// }

// // Función para crear un array de objetos y almacenarlo en formato JSON en localStorage
// function storeArrayOfObjects() {
//     // Crear un array de objetos
//     const objectsArray = [
//         { id: 1, name: "Objeto 1", value: 10 },
//         { id: 2, name: "Objeto 2", value: 20 },
//         { id: 3, name: "Objeto 3", value: 30 }
//     ];

//     // Convertir el array de objetos a formato JSON
//     const jsonArray = JSON.stringify(objectsArray);

//     // Almacenar el array en formato JSON en localStorage
//     localStorage.setItem('objectsArray', jsonArray);

//     // Mostrar la información almacenada en la consola
//     console.log("Array de objetos almacenado en localStorage:", JSON.parse(localStorage.getItem('objectsArray')));
// }

// // Ejecutar las funciones
// storeUserInput();
// storeArrayOfObjects();

// EJERCICIO CLASE 12 - OPERADORES AVANZADOS 1 ( ||, &&, Y DESESTRUCTURACIÓN )

// const usuario = {
//     nombre: "Jair",
//     apellido: "Ansourian",
//     dni: "40829474",
// }

// // forma 1 de asignarlo:
// let nombre = usuario.nombre;
// let apellido = usuario.apellido;
// let dni = usuario.dni;

// // forma 2 de asignarlo:
// const {nombre, apellido, dni} = usuario;

// // acceso condicional a un objeto:
// console.log((usuario?.edad) || "no hay parametro de edad en el usuario.");
// console.log((usuario?.dni) || "el usuario no tiene DNI.");

// EJERCICIO CLASE 13 - OPERADORES AVANZADOS 2 (SPREAD)

// los "..." funcionan como spread:
// const nombres= ["Juan", "Agustin", "Federico", "Lucía"];
// console.log(nombres);
// console.log(...nombres);

// CLASE 14 - LIBRERIAS (NO TIENE EJERCICIOS)

// EJERCICIO CLASE 15 - ASINCRONÍAS Y PROMESAS

// EJ 1 (ANSINCRONÍA):
// setTimeout(() => {
//     console.log("Este mensaje se mostrará despues de 5 segundos")
// }, 5000);

// setInterval(() => {
//     console.log("Este mensaje se repetirá cada 2 segundos")
// }, 2000);

// EJ 2 (PROMESAS):
// const eventoFuturo = (res) => {
//     return new Promise( (resolve, reject) => {
//         if (res === true) {
//             resolve('Promesa resuelta')
//         } else {
//             reject('Promesa rechazada')
//         }
//     })
// }

// // USO DE "THEN" & "CATCH" EN LA PROMESA

// eventoFuturo(true)
//     .then( (response) => {
//         console.log(response)
//     })
//     .catch( (error) => {
//         console.log(error)
//     })

// eventoFuturo(false)
//     .then( (response) => {
//         console.log(response)
//     })
//     .catch( (error) => {
//         console.log(error)
//     })

// // USO DE "FINALLY" EN LA PROMESA

// eventoFuturo(true)
//     .then( (response) => {
//         console.log(response)
//     })
//     .catch( (error) => {
//         console.log(error)
//     })
//     .finally( () => {
//         console.log("Fin del proceso")
//     })

// CLASE 16 - AJAX, APIs y FETCH

// En este fetch lo que estamos haciendo es llamar a una API que tiene un json con 100 elementos 
// y le estamos pidiendo la informacion de esos elementos pero de forma precisa, ya que le estamos
// pidiendo que muestre el title y el body solo del 1er elemento.

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((resp) => resp.json())
//   .then((data) => {
//     console.log(data[1].title);
//     console.log(data[1].body);
//   });

// y si quisiera cargar los elementos que me traiga a modo de lista en el cuerpo HTML?

// CÓDIGO HTML:

{/* <h2>Posts!</h2>
    <hr/>
    <ul id="listado">
    </ul> */}

// CÓDIGO JS:

// const lista = document.querySelector('#listado')

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then( (resp) => resp.json() )
//     .then( (data) => {
       
//         data.forEach((post) => {
//             const li = document.createElement('li')
//             li.innerHTML = `
//                 <h4>${post.title}</h4>
//                 <p>${post.body}</p>
//             `
//             lista.append(li)
//         })
//     })

