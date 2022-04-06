const Json = "https://ServidorTest.carlos-reneren7.repl.co/login";

const xhttp = new XMLHttpRequest();

document.getElementById("sign").addEventListener("click", (e) => {
  e.preventDefault();

  let user = document.getElementById("nombre").value;
  let pass = document.getElementById("password").value;

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
      console.log("entre");
      console.log(this.responseText);
      //window.location.href = "html/dashboard.html";
    }
  };

})