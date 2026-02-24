let cartCount = document.querySelector(".cart-count");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const logoutBtn = document.querySelector(".logout");





    // Load cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];





    
    



    // Update cart count
    function updateCartCount() {
      cartCount.innerText = cart.length;
    }

    updateCartCount();







    // Add to Cart
    addToCartButtons.forEach(button => {
      button.addEventListener("click", function () {

        let name = this.dataset.name;
        let price = parseFloat(this.dataset.price);
        let img = this.dataset.img;

        let product = {
          id: name + price,
          name: name,
          price: price,
           img: img,
          

        };



  
        let exists = cart.find(item => item.id === product.id);

        if (exists) {
          alert("Product already in cart!");
        } else {
          cart.push(product);
          localStorage.setItem("cart", JSON.stringify(cart));
          updateCartCount();
          alert("Product added to cart!");
        }

      });
    });






    // Logout
    let lgbtn = document.querySelector(".logout")
lgbtn.addEventListener("click",()=>{
  let logoutCheck = confirm("Do you want to logout ?")
  setTimeout(()=>{
     if(logoutCheck == 1){
    window.location.href = "login.html"
  }
  },1000)
  
})








    

    

    