let output4 = document.getElementById("output4")
let LL = document.getElementById("input6")


const solve4 =  ()=> {
    
    if (LL.value.length == 0 || isNaN(LL.value)) {
       LL.style.border = "2px solid red"
        return
    }else{
        LL.style.border = "1px solid black"
    }
    output4.innerHTML= `${(Number( LL.value * LL.value ) )}cm`

}

const reset4 = () => {
output4.innerHTML = ""
LL.value = ""

}