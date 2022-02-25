var bt=document.getElementById("show");
if(bt){
    bt.addEventListener("click",function(){
        console.log('clicked');
        var pass=document.getElementById("password");
        var typePas=pass.getAttribute("type");
        if(pass.type=="password"){
            console.log(pass.type);
            pass.type="text";
        }
        else{
            pass.type="password";
            console.log(pass.type);
        }  
        
        
    });

}
var copy=document.getElementById("copy");
copy.addEventListener("click",()=>{
    var content = document.getElementById("emailField");
    content.select();
    navigator.clipboard.writeText( content.value);
    alert("Copied the text: " + content.value);
    console.log(content);
})

const emailField = document.getElementById("emailField");
const response = document.getElementById("response");

emailField .addEventListener("input", function () {
  const email = emailField.value;

    if (validateEmail(email)) {
        response.innerHTML = "Valid Email Adress";
      } else {
        response.innerHTML = "Invalid Email Adress!";
      }
    
  }
);

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}