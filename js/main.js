let mobile = document.querySelector(".mobile")
let shop = document.querySelector(".shop")
let navbar = document.getElementById("navbar")

mobile.addEventListener("click",function(){
    if(navbar.style.display=="block"){
        navbar.style.display="none"
        shop.style.display="flex"
    }else {
        navbar.style.display="block";
        shop.style.display="none"
    }
})
// sign
let signin = document.querySelector(".signin")
let signup = document.querySelector(".signup")

signup.addEventListener("click",function () {
    location = "register.html"
})
signin.addEventListener("click",function () {
    location = "login.html"
})