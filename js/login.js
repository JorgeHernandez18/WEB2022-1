const Json = "https://ServidorTest.carlos-reneren7.repl.co/login";

const xhttp = new XMLHttpRequest();
xhttp.onload = function () {

  document.getElementsByClassName("contenido").innerHTML = this.responseText;
}

document.getElementById("sign").addEventListener("click", (e) => {
  e.preventDefault();
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;

  let usuario = {
    "user": user,
    "password": pass
  }

  xhttp.open("POST", Json, true);
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(JSON.stringify(usuario));


  xhttp.onreadystatechange = function () {
    //ready state indica que el estado cambio, 200 es el valor de una respuesta exitosa
    if (this.readyState == 4 && this.status < 400) {
      var responseJsonObj = JSON.parse(this.responseText);
      //this.responseText es la respuesta de la api
      console.log(responseJsonObj);
      if(usuario.password === responseJsonObj)
      window.open("../index.html", "_self");
    }
  };
})
