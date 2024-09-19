// Punto de entrada / Entry Point

// nodemon es una libreria de desarrollo que permite ejecutar el codigo cada vez que guardemos


const filesystem = require("fs")
const { createTxt } = require("./utils/fileSystemManager")

console.log("hola mundo")

const objeto = JSON.parse(filesystem.readFileSync("prueba.json", {encoding: 'utf-8'}))

console.log(objeto.nombre)

createTxt("prueba2", "esta es la prueba 2")