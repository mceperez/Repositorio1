let arreglo1:number[]=[1,2,3];
let arreglo2:number[]=[4,5,6];
let arreglomultiplicacion:number[]=new Array(3);
let cantidad:number=3;
let arreglo3:number[]=[2,1,2];
let arreglo4:number[]=[1,2,1];

function multiplicarArreglo(v1:number[],v2:number[], cantidad:number,vmult:number[],v3:number[],v4:number[]): number[]{
    let indice:number;
    for( indice=0; indice< cantidad;indice++){
        
            vmult[indice]=v1[indice]*v2[indice]*v3[indice]*v4[indice];
    
    }    
        return vmult;
}

console.log("la multiplicacion de los cuatro arreglos segun su indice son: "  + multiplicarArreglo(arreglo1,arreglo2,cantidad,arreglomultiplicacion,arreglo3,arreglo4))