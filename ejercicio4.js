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