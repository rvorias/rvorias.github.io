function myFunction(id) {
  var exp = document.getElementById("EXP");
  var edu = document.getElementById("EDU");
  var bio = document.getElementById("BIO");
  if (id == "EXP"){
    exp.style.display = "block";
    edu.style.display = "none";
    bio.style.display = "none";
  }
  if (id == "EDU"){
    exp.style.display = "none";
    edu.style.display = "block";
    bio.style.display = "none";
  }
  if (id == "BIO"){
    exp.style.display = "none";
    edu.style.display = "none";
    bio.style.display = "block";
  }
}