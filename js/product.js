

 let productList;
let existproduct=JSON.parse(localStorage.getItem("productList"))
  if(existproduct && existproduct.length>=1){

    productList=existproduct
}
else{
  productList =[];
}









let submitData = () => {

         debugger
            let imageurl = document.getElementById("pro1").value
            let productname = document.getElementById("pro2").value
            let Category = document.getElementById("pro3").value
            let price = document.getElementById("pro4").value
            let stock = document.getElementById("pro5").value
            let offer = document.getElementById("pro6").value



            let im_error = document.getElementById("img_error")
            let na_error = document.getElementById("name_error")
            let cate_error = document.getElementById("cate_error")
            let pri_error = document.getElementById("price_error")
            let st_error = document.getElementById("stock_error")
            let offpri_error = document.getElementById("offers_error")



            let ischeck = true

            if ( imageurl === "") {
                im_error.innerText = "Enter your image url"
                document.getElementById("pro1").style.border="2px solid red"
                ischeck=false
            }
           
            else {
                im_error.innerText = ""
                // ischeck = true
            }
            if ( productname === "") {
                na_error.innerText = "Enter your  product name"
                document.getElementById("pro2").style.border="2px solid red"
                ischeck=false
            }
           
            else {
                na_error.innerText = ""
                // ischeck = true
            }
            if ( Category === "") {
               cate_error.innerText = "Enter your category"
               document.getElementById("pro3").style.border=" 2px solid red"
               ischeck=false
            }
           
            else {
                cate_error.innerText = ""
                // ischeck = true
            }
             if ( price === "") {
                pri_error.innerText = " Enter your price can't be empty "
                document.getElementById("pro4").style.border="2px solid red"
                ischeck=false
            }
            else if ( price <= 0 ) {
                 pri_error.innerText = "invalid price"
                 ischeck=false
            }
            else {
               pri_error.innerText = ""
            //    ischeck = true
            }
             if ( stock === "") {
               st_error.innerText = " Enter your price can't be empty "
               document.getElementById("pro5").style.border="2px solid red"
               ischeck=false
            }
            else if ( stock <= 0 ) {
                st_error.innerText = "invalid stock"
                ischeck=false
            }
            else {
              st_error.innerText = ""
            //   ischeck = true
            }
            if ( offer === "") {
              offpri_error.innerText = " Enter your price can't be empty "
              document.getElementById("pro6").style.border="2px solid red"
              ischeck=false
            }
            else if (offer <= 0 ) {
                offpri_error.innerText = "invalid offer"
                ischeck=false
            }
            else {
             offpri_error.innerText = ""
            //  ischeck = true
            }


       if(ischeck){
         alert("fill the all product")



         let productData ={
        productId: Date.now(),
        product_Name: productname,
        product_img: imageurl,
        Category: Category,
        price: price,
        stock: stock,
        offerprice: offer,
       };
         productList.push(productData)
       localStorage.setItem("productList",JSON.stringify(productList))

     

           
        }


        else{
              alert("please enter the all document correct")
        }
 loadingData();
        
       }


       
   

         



         
        let loadingData = () => {
 let tbody = document.getElementById("productLoads");
    let prolist = JSON.parse(localStorage.getItem("productList"))|| [];

    

     if (prolist.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;">No Record Found</td></tr>`;
        return;
    }

   let tr = "";
        prolist.forEach((ele) => {
             tr += `
            <tr>
                <td>${ele.productId}</td>
                <td><img src="${ele.product_img}" alt="${ele.product_Name}" width="50"/></td>
                <td>${ele.product_Name}</td>
                <td>${ele.Category}</td>
                <td>${ele.price}</td>
                <td>${ele.stock}</td>
                <td>${ele.offerprice}</td>
                <td>
                    <button onclick="updateproduct(${ele.productId})">Update</button>
                    <button onclick="deletePro(${ele.productId})">Delete</button>
                </td>
            </tr>
        `;
    });
    

    tbody.innerHTML = tr;
};


loadingData();



let  updateproduct =(productId) =>{

    let products = productList.find(ele => ele.productId == productId);

    if (!products) return;



     document.getElementById("pro1").value = products.product_img;
    document.getElementById("pro2").value = products.product_Name;
    document.getElementById("pro3").value = products.Category;
    document.getElementById("pro4").value = products.price;
    document.getElementById("pro5").value = products.stock;
    document.getElementById("pro6").value = products.offerprice;
    document.getElementById("productId").value = products.productId;

    document.getElementById("submitbtn").style.display = "none";
    document.getElementById("updatebtn").style.display = "block";
};


let updateData = () => {
    let pro_id = Number(document.getElementById("productId").value);
    let pro_img = document.getElementById("pro1").value;
    let pro_name = document.getElementById("pro2").value;
    let category = document.getElementById("pro3").value;
    let price = document.getElementById("pro4").value;
    let stock = document.getElementById("pro5").value;
    let offer = document.getElementById("pro6").value;

 productList = productList.map((ele) => {
        if (ele.productId === pro_id) {
            return {
                productId: pro_id,
                product_Name: pro_name,
                product_img: pro_img,
                Category: category,
                price: price,
                stock: stock,
                offerprice: offer
            };
        }
        return ele;
    });



    localStorage.setItem("productList", JSON.stringify(productList));
    alert("Product updated successfully");

    document.getElementById("submitbtn").style.display = "block";
    document.getElementById("updatebtn").style.display = "none";

loadingData();

};


 




let deletePro = (productId) => {
     if (confirm("Do you want to delete this product?")) {
        productList = productList.filter(ele => ele.productId != productId);
        localStorage.setItem("productList", JSON.stringify(productList));
        alert("Product deleted successfully");
        loadingData();
    }
};

loadingData();




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



