console.log("password strength indicator");

let msg = document.getElementById("msg");
let password = document.getElementById('password');
let strength = document.getElementById("strength");
let btn = document.getElementById('btn');

password.addEventListener('input',()=>{
    if(password.value.length > 0){
        msg.style.display = "block"
    }else{
        msg.style.display = "none"   
    }

    if(password.value.length<4){
        strength.innerHTML = "weak";
        strength.style.color = "red";
        msg.style.color = "red";
        password.style.borderColor = "red"

    }else if( password.value.length >= 4 && password.value.length <8  ){
        strength.innerHTML = "medium";
        strength.style.color = "yellow";
        msg.style.color = "yellow";
        password.style.borderColor = "yellow"



    }else if(password.value.length >=8){
        strength.innerHTML = "strong";
        strength.style.color = "#26d730";
        msg.style.color = "#26d730";
        password.style.borderColor = "#26d730"

    }
})