const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function Func() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", Func);
});



 function validation() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var tel = document.getElementById("tel");
  var sexe = document.getElementById("sexe");
  var date = document.getElementById("date");
  var hor = document.getElementById("horaire");
  var msg = document.getElementById("error-msg");
  var text;

msg.style.padding= '10px';
  if (name.value=== ""  ){
    text= 'nom est prenom est requis ';
    
    msg.innerHTML=text;
    return false ;
  }
  if (name.value.length < 3  ){
    text= 'nom est prenom au moins 3 char ';
    msg.innerHTML=text;
    return false ;
  }

  if (email.value === ""  ){
    text= 'veuiller entrer votre email ';
    msg.innerHTML=text;
    return false ;
  }
  if (tel.value === ""  ){
    text= 'numero de telephone est requis ';
    msg.innerHTML=text;
    return false ;
  }
   if (isNaN(tel.value) || tel.value.length !=8  ){
    text= 'enter le numero de telephone correctement ';
    msg.innerHTML=text;
    return false ;
  } 
  
  if (sexe.value === ""  ){
    text= 'veuiller selectionner votre sexe ! ';
    msg.innerHTML=text;
    return false ;
  }
if (date.value === ""  ){
    text= 'date de naissance !';
    msg.innerHTML=text;
    return false ;
  }

  if (hor.value === ""  ){
    text= 'veuiller selectionnerles horraires ! ';
    msg.innerHTML=text;
    return false ;
  }
alert ("form submitted successfully ! ")
  return true ; 
}
 