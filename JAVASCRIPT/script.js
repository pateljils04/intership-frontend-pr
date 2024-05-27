let login_form = document.getElementById("login")
login_form.addEventListener("submit",(e)=>{
    e.preventDefault()

    let email = document.getElementById("login-email").value
    let password = document.getElementById("login-password").value
    
    login_obj = {
        email,
        password
    }

    isValid = true;

    if(email == ""){
        isValid = false;
        document.getElementById("LoginEmailError").innerText="Email is Required"
        document.getElementById("LoginEmailError").style.color="red"
    }else{
        document.getElementById("LoginEmailError").innerText=""
    }
    
    if(password == ""){
        isValid = false
        document.getElementById("LoginPasswordError").innerText="Password is Required"
        document.getElementById("LoginPasswordError").style.color="red"
        // document.getElementById("LoginPasswordError").style.border="1px solid #d54d4d"
    }else{
        document.getElementById("LoginPasswordError").innerText=""
    }
    
    let store = signup_arr.filter((el)=>el.email == login_obj.email && el.password == login_obj.password )
    console.log(store)

    if(store[0] && isValid == true){
        alert("Login Successfully")
    }else{
        alert("Incorrect Password || Email")
    }

})

let signup_form = document.getElementById("sign-up")
let signup_arr = JSON.parse(localStorage.getItem("sign_data")) || []
signup_form.addEventListener("submit",(e)=>{
    e.preventDefault()

    let firstname = document.getElementById("firstname").value
    let lastname = document.getElementById("lastname").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    // let co_password = document.getElementById("co_password").value

    if(firstname == ""){
        document.getElementById("SignFirstError").innerText="Firstname is Required"
        document.getElementById("SignFirstError").style.color="red"
    }else{
        document.getElementById("SignFirstError").innerText=""
    }

    if(lastname == ""){
        document.getElementById("SignLastError").innerText="Lastname is Required"
        document.getElementById("SignLastError").style.color="red"
    }else{
        document.getElementById("SignLastError").innerText=""
    }

    if(email == ""){
        document.getElementById("SignEmailError").innerText="Email is Required"
        document.getElementById("SignEmailError").style.color="red"
    }else{
        document.getElementById("SignEmailError").innerText=""
    }

    if(password == ""){
        document.getElementById("SignPasswordError").innerText="Password is Required"
        document.getElementById("SignPasswordError").style.color="red"
    }else{
        document.getElementById("SignPasswordError").innerText=""
    }

    // if(co_password == ""){
    //     document.getElementById("Signco_passwordError").innerText="Confirm Password is Required"
    //     document.getElementById("Signco_passwordError").style.color="red"
    // }else{
    //     document.getElementById("Signco_passwordError").innerText=""
    // }

    signup_obj = {
        firstname,
        lastname,
        email,
        password,
        // co_password
    }
    signup_arr.push(signup_obj)
    localStorage.setItem("sign_data",JSON.stringify(signup_arr))
    console.log("sign_data")

})





