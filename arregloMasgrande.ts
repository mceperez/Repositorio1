let arregloMasgrande: number[]=new Array(4,7,9,3,1,45,67,23,29,78,11,16);
let indice:number;

let mayor:number=0
for(indice=0;indice<12;indice++){
    if(arregloMasgrande[indice]> mayor){
        mayor=arregloMasgrande[indice];
    }

    }
    function parImpar (mayor:number):string{
        if (mayor % 2 ==0){
            return "es par"
    }else{
        return "es impar"
    }
}   
    console.log(" el numero mayor es "+mayor +"," + parImpar(mayor) );
    
    


