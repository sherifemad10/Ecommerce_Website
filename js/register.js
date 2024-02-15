const name1 = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const btncreate = document.getElementById("btn")
const user = localStorage.getItem("email")
const already = document.getElementById("already")
const error = document.getElementById("error")
const error__close = document.getElementById("error__close")


btncreate.addEventListener("click",function (e) {
    e.preventDefault()
    if(name1.value == "" || email.value == ""|| password.value=="" ){
        error.style.display="flex"
    }else{
        localStorage.setItem("name",name1.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",password.value)

        if (email.value === user ) {
            already.style.display="block"
        }else{
            setTimeout(() =>{
                location="login.html"
            },1000 )
        }
        }

      
})
error__close.addEventListener("click",function () {
    error.style.display="none"
})