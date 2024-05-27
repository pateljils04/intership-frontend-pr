const param = new URLSearchParams(window.location.search)
// console.log(param)
window.addEventListener("load", () => {
  document.getElementById("image").src = param.get("img")
  document.getElementById("title").innerText = param.get("title")
  document.getElementById("price").innerText = param.get("price")
})

let addtocart = document.getElementById("addtocart")
addtocart.addEventListener("click",()=>{
        let cartdata={
            title:param.get("title"),
            image:param.get("img"),
            price:param.get("price"),
        }

        fetch("http://localhost:3000/cart",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(cartdata)
        }).then((res)=>res.json())
        .then((data)=>alert("product add in cart"))
        .catch((err)=>console.log(err))
        console.log(cartdata)
    })


    // let q=1;

    // document.addEventListener("click",(e)=>{
    //     if(e.target.classLis.contains("desc")){
    //         let valid = q>1;;
    //         if(valid){
    //             q--
    //         }
    //         console.log(q)
    //     }
    // })
    // document.addEventListener("click",(e)=>{
    //     if(e.target.classLis.contains("incr")){
    //        q++
    //         console.log(q)
    //     }
    // })