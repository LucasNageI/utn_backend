"use strict";
/* POO */
/* let producto : Producto = {
    nombre: "laptop",
    precio: 2000,
    stock: 2,
    categorias: ["gamer", "computadoras", "tecnologia"],
    imagen: "https://http2.mlstatic.com/D_NQ_NP_858708-MLA72460118102_102023-O.webp",
    id: 1
}

let producto_2 : Producto = {
    nombre: "celular",
    precio: 3000,
    stock: 5,
    categorias: ["celulares", "tecnologia"],
    imagen: "https://http2.mlstatic.com/D_NQ_NP_858708-MLA72460118102_102023-O.webp",
    id: 2
} */
class Producto {
    constructor(nombre) {
        this.venderProducto = () => {
            console.log("vendiendo " + this.nombre);
        };
        /* this es una autoreferencia al objeto de retorno */
        this.nombre = nombre; /* crea una propiedad llamada nombre en el objeto de retorno y le asigna el valor de nombre */
    } /* las clases siempre retornan un objeto */
    presentarProducto(nombre) {
        this.nombre = nombre;
        console.log("hola este producto se llama " + this.nombre);
    } /* los metodos solo se guardan una vez */
}
let resultado = new Producto("dsa"); /* resultado y this son iguales */
/* new indica que estamos creando un nuevo objeto */
new Producto("xasasd");
resultado.presentarProducto("laptop");
console.log(resultado);
console.log(typeof resultado);
let id_counter = 0;
class Usuario {
    constructor(nombre, role, clave, email, edad, cuit) {
        this.nombre = nombre;
        this.role = role;
        this.clave = clave;
        this.email = email;
        this.edad = edad;
        this.cuit = cuit;
        this.id = id_counter++;
    }
    mostrarDatos() {
        console.log("USER ID: " + this.id + ". Hola " + this.nombre + " sos un " + this.role + " y tu clave es " + this.clave + " tu email es " + this.email + " y tu edad es " + this.edad + " y tu cuit es " + this.cuit);
    }
}
const user_1 = new Usuario("lucas", "admin", "1234", "lucas.gmail.com", 21, 123456789);
const user_2 = new Usuario("lucas", "admin", "1234", "lucas.gmail.com", 21, 123456789);
console.log(user_1, user_2);
