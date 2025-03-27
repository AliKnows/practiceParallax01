let numeroCreditos=0;

function asignarTextoElemnto(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML =texto;
    return 0;
}

function validarCreditos(){
    
    let numeroCreditos = parseInt(document.getElementById('creditosUser').value);


    if(numeroCreditos>0 && numeroCreditos<=160){




    }else{
        alert("ERROR: Numero de creditos invalido");
    }

}