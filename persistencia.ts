import fs  from 'node:fs';
// guarda información en precios.txt
let precios:number[]=[525,3500,400,1999];
let preciosString: string=precios.toString();
fs.writeFileSync('./precios.txt',preciosString );
//leer la informacion
let datos:string= fs.readFileSync('./precios.txt',"utf8");

let arregloPrecios :string[]=datos.split(",");

let preciosNumeros:number[]=[];
function convertirNumero(arregloPr:string[]):number[]{
    for(let i :number=0;i<arregloPr.length;i++){
        preciosNumeros[i]=parseInt(arregloPr[i])
    }
    return preciosNumeros
}
console.log(convertirNumero(arregloPrecios));



// guarda información en productos.txt 
let productos:string[]=["leche","Galletitas","Harina","Queso"];
let mercaderia: string="";

for(let i:number=0; i<productos.length;i++){
    mercaderia+= `${productos[i]} `;
}

fs.writeFileSync('./productos.txt', mercaderia);
let datos1:string= fs.readFileSync('./productos.txt',"utf8");
let datos2:string=datos1.trim()
let arregloProductos:string[]=datos2.split(" ");

console.log(arregloProductos);
