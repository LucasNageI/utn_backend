let number : number | undefined

if(number){
    console.log(number)
}
else {
    console.log("no hay numeros aun")
}

let nombre : string = "lucas"
let is_registered : boolean = true

const calcularIva = (precio : number | string) : number => {
    return Number(precio) * 0.21
}

let iva_calculado : number = calcularIva(2000) 

const mostrarDatoCualquiera = (dato : any) => {
    return dato
}

const saludar = (nombre : string) : void => { /* el void indica que no retorna nada */
    console.log("hola " + nombre)
}

let funcion_saludar = saludar

const mandarMail = (to : string, message : string, subject? : string) : void => { /* subject?  significa que el argumento es opcional */
    console.log("email: " + to, "message: " + message, "subject: " + subject )
}

mandarMail("lucasanagel@gmail.com", "hola soy lucas")