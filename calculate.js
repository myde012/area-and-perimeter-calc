let solve1 = document.getElementById("btn1")
let reset1 = document.getElementById("btn2")
let output1 = document.getElementById("output1")

let base = document.getElementById("input1")
let height = document.getElementById("input2")

solve1.addEventListener("click", () => {
    if (base.value.length == 0 || isNaN(base.value))  {
        base.style.border = "2px solid red"
        return

    } else {
        base.style.border = "1px solid black"
    }

    if (height.value.length == 0 || isNaN(height.value)) {
        height.style.border = "2px solid red"
        return

    } else {
        height.style.border = "1px solid black"
    }


    output1.innerHTML = `${0.5 * (Number((base.value) * Number(height.value)))}cm`
})

reset1.addEventListener("click", () => {
    output1.innerHTML = ""
    base.value = ""
    height.value = ""

})
