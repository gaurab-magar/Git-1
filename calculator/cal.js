function Add(){
    let a = parseInt(document.getElementById("num1").value)
    let b = parseInt(document.getElementById("num2").value)
    let total = document.getElementById("render")
    let result = a + b
    total.innerHTML=`you got  ${result}  after addition`
}
function Substract(){
    let a = parseInt(document.getElementById("num1").value)
    let b = parseInt(document.getElementById("num2").value)
    let total = document.getElementById("render")
    let result = a - b
    total.innerHTML=`you got  ${result}  after Substraction`
}
function Multiple(){
    let a = parseInt(document.getElementById("num1").value)
    let b = parseInt(document.getElementById("num2").value)
    let total = document.getElementById("render")
    let result = a * b
    total.innerHTML=`you got  ${result}  after Multiplication`
}
function Divide(){
    let a = parseInt(document.getElementById("num1").value)
    let b = parseInt(document.getElementById("num2").value)
    let total = document.getElementById("render")
    let result = a / b
    total.innerHTML=`you got  ${result}  after Division`
}
