const inputs=document.querySelectorAll("input");
for (let input of inputs){
    input.required=true;
}
const input_password=document.querySelector("#password");
const c_input_password=document.querySelector("#confirm-password");
const btn=document.querySelector("button");
btn.addEventListener("click",function(){
    if(input_password.value!=c_input_password.value)
        alert("Incorrect password!Please ensure that the passwords match.");
})

