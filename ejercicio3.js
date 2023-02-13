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