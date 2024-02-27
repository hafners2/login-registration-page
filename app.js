const loginBtn = document.getElementById("login");
const registerBtn = document.getElementById("register");
const btn = document.getElementById("btn");
const form = document.querySelector("form");
let check = document.getElementById("check");

var username;
var password;

function register(){
    loginBtn.style.left = "-1400px";
    registerBtn.style.left = "5px";
    btn.style.left = "290px";
}

function login(){
    loginBtn.style.left = "50px";
    registerBtn.style.left = "1250px";
    registerBtn.style.bottom = "855px";
    btn.style.left = "0px";
}

form.addEventListener("submit",(e) => {
    e.preventDefault();
    username = form.children[0].value;
    password = form.children[1].value;
    authenticate(username, password);
});

function authenticate(username,password){
    if(username === "admin" && password === "password"){
        window.location.replace("home.html");
    } else {
        check.classList.add("error");
        check.innerHTML = "Incorrect Login Combination.";
    }
}