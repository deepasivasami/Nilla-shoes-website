
// function loginForm() {
//     let mail = document.getElementById("email").value;
//     let pass = document.getElementById("password").value;

//     let em_err = document.getElementById("email_error");
//     let pass_err = document.getElementById("pass_error");

//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   
//  debugger

//  let isValid = true;
  
//     if(mail === ""|| !emailRegex.test(mail)){


//         em_err.innerText = "Enter your Email Id";
//         document.getElementById("email").style.border="2px solid red";
//         isValid = false;


//     } 
    
//     // else if(mail ==="" || !emailRegex.test(mail)){


//     //     em_err.innerText = "Enter a valid email";
//     //     document.getElementById("email").style.border="2px solid red";
//     //     isValid = false;

//     // }
    
//     else {
//         em_err.innerText = "";
//     }

    
//     if(pass === ""){


//         pass_err.innerText = "Enter your Password";
//         document.getElementById("password").style.border="2px solid red";
//         isValid = false;

//     } 
    
//     else if(pass.length <8){


//         pass_err.innerText = "Password must be at least 8 characters";
//         document.getElementById("password").style.border="2px solid red";
//         isValid = false;

//     } 
    
//     else {
//         pass_err.innerText = "";
//          document.getElementById("password").style.border="2px solid green";

//     }

//     if(!isValid)return;

    
//     let logincustomer = JSON.parse(localStorage.getItem("customerList")) || [];
   
//     if(logincustomer.length === 0){
//         alert("No registered users found. Please register first.");
//         return;
//     }


//     let loginUser = logincustomer.find(
//         (ele) => ele.email_id === mail && ele.password === pass
//     );
//     console.log(loginUser)

//     if(loginUser.length > 1){
//         alert("Login successful!");
//         window.location.href = "sho.html"; 
//     }  
//     else {
//      alert("Invalid login credentials. Please fill the register form.");
//     }
// }



function loginForm() {

    let mail = document.getElementById("email").value.trim();
    let pass = document.getElementById("password").value.trim();

    let em_err = document.getElementById("email_error");
    let pass_err = document.getElementById("pass_error");

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let isValid = true;

    // EMAIL VALIDATION
    if (mail === "") {
        em_err.innerText = "Enter your Email Id";
        document.getElementById("email").style.border = "2px solid red";
        isValid = false;
    } 
    else if (!emailRegex.test(mail)) {
        em_err.innerText = "Enter a valid email";
        document.getElementById("email").style.border = "2px solid red";
        isValid = false;
    } 
    else {
        em_err.innerText = "";
        document.getElementById("email").style.border = "2px solid green";
    }

    // PASSWORD VALIDATION
    if (pass === "") {
        pass_err.innerText = "Enter your Password";
        document.getElementById("password").style.border = "2px solid red";
        isValid = false;
    } 
    else if (pass.length < 8) {
        pass_err.innerText = "Password must be at least 8 characters";
        document.getElementById("password").style.border = "2px solid red";
        isValid = false;
    } 
    else {
        pass_err.innerText = "";
        document.getElementById("password").style.border = "2px solid green";
    }

    if (!isValid) return;

    // GET USERS FROM LOCALSTORAGE
    let logincustomer = JSON.parse(localStorage.getItem("customerList")) || [];

    if (logincustomer.length === 0) {
        alert("No registered users found. Please register first.");
        return;
    }

    // CHECK LOGIN
    let loginUser = logincustomer.find(
        (ele) => ele.email_id === mail && ele.password === pass
    );

    if (loginUser) {
         window.location.href="../index.html"   

       alert("Login successful!");
       
          
    } 
    else {
        alert("Invalid login credentials. Please register first.");
    }
}