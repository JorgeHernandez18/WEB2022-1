const Json = "https://ServidorTest.carlos-reneren7.repl.co/register";

const xhttp = new XMLHttpRequest();

/* xhttp.onload = function () {
  document.getElementsByClassName("contenido").innerHTML = this.responseText;
}
 */

document.getElementById("btn-register").addEventListener("click", (e) => {
  e.preventDefault();

  let user = document.getElementById("user").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;

  let usuario = {
    "user": user,
    "password": pass,
    "name": name,
    "email": email
  }

  fetch(Json, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(usuario)
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  //window.location.href = "../index.html";

})