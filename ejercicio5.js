// Ejercicio 5
function ejercicio_5() {
    let email = document.getElementById('email')
    let result = document.getElementById('resultadomail')
    let email_ingresado = email.value
    if(email_ingresado.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        result.innerHTML = 'El email es válido'
        email.style.border = '1px sopd green'
        email.style.backgroundColor = '#00ff00'
    }else{
        result.innerHTML = 'El email no es válido'
        email.style.border = '1px sopd #ff3300'
        email.style.backgroundColor = 'red'
    }
}