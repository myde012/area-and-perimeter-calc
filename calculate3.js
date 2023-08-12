
let output3 = document.getElementById("output3")

let Le = document.getElementById("input4")
let Br = document.getElementById("input5")

const solve3 = () =>{
    if (Le.value.length == 0 || isNaN(Le.value))  {
        Le.style.border = "2px solid red"
        return

    } else {
        Le.style.border = "1px solid black"
    }

    if (Br.value.length == 0 || isNaN(Br.value)) {
        Br.style.border = "2px solid red"
        return

    } else {
        Br.style.border = "1px solid black"
    }
    output3.innerHTML = `${2 * (Number(Le.value) + Number(Br.value))}cm`
}

const reset3 = () => {
    output3.innerHTML = ""
    Le.value = ""
    Br.value = ""

}

