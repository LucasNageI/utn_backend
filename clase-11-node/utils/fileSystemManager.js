import filesystem from "fs"

const crearJson = async (fileName, data) => {
  try {
       if (typeof fileName !== 'string' || fileName.length < 1) {
      throw { code: 'ERR_INVALID_ARG_TYPE', message: 'fileName debe ser un string con al menos 1 carácter' }
    }
    if (typeof data !== 'object' || data === null) {
      throw { code: 'ERR_INVALID_ARG_TYPE', message: 'data debe ser un objeto y no puede ser null' }
    }

    await filesystem.promises.writeFile(
      `${fileName}.json`,
      JSON.stringify(data),
      { encoding: "utf-8" }
    )
    console.log(`Archivo ${fileName}.json creado con éxito.`)
  } catch (error) {
    console.dir(error.code)
    console.error(error.message || "Ocurrio un error excepcional")
  }
}

const leerJson = async (name) => {
  const nombreJSON = name + ".json"
  try {
    const contenido = await filesystem.promises.readFile(nombreJSON, { encoding: "utf-8"})

    const dataJSON = JSON.parse(contenido)
    console.log(dataJSON)
  } catch (error) {
    console.dir(error.code)
    console.error(error.code === "ENOENT" ? "No se puede leer el archivo" : "Ocurrio un error excepcional")
  }
}

export { crearJson, leerJson }

/*app.get("/obtener-usuarios", async (request, response) => {
    //request es un objeto con todos los datos de la consulta
    //response es un objeto que se usa para emitir respuestas
    console.log("recibido")

    const resultado = await filesystem.promises.readFile("./public/usuarios.json", {encoding: "utf-8"})
    const usuarios = JSON.parse(resultado)
    console.log(usuarios)
    response.status(226).json({data: usuarios})

})*/