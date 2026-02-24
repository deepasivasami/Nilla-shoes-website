let submit = document.querySelector("#submit")


debugger;


let customers ;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let user="admin";
let password="admin@123";
 submit.addEventListener("click",(e)=>{
    e.preventDefault();
    let username=document.querySelector("#username").value;
    let pass = document.querySelector("#password").value;

    let mailerrors=document.getElementById("mailerror")
let passerror=document.getElementById("perror")
  


   if(username === ""){
   mailerrors.innerText = "Enter your username"
                document.getElementById("username").style.border = "1px solid red"
                let ischeck = false

   }
   else{
     mailerrors.innerText = ""

   }
   if(pass === ""){
   passerror.innerText = "Enter your password"
                document.getElementById("password").style.border = "1px solid red"
                let ischeck = false

   }
   else{
     passerror.innerText = ""

   }

    if (username=== user&&pass===password){
        alert("Login successfully")
       window.location.href ="../admin/dasbord.html";
    }
    else{
        alert("please enter the correct credientials")
    }
 })