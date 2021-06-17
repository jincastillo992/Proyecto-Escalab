var formulario = document.getElementById('formulario');
var nombre = document.getElementById('nombre');
var empresa = document.getElementById('empresa');
var email = document.getElementById('email');

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
    revisarInputs();
});

function error(input, message){
    let formControl = input.parentElement; // .form-control
    let small = formControl.querySelector('small');
    //agrega mensaje de error en el small
    small.innerText = message;
    //agrega clase error
    formControl.className = 'form-control error';
}

function exito(input){
    let formControl = input.parentElement;
    formControl.className = 'form-control exito';
}

function revisarEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


function revisarInputs(){
    // tomar los valores de los inputs
    var valor_nombre = nombre.value.trim();
    var valor_empresa = empresa.value.trim();
    var valor_email = email.value.trim();

    if(valor_nombre ==='' && valor_empresa ==='' && valor_email ===''){
        error(nombre, 'El nombre no puede estar vacío');
        error(empresa, 'El nombre de la empresa no puede estar vacío');
        error(email, 'El email no puede estar vacío');
        return false;
    }
    
    if(valor_nombre ===''){
        // mostrará el error y agregará la clase error
        error(nombre, 'El nombre no puede estar vacío');
        return false;
    }else if(valor_nombre.length < 5){
        error(nombre, 'El nombre debe tener al menos 5 caracteres');

        return false;
    } else{
        // agrega clase exito
        exito(nombre);
    }

    if(valor_empresa ===''){
        // mostrará el error y agregará la clase error
        error(empresa, 'El nombre de la empresa no puede estar vacío');
        return false;
    }else{
        exito(empresa);
    }

    if(valor_email ===''){
        // mostrará el error y agregará la clase error
        error(email, 'El email no puede estar vacío');
        return false;
    }else if(!revisarEmail(valor_email)){
        error(email, 'El email no es valido');
        return false;
    }else{
        exito(email);
    }
    alert('Gracias, pronto recibirás un correo con instrucciones');
    return true;
}

