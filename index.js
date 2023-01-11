const txtOp1 = document.getElementById('op1');
const txtOperador = document.getElementById('operador');
const txtOp2 = document.getElementById('op2');
const btnCalcular = document.getElementById('Calcular');
const pResultado = document.getElementById('resultado')

function calcular(){

        //console.log(txtOperador.value)              //Con .value se muestra el valor dado para txtOperador

    const operador = txtOperador.value;
    const op1 = parseFloat(txtOp1.value) ;      //parseFloat para convertir string en numeros decimales
    const op2 = parseFloat(txtOp2.value) ;

    if((operador == "+" || operador == "-" || operador == "*" || operador == "/") && !isNaN(op1) && !isNaN(op2)){          // if para saber si un input es posible o no // !isNaN(0=) funciiona para obligar a que un dato sea un numero no un string
        let resultado;
        switch (operador){                      // switch para reemplzar esle if y crear varias situaciones

            case "+": resultado= op1 + op2
            break;

            case "-": resultado= op1 - op2
            break;

            case "*": resultado= op1 * op2
            break;

            case "/": resultado= op1 / op2
            break;

        }
        pResultado.style = "color:black"            //Se cambia el stilo de una etiqueta
        pResultado.innerText = '= ' + resultado;                                            // Con innerText se aniade texto a una etiqueta de HTML
    }else{
        pResultado.style = "color:red"
        pResultado.innerText = 'Calculo imposible'
    }


}