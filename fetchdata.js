let productdata =[]
function fetchdata() {
    fetch("https://inter-ship-pr-backend.onrender.com/shoes")
        .then((res) => res.json())
        .then((data) =>{
            cardlist(data)
            productdata=data
        })
        .catch((err) => console.log(err))
}
fetchdata();

function cardlist(data){
    let store = data.map((el)=>singlecard(el.image,el.title,el.price,el.size,el.size2,el.size3,el.size4,el.size5,el.size6))

    // console.log(store)
    document.getElementById("container").innerHTML=store.join("")
}

function singlecard(image,title,price,size,size2,size3,size4,size5,size6){
let card = 
    `<div class="col-12 mt-4 col-sm-6 col-lg-4 text-center mb-2 shoes-card">
    <a href="description.html?title=${encodeURIComponent(title)}&img=${encodeURIComponent(image)}&price=${encodeURIComponent(price)}">
        <img src="${image}" alt="" style="height: 250px; width: 250px;">
        <p class="me-0 mb-2"><a href="">${title}</a></p>
        <p class="price me-0 mb-2">${price}</p>
        <div class="size justify-content-center">
            <a href="#" class="p-2">${size}</a>
            <a href="#" class="p-2">${size2}</a>
            <a href="#" class="p-2">${size3}</a>
            <a href="#" class="p-2">${size4}</a>
            <a href="#" class="p-2">${size5}</a>
            <a href="#" class="p-2">${size6}</a>
        </div>
    </a>
    </div>`
return card
}


// let sortLtoH = document.getElementById("sort-low-to-high")
// let sortHtoL= document.getElementById("sort-high-to-low")

// sortLtoH.addEventListener("click",()=>{
//     let sortLtoHdata= productdata.sort((a,b)=>a.price-b.price)
//     console.log(sortLtoHdata)
//     cardlist(sortLtoHdata)
// })

// sortHtoL.addEventListener("click",()=>{
//     let sortHtoLdata= productdata.sort((a,b)=>b.price-a.price)
//     cardlist(sortHtoLdata)
// })