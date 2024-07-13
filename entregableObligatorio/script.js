"use strict";

function mostAlter(){
    let btnIzq=document.querySelector(".botonIzq");
    let btnDer=document.querySelector(".botonDer");
     if(btnIzq.style.visibility=== "hidden"){
        btnIzq.style.visibility="visible";
        btnDer.style.visibility="hidden";
     } else{
        btnIzq.style.visibility="hidden";
        btnDer.style.visibility="visible";
     }
}
let btnI=document.getElementById("btnI");
btnI.addEventListener("click",mostAlter);

let btnD=document.getElementById("btnD");
btnD.addEventListener("click",mostAlter);