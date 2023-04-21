import { productoServices } from "../servicios/productos-servicios.js";
import { formatPrice } from "../formatterPrices.js";

const nuevoProduto = (name, price, imageUrl, id) => {
  const card = document.createElement("div");
  const contenido = `
  <a class="ver-produto" href="../info-producto.html?id=${id}">
        <div class="sessao-produtos">
            <img src="${imageUrl}" alt="img">
            <h1 class="prod-titulo"> ${name} </h1>
            <p class="preco">${formatPrice(price)}</p> 
  </a>
    `;
  card.innerHTML = contenido;
  card.dataset.id = id;
  

  return card
};

const producto = document.querySelector("[data-product]");

const render = async () => {
  try {
    const listarProductos = await productoServices.listarProductos();
    listarProductos.forEach((elemento) => {
      producto.appendChild(
        nuevoProduto(
          elemento.name,
          elemento.price,
          elemento.imageUrl,
          elemento.id
        )
      );
    });
  } catch (erro) {
    console.log(erro);
  }
};

render();
