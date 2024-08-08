/* fetch es una funcion nativa, asincronica */
/* fetch permite permite emitir consultas http */
/* las funciones asincronicas retornan una promesa */
/* una promesa tiene estados:

    -pending
    -resolved/fulfilled
    -rejected
*/


const getAnakin = async () => {
    const response = await fetch('https://swapi.dev/api/people/1', {
        method: 'GET'
    })
    console.log(response)
    const data = response.json()
    return data
}

const getAnakin2 = async () => {
    const response = await fetch('https://swapi.dev/api/people/2', {
        method: 'GET'
    })
    console.log(response)
}

getAnakin() /* se ejecutan al mismo tiempo */
getAnakin2()

/* callback es una funcion pasada por parametros */

const users = [
    {
        name: "pepe",
        age: 12
    },
    {
        name: "maria",
        age: 123
    },
    {
        name: "jose",
        age: 13
    },
    {
        name: "ana",
        age: 19
    }
]

const callbackExample = (user) => {
        console.log(user.name)
}

users.forEach(callbackExample)

users.forEach((user) => {
    console.log(user.name)
})

/* los 2 son ejemplos de callbacks */