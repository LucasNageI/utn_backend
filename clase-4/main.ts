/* POO */

/* objeto literal */

interface Producto { /* Producto va con mayuscula */ /* es una interface, asigna los tipos de dato que van a tener las propiedades */
    nombre: string,
    precio: number,
    stock: number,
    categorias: string[],
    imagen: string,
    id: number
}

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

class Producto { /* la clase se usa para crear objetos */

    constructor(nombre : string){    /* el constructor se ejecuta cuando creamos un objeto */

        /* this es una autoreferencia al objeto de retorno */ 
        this.nombre = nombre /* crea una propiedad llamada nombre en el objeto de retorno y le asigna el valor de nombre */

    }/* las clases siempre retornan un objeto */

    presentarProducto(nombre : string){ /* presentarProducto es un metodo */
        this.nombre = nombre
        console.log("hola este producto se llama " + this.nombre)
    } /* los metodos solo se guardan una vez */

    venderProducto = () => { /* esto es una propiedad, a diferencia del metodo, esta se guarda cuantas veces se ejecute */
        console.log("vendiendo " + this.nombre)
    }
}

let resultado = new Producto("dsa") /* resultado y this son iguales */ 

/* new indica que estamos creando un nuevo objeto */

new Producto("xasasd")

resultado.presentarProducto("laptop")
console.log(resultado)
console.log(typeof resultado)

let id_counter : number = 0

class Usuario {

    /* tipea los datos */

    nombre : string
    role : string
    clave : string
    email : string
    edad : number
    cuit : number
    id: number

    constructor(nombre : string, role : string, clave : string, email : string, edad : number, cuit : number, id : number){

        this.nombre = nombre
        this.role = role
        this.clave = clave
        this.email = email
        this.edad = edad
        this.cuit = cuit
        this.id = id
    }

    mostrarDatos(){
        console.log("USER ID: " + this.id + ". Hola " + this.nombre + " sos un " + this.role + " y tu clave es " + this.clave + " tu email es " + this.email + " y tu edad es " + this.edad + " y tu cuit es " + this.cuit)
    }
}

const user_1 = new Usuario("lucas", "admin", "1234", "lucas.gmail.com", 21, 123456789, id_counter++)

const user_2 = new Usuario("lucas", "admin", "1234", "lucas.gmail.com", 21, 123456789, id_counter++)

class ManejadorUsuarios {
    usuarios : Usuario[]
    id_counter : number
    constructor(){
        this.usuarios = []
        this.id_counter = 0
    }

    agregarUsuario(nombre : string, role : string, clave :string, email : string, edad: number, cuit : number ){
        const nuevo_usuario : Usuario = new Usuario(nombre, role, clave, email, edad, cuit, this.id_counter++)
        this.usuarios.push(nuevo_usuario)
    }
    eliminarUsuarioPorId(){

    }
    obtenerUsuarios(){

    }
    
}

console.log(user_1, user_2)