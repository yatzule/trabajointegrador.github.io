const cantidad = document.getElementById('cantidad');
const descuento = document.getElementById('descuento');

const btnSumar = document.querySelector('.boton-sumar');
const btnReset = document.querySelector('.boton-reset');

let ticket = 200;
let descuentoEstudiante = 0.80;
let descuentoTrainee = 0.50;
let descuentoJunior = 0.15;

btnSumar.addEventListener("click",()=>{  
    //console.log(cantidad.value)
   // console.log(descuento.value)
    let total = ticket * parseInt(cantidad.value); 

    if(descuento.value == "estudiante"){
        total = total - (total * descuentoEstudiante)
       // cantidad.innerHTML = total;
       //console.log(total)
    }else{
        if(descuento.value == "trainee"){
            total = total - (total * descuentoTrainee)
           // cantidad.innerHTML = total;
           //console.log(total)  
        }
        else{
            total = total - (total * descuentoJunior)
           // cantidad.innerHTML = total;
        }
    }
    cant.innerHTML = "Total a Pagar: $" + total;
})

btnReset.addEventListener("click",()=>{
    cant.innerHTML =  "Total a Pagar: $ 0";
})