let back = document.getElementById("volver").onclick = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("name");
  }