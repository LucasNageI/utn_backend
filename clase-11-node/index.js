// Punto de entrada / Entry Point

// nodemon es una libreria de desarrollo que permite ejecutar el codigo cada vez que guardemos

import express from "express";
import filesystem from "fs"

//se crea una instancia de servidor HTTP
const app = express()
const PORT = 4000

//la callback recibe 2 parametros, (request, response)

app.get('/obtener-productos', async (request, response)=>{
    try{
        const data= await filesystem.promises.readFile('./public/productos.json', {encoding:'utf-8'})
        const productos= JSON.parse(data)
        response.status(200).json({mensaje: 'Lista de productos', code: 200, data: productos})

    }catch(error){
        console.error(error)
        response.json({
            mensaje: 'SERVER ERROR: Productos no obtenidos',
            status: 500,
            ok: false,
            data: null
        })
    }
})


//listen espera recibir 2 valores, el puerto y la callback

app.listen(PORT, () => {
    //esta callback se ejecuta cuando se este escuchando mi app en el puerto
    console.log("mi servidor se esta escuchando en el puerto " + PORT)
})