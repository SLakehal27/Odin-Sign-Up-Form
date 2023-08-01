const password = document.getElementById("password");
const confirm = document.getElementById("cpassword");
const otherelements = ["fname", "lname", "email", "pnumber"];

var form = document.getElementById("odinform");
function preventClosing(event){event.preventDefault();}
form.addEventListener("submit", preventClosing);

const error = document.querySelector(".formerror");

function validate(){
    for(let i = 0; i < otherelements.length; i++){
        if(document.getElementById(otherelements[i]).value == ""){
            return;
        }
    }

    if(password.value != confirm.value){
        password.style.border = "2px solid red";
        confirm.style.border = "2px solid red";
        error.textContent = "* Passwords do not match";
        return;
    }

    form.removeEventListener("submit", preventClosing);
}
