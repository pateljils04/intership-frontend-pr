 // add to cart

 function fetchdata() {
    fetch("http://localhost:3000/cart")
        .then((res) => res.json())
        .then((data) => listcart(data))
        .catch((err) => console.log(err))
}
fetchdata();

function listcart(data) {
    let store = data.map((el) => cartitem(el.image, el.title, el.price, el.id))
    // console.log(store)
    document.getElementById("cartfetchdata").innerHTML = store.join("")
}

function cartitem(image, title, price, id) {
    let cartcard = `
    <div class="item m-0 pb-3 " data-id="${id} style="border-bottom: 1px solid grey;">
        <div class="cart-img p-2 pt-4 d-flex">
            <img src="${image}" alt="" height="94px" width="94px">
            <div class=" ps-3 cart-cont ">
                <p class="m-0 title" style="font-size: 16px; font-weight: 600;">${title}</p>
                <p class="m-0" style="font-size: 12px; font-weight: 500;">medium grey (light grey sole)</p>
                <p class="m-0" style="font-size: 12px; font-weight: 500;">Selected Size</p>
                <div class="btn-qu ps-3 mt-2" style="border: 2px solid rgb(105, 104, 104); width: 41%;">
                    <span class="minus" style="color:rgb(105, 104, 104);">-</span>
                    <span class="">1</span>
                    <span class="plus" style="color:rgb(105, 104, 104);">+</span>
                </div>

            </div>
            <div class="cart-price ps-3 m-0">
                <p class="m-0 price ps-3 pb-5">${price}</p>
                <a href="" class="ps-3 removebtn" id="removebtn" style="color:black; font-size:13px" data-id="${id} ">Remove</a>
            </div>
        </div>
    </div>`
    return cartcard;
}

// delete cart product

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("removebtn")) {
        dataProduct(e.target.dataset.id);
    }
})

function dataProduct(id) {
    fetch(`http://localhost:3000/cart/${id}`, {
        method: 'DELETE',
    })
        .then((res) => res.json())
        .then((data) => {
            alert("Product Deleted...")
            fetchdata()
        })
        .catch((err) => {
            console.log(err)
            alert("Product Deleted...")
            // alert("some thing wrong...")
        })
}

// close cart

let carticon = document.getElementById("carticon");
let cart = document.getElementById("cart-tab")
let closecart = document.getElementById("close-cart")

carticon.addEventListener("click",()=>{
cart.classList.add("active-cart")
})
closecart.addEventListener("click",()=>{
cart.classList.remove("active-cart")
})

