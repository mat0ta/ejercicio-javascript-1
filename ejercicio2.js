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