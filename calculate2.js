let solve2 = document.getElementById("b1")
let reset2 = document.getElementById("b2")
let output2 = document.getElementById("output2")

let l1 = document.getElementById("input3")
solve2.addEventListener("click", () => {
    if (l1.value.length == 0 || isNaN(l1.value)) {
        l1.style.border = "2px solid red"
        return

    } else {
        l1.style.border = "1px solid black"
    }

 
    output2.innerHTML = `${4 * (Number((l1.value)))}cm`
})

reset2.addEventListener("click",()=>{
    output2.innerHTML= ""
    l1.value = ""
})





// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }




