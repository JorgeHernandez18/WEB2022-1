const Json = "https://ServidorTest.carlos-reneren7.repl.co/login";

document.getElementById("sign").addEventListener("click", (e) => {

  e.preventDefault();

  let username = document.getElementById('nombre').value;
  let pass = document.getElementById('password').value;

  let users = {
    user: username,
    password: pass
  }

  fetch(Json, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(users)
  })
    //Convierto a json la respuesta
    .then(res => res.json())
    //Respuesta del api
    .then(response => {
      console.log(response)

      if (response.login === true) {
        localStorage.setItem('user', response.user)
        localStorage.setItem('name', response.name)
        window.location.href = "../html/dashboard.html";
      }
    })
    .catch(err => console.log(err))
})

if (localStorage.getItem("user")) {
  window.location.href = "../html/dashboard.html";
}