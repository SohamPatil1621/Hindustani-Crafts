function add() {
     var name= document.getElementById("fname");
     localStorage.setItem("name", name.value);
     var mail= document.getElementById("email");
     localStorage.setItem("email", mail.value);
}