/*
---------------------------------------------------
FILTRA Y DEVUELVE EN ESTE CASO LAS FRUTAS AMARILLAS
const frutas = [
    {fruta: 'Manzana', color: 'rojo'},
    {fruta: 'Banana', color: 'amarillo'},
    {fruta: 'Limon', color: 'amarillo'},
    {fruta: 'Pera', color: 'verde'},
    {fruta: 'Tomate', color: 'rojo'},
]
const resultado = frutas.filter(x => x.color == "amarillo") 
for (let index = 0; index < resultado.length; index++) {
    const element = resultado[index];
    console.log(element.fruta)   
}

---------------------------------------------------
REEMPLAZA CUMPLIENDO LA CONDICION INDICADA
const autos = ['Carnival', 'Vento','c250','Vento']
const mapeo = autos.map(x => { 
    if (x == 'Vento') return 'Bora' 
    else return 'GT3'
})
console.log(mapeo)

---------------------------------------------------
REEMPLAZA POR 'C250' DESDE LA POSICION 1 EN ADELANTE
const autos = ['Carnival', 'Vento','c250','Vento']
const reemplazo = autos.fill('c250',1) 
console.log(reemplazo)

---------------------------------------------------
FILTRA Y DEVUELVE SOLAMENTE EL PRIMER ELEMENTO CON ESA CONDICION
const frutas = [
    {fruta: 'Manzana', color: 'rojo'},
    {fruta: 'Banana', color: 'amarillo'},
    {fruta: 'Limon', color: 'amarillo'},
    {fruta: 'Pera', color: 'verde'},
    {fruta: 'Tomate', color: 'rojo'},
]
const resultado = frutas.find(x => x.color == "rojo") 
console.log(resultado.fruta)  

---------------------------------------------------
DEVUELVE LA POSICION DEL PRIMER ELEMENTO CON ESE VALOR
const autos = ['Carnival', 'Vento','c250','Vento']
const posicion = autos.findIndex(x => x == "Vento")
console.log(posicion)

---------------------------------------------------
DEVUELVE UN BOOLEANO DEPENDIENDO LA EXISTENCIA DEL VALOR
SI ES EVERY, PREGUNTA SI TODOS TIENEN ESE VALOR Y DEVUELVE EL BOOLEANO
const autos = ['Carnival', 'Vento','c250','Vento']
const posicion = autos.some(x => x == "Vento")
console.log(posicion) 


---------------------------------------------------
ARRANCA EL ULTIMO VALOR DEL ARRAY Y LO PASA A UNA VARIABLE, EN ESTE CASO POSICION
SHIFT HACE LO MISMO, PERO CON EL PRIMER VALOR DEL ARRAY
const autos = ['Carnival', 'Vento','c250','Vento']
const posicion = autos.pop()
console.log(posicion)
console.log(autos)

---------------------------------------------------
AGREGA UN VALOR AL FINAL ARREGLO, POSICION DEVUELVE LENGHT Y AUTOS EL ARRAY CON EL VALOR AGREGADO
SE PUEDE USAR TMB ASI: autos.push('kuga'), sin asignacion
UNSHIFT LO AGREGA ADELANTE: autos.unshift('kuga')
const autos = ['Carnival', 'Vento','c250','Vento']
const posicion = autos.push('Kuga')
console.log(posicion)
console.log(autos)

---------------------------------------------------
CORTA Y REEMPLAZA, SE PONE: (indice, cuanto quiero cortar, que agrego)
SI CORTO 0, ESTOY AGREGANDO UN VALOR AL ARRAY
const autos = ['Carnival', 'Vento','c250','Vento']
autos.splice(1,1,'Kuga')
console.log(autos)


---------------------------------------------------
CORTA Y ASIGNA A UNA VARIABLE EL INTERVALOR INDICADO: (desdedonde, hastadonde)
EL SPLICE CORTA EL ARRAY, EL SLICE NO LO CORTA SINO QUE DEVUELVE LO QUE LE ESTAS PIDIENDO 
const autos = ['Carnival', 'Vento','c250','Vento','Polo','Corolla']
const array = autos.slice(0,4)
console.log(array)

---------------------------------------------------
CON EL JOIN DEFINO COMO QUIERO QUE SE SEPARE EL ARREGLO EN LA PAGINA
const autos = ['Carnival', 'Vento','c250','Vento','Polo','Corolla']
document.getElementById('seleccionable').innerHTML = autos.join(', ')

---------------------------------------------------
CONCATENA COMO SI FUECEN STRINGS
const autos = ['Vento','c250','Vento','Polo','Corolla']
const camionetas = ['Carnival', 'Kuga','Renegade','Frontier','Amarok']
console.log(autos.concat(camionetas))

---------------------------------------------------
EL SORT ORDENA EL ARREGLO, CUANDO ES CON NUMERO AGREGAR LOS PARAMETROS MOSTRADOS
CON ESTO EVITAMOS QUE ORDENE POR EL PRIMER CARACTER NUMERICO
PARA ORDENAR DE FORMA DESCENDENTE, HACER: y - x
const numeros = [1,2,3,4,5,6,7,8]
console.log(numeros.sort((x,y) => x-y))*/