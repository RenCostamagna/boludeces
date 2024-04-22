let numero = Math.floor(Math.random()*100) + 1
let numeroUsuario = document.getElementById("seleccionable")
let mensaje = document.getElementById('mensaje')

let intento = document.getElementById('intento')
let intentos = 0 

function chequearResultado(){
    intentos ++
    intento.textContent = intentos
    let numeroInresado = parseInt(numeroUsuario.value)
    if (numero < 1 || numero > 100 || isNaN(numeroInresado)) {
        mensaje.textContent('Ingresa un numero valido entre 1 y 100')
        return
    }
    if (numero === numeroInresado) {
        mensaje.textContent = 'CORRECTO! GANASTE'
        numeroUsuario.disabled = true
        return
    } else if (numeroInresado < numero) {
        mensaje.textContent = 'El numero ingresado es muy bajo'
        return
    } else {
        mensaje.textContent = 'El numero ingresado es muy alto'
        return
    }
        
}

