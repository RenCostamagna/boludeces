/*let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        let respuesta = "Funciono bien"
        
        resolve(respuesta)
        reject("Error")
    }, 3000)    

})

promesa.then(respuesta => {
    console.log(respuesta)
}).catch(error => {
    console.error(error)
}) */
let urlBase = "https://jsonplaceholder.typicode.com"
let query = "posts/1"
 
/*GET: pedir informacion
fetch(`${urlBase}/${query}`)
      .then(response => response.json())
      .then(json => console.log(json))


//POST: enviar informacion
let requestBody = {
    title: 'foo',
    body: 'bar',
    userId: 1,
}

fetch(`${urlBase}/posts`, {
    method: "POST",
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(requestBody)

})
      .then(response => response.json())
      .then(json => console.log(json))

//PUT: editar informacion
let requestBody2 = {
    id: 100,
    title: 'foo',
    body: 'bar',
    userId: 1,
}

let posteo = 5

fetch(`${urlBase}/posts/${posteo}`, {
    method: "PUT",
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(requestBody2)

})
      .then(response => response.json())
      .then(json => console.log(json))

//PATCH: editar informacion (solo un atributo)
let post = 10
let modificacion = {
    title: "Este titulo ha sido modificado"    
}

fetch(`${urlBase}/posts/${post}`, {
    method: "PATCH",
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(modificacion)

})
      .then(response => response.json())
      .then(json => console.log(json))
*/

//DELETE: borrar informacion
let elementosAEliminar = 7
fetch(`${urlBase}/posts/${elementosAEliminar}`, {
    method: "DELETE",
})
