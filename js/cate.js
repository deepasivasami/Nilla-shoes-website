


let catList = JSON.parse(localStorage.getItem("catList")) || [];

let category = () => {

    let categors = document.getElementById("category").value.trim();
    let img = document.getElementById("images").value.trim();

    let cateerror = document.getElementById("caterror");
    let imgerror = document.getElementById("imgerror");

    let ischeck = true;

    // Category Validation
    if (categors === "") {
        cateerror.innerText = "Please enter your category";
        ischeck = false;
    } else {
        cateerror.innerText = "";
    }

    // Image Validation
    if (img === "") {
        imgerror.innerText = "Please enter your image URL";
        ischeck = false;
    } else {
        imgerror.innerText = "";
    }

    
    if (!ischeck) {
        alert("Please enter correct details ");
        return;
    }

    let catogryData = {
        cate_Name: categors,
        images: img,
    };

    catList.push(catogryData);
    localStorage.setItem("catList", JSON.stringify(catList));

    alert("Category Added Successfully");

   
   

    loadData();
};



let loadData = () => {

    let tableBody = document.getElementById("table_Body");

    let tr = "";

    catList.forEach((ele, index) => {
        tr += `
            <tr>
                <td>${index + 1}</td>
                <td>${ele.cate_Name}</td>
                <td>
                    <img src="${ele.images}" width="80" height="60">
                </td>
            </tr>
        `;
    });

    if (catList.length === 0) {
        tr = `<tr><td colspan="3" style="text-align:center;">No Record Found</td></tr>`;
    }

    tableBody.innerHTML = tr;
};

loadData();








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