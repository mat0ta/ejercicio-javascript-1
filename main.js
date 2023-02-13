// Ejercicio 1
function ejercicio_1() {
    result = document.getElementById('ejercicio1')
    let result_items = []
    for(let i = 1; i <= 100; i++){
        if(i % 3 == 0 && i % 5 != 0){
            result_items.push(`<p>` + i + ` -> Divisible entre 3</p>`)
        }else if(i % 5 && i % 3 != 0){
            result_items.push(`<p>` + i + ` -> Divisible entre 5</p>`)
        }else if(i % 3 == 0 && i % 5 == 0){
            result_items.push(`<p>` + i + ` -> Divisible entre 3 y 5</p>`)
        }else{
            result_items.push(`<p>` + i + `</p>`)
        }
    }
    result.innerHTML = result_items.join('')
}
ejercicio_1()

// Ejercicio 2
function ejercicio_2() {
    result = document.getElementById('ejercicio2')
    let result_items = []
    result_items.push(`<p>` + String("" == '0') + `</p>`)
    result_items.push(`<p>` + String(0 == '') + `</p>`)
    result_items.push(`<p>` + String(0 == '0') + `</p>`)
    result_items.push(`<p>` + String(false == 'false') + `</p>`)
    result_items.push(`<p>` + String(false == '0') + `</p>`)
    result_items.push(`<p>` + String(false == undefined) + `</p>`)
    result_items.push(`<p>` + String(false == null) + `</p>`)
    result_items.push(`<p>` + String(null == undefined) + `</p>`)
    console.log(result_items)
    result.innerHTML = result_items.join('')
}
ejercicio_2()

// Ejercicio 3
function ejercicio_3(a, b, c) {
    result = document.getElementById('ejercicio3')
    let result_items = []
    let _a = String(a)
    let _b = String(b)
    let _c = String(c)
    let numbers = [_a, _b, _c]
    let suma = 0
    for(i in numbers){
        for(j in i){
            suma += parseInt(j) ** 3
        }
        if(suma == parseInt(i)){
            result_items.push(`<p>` + numbers[i] + ` -> Es un número de Armstrong</p>`)

        }else{
            result_items.push(`<p>` + numbers[i] + ` -> No es un número de Armstrong</p>`)
        }
        suma = 0
    }
    result.innerHTML = result_items.join('')
}
ejercicio_3(153, 345, 980)

// Ejercicio 4
function ejercicio_4() {
    let dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    fecha = document.getElementById('fecha')
    result = document.getElementById('resultado')
    let fecha_ingresada = new Date(fecha.value)
    let onejan = new Date(fecha_ingresada.getFullYear(), 0, 1)
    let dia_semana = fecha_ingresada.getDay()
    let semana_anio = Math.ceil((((fecha_ingresada.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7)
    let bisiesto = ''
    if(esBisiesto(fecha_ingresada.getFullYear())){
        bisiesto = 'Sí'
    }else{
        bisiesto = 'No'
    }
    result.innerHTML = `El día de la semana es: ${dias[dia_semana]} <br> La semana del año es: ${semana_anio} <br> ¿Es bisiesto?: ${bisiesto}`
}

function esBisiesto(year) {
    return (((year % 4 === 0 && year % 100 > 0) || year %400 == 0) ? 366 : 365) == 366;
}

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