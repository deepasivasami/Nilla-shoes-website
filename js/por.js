let customerList = JSON.parse(localStorage.getItem("customerList")) || [];
  const pattern = /^[+]{1}(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let registoreForm = () => {

    let name = document.getElementById("names").value.trim();
    let mail = document.getElementById("email").value.trim();
    let phone = document.getElementById("number").value.trim();
    let pass = document.getElementById("password").value.trim();
    let conpass = document.getElementById("conform").value.trim();

    let na_err = document.getElementById("name_error");
    let em_err = document.getElementById("email_error");
    let ph_err = document.getElementById("phone_error");
    let pass_err = document.getElementById("pass_error");
    let conform_error = document.getElementById("conform_error");

    let ischeck = true; // assume all valid first

    // Name validation
    if (name === "") {
        na_err.innerText = "Enter your name";
        document.getElementById("names").style.border = "1px solid red";
        ischeck = false;
    } else {
        na_err.innerText = "";
        document.getElementById("names").style.border = "";
    }

    // Email validation
    if (mail === "" || !emailRegex.test(mail)) {
        em_err.innerText = "Enter valid Email Id";
        document.getElementById("email").style.border = "1px solid red";
        ischeck = false;
    } else {
        em_err.innerText = "";
        document.getElementById("email").style.border = "";
    }

    // Phone validation
    if (phone === "") {
        ph_err.innerText = "Enter your Phone number";
        document.getElementById("number").style.border = "1px solid red";
        ischeck = false;
    } else {
        ph_err.innerText = "";
        document.getElementById("number").style.border = "";
    }

    // Password validation
    if (pass === "") {
        pass_err.innerText = "Enter your password";
        document.getElementById("password").style.border = "1px solid red";
        ischeck = false;
    } else if (pass.length < 8) {
        pass_err.innerText = "Password must be at least 8 characters";
        document.getElementById("password").style.border = "1px solid red";
        ischeck = false;
    } else {
        pass_err.innerText = "";
        document.getElementById("password").style.border = "";
    }

    // Confirm password validation
    if (conpass === "") {
        conform_error.innerText = "Enter your confirm password";
        document.getElementById("conform").style.border = "1px solid red";
        ischeck = false;
    } else if (conpass !== pass) {
        conform_error.innerText = "Passwords do not match";
        document.getElementById("conform").style.border = "1px solid red";
        ischeck = false;
    } else {
        conform_error.innerText = "";
        document.getElementById("conform").style.border = "";
    }

    // Only if all validations pass
    if (!ischeck) return; // stop execution if invalid

    alert("All fields filled successfully");

    let customerData = {
        customerId: Date.now(),
        Customer_Name: name,
        email_id: mail,
        phoneNumber: phone,
        password: pass
    };

    customerList.push(customerData);
    localStorage.setItem("customerList", JSON.stringify(customerList));

    loadingData();

    // Redirect after saving
    window.location.href = "login.html";
}


let loadingData = () => {
    let tbody = document.getElementById("customerLoads");
    let cus_list = JSON.parse(localStorage.getItem("customerList")) || [];

    let tr = '';

    cus_list.forEach(ele => {
        tr += `<tr>
            <td>${ele.customerId}</td>
            <td>${ele.Customer_Name}</td>
            <td>${ele.email_id}</td>
            <td>${ele.password}</td>
            <td>${ele.phoneNumber}</td>
        </tr>`;
    });

    tbody.innerHTML = tr;
}

// Load table on page load
loadingData();