//implemente un algoritmo de ordenamiento con el método Bubble Sort, para que ordene un arreglo de longitud N en orden descendente.
let arregloLongN:number[]=new Array(5);
let cantidad:number=5
let numAzar:number=100
function Azar (numAzar:number):number{
    return Math.floor(Math.random() * numAzar)
}

function cargarArreglo(arregloLongN:number[],cantidad:number,numAzar:number){
    for(let i:number=0; i<cantidad;i++){
        arregloLongN[i]=Azar(numAzar);
        
    }
}

function escribirEnUnaLinea(arregloLongN:number[],cantidad:number){
    let vector: string="";
    for(let i:number=0; i<cantidad;i++){
        vector+=`${arregloLongN[i]} `
    }
    console.log(vector)
}

function intercambiar(arregloLongN:number[],i:number,j:number){
    let aux:number;
     aux=arregloLongN[i];
     arregloLongN[i]=arregloLongN[j];
     arregloLongN[j]= aux;
}
    
function comparar(arregloLongN:number[],i:number,j:number):number{
    let comparacion:number;
    if(arregloLongN[i]===arregloLongN[j]){
        comparacion=0;
    }else if(arregloLongN[i]>arregloLongN[j]){
        comparacion=1
    }else{
        comparacion=-1;
    }
    return comparacion
}

function burbuja(arregloLongN:number[],cantidad:number){
    let i:number;
    let j:number;
    for(i=0;i<cantidad;i++){
        for( j=0;j<(cantidad-1);j++){
            if(comparar(arregloLongN,j,j+1)==-1){
                intercambiar(arregloLongN,j,j+1)
            }
        }
    }
}
cargarArreglo(arregloLongN,cantidad,numAzar);
escribirEnUnaLinea(arregloLongN,cantidad);
burbuja(arregloLongN,cantidad);
escribirEnUnaLinea(arregloLongN,cantidad);