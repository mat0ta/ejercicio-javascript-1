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