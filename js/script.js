function myFunction(id) {
  var exp = document.getElementById("EXP");
  var edu = document.getElementById("EDU");
  var pers = document.getElementById("PERS");
  if (id == "EXP"){
    exp.style.display = "block";
    edu.style.display = "none";
    pers.style.display = "none";
  }
  if (id == "EDU"){
    exp.style.display = "none";
    edu.style.display = "block";
    pers.style.display = "none";
  }
  if (id == "PERS"){
    exp.style.display = "none";
    edu.style.display = "none";
    pers.style.display = "block";
  }
}