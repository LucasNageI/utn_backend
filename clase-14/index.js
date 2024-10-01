import express, { response } from "express"

const app = express()
const PORT = 8000

//middleware

app.use(express.json()) //se fija si los headers de la consulta son content-type: application/json

const productos = [
    {
        id: 1,
        nombre: 'Pantalon',
        precio: 100,
        imagen: 'https://picsum.photos/id/237/200/300',
        descripcion: 'Pantalon deportivo',
        stock: 10
    },
    {
        id: 2,
        nombre: 'Camisa',
        precio: 50,
        imagen: 'https://picsum.photos/id/238/200/300',
        descripcion: 'Camisa deportiva',
        stock: 5
    },
    {
        id: 3,
        nombre: 'Zapatos',
        precio: 200,
        imagen: 'https://picsum.photos/id/239/200/300',
        descripcion: 'Zapatos deportivos',
        stock: 20
    }
]

//Crear un endpoint

app.post('/productos/:producto_id', (req, res) => {


    console.log(req.params)
    const { producto_id } = req.params
    const producto_buscado = productos.find((producto) => {
        return producto.id === Number(producto_id)
    })
    console.log(producto_buscado)
    const respuesta = {
        ok: true,
        status: 200,
        payload: {
            message: "producto encontrado",
            productos: producto_buscado
        }
    }
    res.json(respuesta)
})


app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
})