
import registrar from "./modules/registrar.js";
import basket from "./modules/basket.js";

var caja = document.getElementById("caja");


window.cargar = registrar.registrar;
window.agregar = registrar.agregar.bind(registrar);


document.getElementById("registrar").addEventListener("click", () => {
  caja.innerHTML = registrar.data;
  registrar.registrar();
});



document.getElementById("basket").addEventListener("click", () => {
  caja.innerHTML = basket.data;
});

