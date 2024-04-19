//FORMA DE FECHA: "AAAA-MM-DD" (ISO)
//SHORT: "MM-DD-AAAA"
//LONG: "Mar 25 2020"

/*-----------------------------------------
CUANDO SE PIDE MES TE DA UN NUMERO MENOS. EJ: MAYO = 4. PORQUE SE GUARDAN EN UN ARREGLO QUE EMPIEZA EN 0
const fecha = new Date()
const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre',
'Noviembre','Diciembre']
const resultado = fecha.getDate() + " " + meses[fecha.getMonth()] + " " + fecha.getFullYear()
console.log (resultado)*/

/*-----------------------------------------
PARA MOSTRARLO AL MES COMO NUMERO
const fechaNum = new Date()
const mes = fechaNum.getMonth() + 1
const resultadoNum = fechaNum.getDate() + " " + mes + " " + fechaNum.getFullYear()
console.log(resultadoNum)*/

/*-----------------------------------------
CON EL SET SETEO UN ANO, MES, DIA, ETC...*/
const fecha = new Date()
fecha.setFullYear(2029)
fecha.setMonth(9)

let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre',
'Noviembre','Diciembre']

let resultado = fecha.getDate() + " " + meses[fecha.getMonth()] + " " + fecha.getFullYear()
console.log (resultado)