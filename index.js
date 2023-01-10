const txtOp1 = document.getElementById('op1');
const txtOperador = document.getElementById('operador');
const txtOp2 = document.getElementById('op2');
const btnCalcular = document.getElementById('Calcular');
const pResultado = document.getElementById('resultado')

function calcular(){

        //console.log(txtOperador.value)              //Con .value se muestra el valor dado para txtOperador

    const operador = txtOperador.value

    if(operador == "+" || operador == "-" || operador == "*" || operador == "/" ){
        console.log('calculo posible')
    }else{
        console.log('calculo imposible')
    }


}