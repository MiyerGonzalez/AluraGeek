import { productoServices } from "../servicios/productos-servicios.js";

const form = document.querySelector("[data-form]");


form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const name = document.querySelector("[data-nombre]").value;
  const imageUrl = document.querySelector("[data-url]").value;
  const price = document.querySelector("[data-precio]").value;

  productoServices
    .creaProductos(name, imageUrl, price)
    .then((respuesta) => {
      window.location.href = "../index.html";
      console.log(respuesta);
    })
    .catch((err) => {
      console.log(err);
    });
});