import * as rls from 'readline-sync';

let base:number=rls.questionInt("ingrese un numero: ");
let exponente:number=rls.questionInt("ingrese el exponente: ");


function potencia (base:number,exponente:number): number{
   let resultado:number= base**exponente
    return resultado


}


console.log("el resultado es: "+  potencia(base,exponente))




