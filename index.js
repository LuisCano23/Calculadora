const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor, ingresa un valor: ', (num1) => {
  rl.question('Ingrese un segundo valor: ', (num2) => {
    rl.question('Que operacion realizar (1)Suma (2)Resta (3)Multiplicacion (4)Division ', (operacion) => {
        const primerValor = parseInt(num1);
        const segundoValor= parseInt(num2);
        const opcion= parseInt(operacion);
        if (opcion==1){
            console.log('El resultado es', primerValor+segundoValor)
        } else if (opcion==2){
            console.log('El resultado es', primerValor-segundoValor)    
        } else if (opcion==3){
            console.log('El resultado es', primerValor*segundoValor)
        } else if(opcion==4){
            if (segundoValor==0){
                console.log('No se puede dividir por cero')
            } else {
                console.log('El resultado es', primerValor/segundoValor)
            }
        }
        rl.close();
      });
  });
});