function sesion(){
  let name = document.getElementById("nombre").value;
  let pass = document.getElementById("pass").value;

  if(name != "" && pass!=""){
    var session = {'name': name, 'password': pass}
    localStorage.setItem('session', JSON.stringify(session));
  }else{ 
    alert("Porfavor ingrese, nombre de usuario y contraseña"); 
  } 
  nombre();
}

function nombre(){
  var session = localStorage.getItem('session');
  let name = JSON.parse(session).name;
  document.getElementById("nameSession").innerHTML = name;
  
}