
import login from "./modules/login.js";

var caja = document.getElementById("caja");


window.cargar = login.registrar;
window.agregar = login.agregar.bind(demo4);


document.getElementById("demo4").addEventListener("click", () => {
  caja.innerHTML = login.data;
  login.registrar();
});


