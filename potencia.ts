import * as rls from 'readline-sync';

let base:number=rls.questionInt("ingrese un numero: ");
let exponente:number=rls.questionInt("ingrese el exponente: ");
let resultado:number=0

function potencia (base:number,exponente:number): number{
   let resultado:number= base**exponente
    return resultado


}
resultado=potencia(base,exponente)
potencia(base,exponente)
console.log("el resultado es: "+ resultado )