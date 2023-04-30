
import { productoServices } from "../servicios/productos-servicios.js";

   /* const url = new URL(window.location);
    const id = url.searchParams.get("id"); 

const imageUrl = document.querySelector("[data-url]");
const nombre = document.querySelector("[data-nombre]");
const precio = document.querySelector("[data-precio]");
const descripcion = document.querySelector("[data-descripcion]");

productoServices.listarUnProducto(id).then((datos) => {
  imageUrl.setAttribute("src", datos.imageUrl);
  nombre.value = datos.name;
  precio.value = datos.price;
  descripcion.value = datos.description;
});*/

const verProducto = async() =>{
  const url = new URL(window.location);
  const id = url.searchParams.get("id"); 

  if(id === null){
      console.log("no se pudo obtener el producto")
  }
 
  try{
      const producto = await productoServices.listarUnProducto(id);
      
     
      if(producto.name && producto.price && producto.imageUrl && producto.description){
          const productoSeleccionado = document.querySelector("[data-prod-seleccionado]") 
          const contenidoProducto =  `
                  <div class="prod-sel-img" >
                      <img class="img-sel"src="${producto.imageUrl}"> 
                  </div>
                  <div class="prod-sel-texto">
                  <p class="prod-sel-nom">${producto.name}</p>
                  <p class="prod-sel-precio">${producto.price}</p> 
                  <p class="prod-sel-desc">${producto.description}</p>
                  </div>
                  
                  `;
          
                  productoSeleccionado.innerHTML = contenidoProducto;
                 
      
                  const catSeleccionada = producto.categoria;
                  
                  const idProductoSeleccionado = producto.id;
                  
      
                  const mostrarSeleccionado = document.querySelector("[data-producto-similares]")
      
                  datos.listarUnProducto().then(data =>{
                      
                      data.forEach(({nombre, precio, imagen, id, categoria}) => {
      
      
      
                          if(categoria === "starwars" && catSeleccionada === "starwars" && idProductoSeleccionado != id){
                              const productoNuevo = mostrarProducto(nombre, precio, id,  imagen);
                              
                              mostrarSeleccionado.appendChild(productoNuevo)
                          }else if(categoria === "consolas" && catSeleccionada === "consolas" && idProductoSeleccionado != id){
                              const productoNuevo = mostrarProducto(nombre, precio, id,  imagen);
                              mostrarSeleccionado.appendChild(productoNuevo)
      
                          }else if(categoria === "diversos" && catSeleccionada ==="diversos" && idProductoSeleccionado != id){
                              const productoNuevo = mostrarProducto(nombre, precio, id,  imagen);
                              mostrarSeleccionado.appendChild(productoNuevo)
      
      
                          }
                          
                      });
                  })
                  .catch( error => alert("Ocurrio un error en vista"));
                  
      
                  
              }else{
                  throw new error();
              }
          }catch(error){
              console.log( error)
          }
      }
      verProducto();