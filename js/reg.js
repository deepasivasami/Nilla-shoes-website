let customerList;
let existproduct = JSON.parse(localStorage.getItem("customerList"))
if (existproduct && existproduct.length >= 1) {
    customerList = existproduct
}
else {
    customerList = [];
}

 const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


let registoreForm = () => {

    debugger;

    let name = document.getElementById("names").value
    let mail = document.getElementById("email").value
    let phone = document.getElementById("number").value
    let pass = document.getElementById("password").value
    let conpass = document.getElementById("conform").value



    let na_err = document.getElementById("name_error")
    let em_err = document.getElementById("email_error")
    let ph_err = document.getElementById("phone_error")
    let pass_err = document.getElementById("pass_error")
    let conform_error = document.getElementById("conform_error")
    debugger;


    let ischeck = true


    if (name === "") {
        na_err.innerText = "Enter your name"
        document.getElementById("names").style.border = "1px solid red"
        let ischeck = false
    }
    else {
        na_err.innerText = ""

    }
    
    if (mail === "" || !emailRegex.test(mail)) {
        em_err.innerText = "Enter valid Email Id";
        document.getElementById("email").style.border = "1px solid red";
        ischeck = false;
    }
   else if (customerList.some(c => c.email_id === mail)) {
        em_err.innerText = "Email already registered";
        document.getElementById("email").style.border = "1px solid red";
        ischeck = false;
   }
    else {
        em_err.innerText = "";
    }

    

if(phone === "") {
    ph_err.innerText = "Enter your phone number";
    document.getElementById("number").style.border = "1px solid red";
    ischeck = false;
} 

else {
    ph_err.innerText = "";
    document.getElementById("number").style.border = "";
}
    
    if (pass === "") {
        pass_err.innerText = "Enter your  password"
        document.getElementById("password").style.border = "1px solid red"
         ischeck = false

    }
    else if (pass.length >8) {
        pass_err.innerText = "must be 8 character"
        document.getElementById("password").style.border = "1px solid red"
         ischeck = false

    }
    else {
        pass_err.innerText = ""
        ischeck = true
        

    }
    if (conpass === "") {
        conform_error.innerText = "Enter your coniform password"
        document.getElementById("conform").style.border = "1px solid red"
        ischeck = false
       

    }
    else if (conpass !== pass) {
        conform_error.innerText = "Password do not match"
        document.getElementById(" conform").style.border = "1px solid red"
        ischeck = false
      


    }
    else {
        conform_error.innerText = "";

    }
    


    if (name&&pass&&mail&&phone&&conpass){



        
    let customerData = {
        
        customerId: Date.now(),
        Customer_Name: name,
        email_id: mail,
        phoneNumber: phone,
        password: pass,
        conpass: conpass,
    };
    customerList.push(customerData)
    localStorage.setItem("customerList", JSON.stringify(customerList))
        alert("Login successfully")

       window.location.href ="../registore/login.html";
    }
    else{
        alert("please enter the correct credientials")
    }
   

   loadingData();    
  

}

    
      
   


 


let loadingData = () => {
    let tbody = document.getElementById("customerLoads")
    let cus_list = JSON.parse(localStorage.getItem("customerList") )||[];

    console.log(cus_list)
     if (cus_list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;">No Record Found</td></tr>`;
        return;
    }

    let tr = "";

    cus_list.forEach((ele) => {
        tr += `
        <tr>
                            <td>${ele.customerId}</td>
                            <td>${ele.Customer_Name}</td>
                            <td>${ele.email_id}</td>
                            <td>${ele.password}</td>
                            <td>${ele.conpass}</td>
                            <td>${ele.phoneNumber}</td>
                        </tr>
                            `;


    })

  
    tbody.innerHTML = tr;

};
loadingData()








let menuBtn = document.querySelector(".fa-bars");
let sidebar = document.querySelector("aside");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");



    
});
document.addEventListener("click", function(e){
    if(!sidebar.contains(e.target) && !menuBtn.contains(e.target)){
        sidebar.classList.remove("active");
    }
});





