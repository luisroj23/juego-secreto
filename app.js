let numeroAl = 0;
let intentos = 0;
let listaNumeroGenerado=[]
let nuemroMaximo=10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto;
 
}
function verificacionDeIntento() {
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroAl===numeroDeUsuario){
      asignarTextoElemento('p',`acertaste en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`)
      document.getElementById('reiniciar').removeAttribute('disabled')
    }
     else{
      if (numeroAl<numeroDeUsuario) {
         asignarTextoElemento('p','el numero es menor')
         
      }else{
         asignarTextoElemento('p','el numero secreto es mayor')
      }
      intentos ++;
      limpiarCaja();

     }
   console.log(numeroAl)
  
   return;
}

function limpiarCaja(){
   document.querySelector('#valorUsuario').value ='';
}

function condicionesIniciales(){
   asignarTextoElemento("h1", "Juego del numero secreto")
   asignarTextoElemento('p', `Indica un numero del 1 al ${nuemroMaximo}`)
   intentos=1;
   numeroAl = generarnumeroSecreto();

}


function generarnumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*nuemroMaximo)+1
   console.log(numeroGenerado)
   console.log(listaNumeroGenerado)   
   if (listaNumeroGenerado.length == nuemroMaximo) {
      asignarTextoElemento('p', 'llegaste a la cantidad de numeros posibles')
      
   }else{
         if (listaNumeroGenerado.includes(numeroGenerado)){
            return generarnumeroSecreto()
         } else{
            listaNumeroGenerado.push(numeroGenerado)
            return numeroGenerado
   }
   }
     
    
}

function reiniciarBoton(){
condicionesIniciales()

limpiarCaja()
document.querySelector('#reiniciar').setAttribute('disabled',true)
}

condicionesIniciales()