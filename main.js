function validerEmail() {
  var email = document.querySelector("input[name='email']").value;
  if (!email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
    document.querySelector("#message-erreur").innerHTML = "L'email n'est pas valide.";
  } else {
    document.querySelector("#message-erreur").innerHTML = "";
  }
}

document.querySelector("input[type='submit']").addEventListener("click", validerEmail);


setTimeout(function () {

}, 1000); 
setInterval(function () {
  
}, 2000); 
