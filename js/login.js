
const email = document.getElementById("email")
const password = document.getElementById("password")
const btnlogin = document.getElementById("btn")
const user = localStorage.getItem("name")
const pass = localStorage.getItem("password")
const error = document.getElementById("error")
const error__close = document.getElementById("error__close")
const warning = document.getElementById("warning")
const warning__close = document.getElementById("warning__close")


btnlogin.addEventListener("click",function (e) {
    e.preventDefault()
    if( email.value == ""|| password.value=="" ){
        error.style.display="flex"
    }else{
       if(email.value === user && password.value === pass ){
        setTimeout(()=>{
            location="index.html"
        },1000)
       }else{
        warning.style.display = "flex"
       }
    }
})

error__close.addEventListener("click",function () {
    error.style.display="none"
})

warning__close.addEventListener("click",function () {
    warning.style.display="none"
})