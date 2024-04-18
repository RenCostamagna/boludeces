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