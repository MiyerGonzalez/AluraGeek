import { Usuario } from "./usuarios.js";

/*const form = document.querySelector("[data-form]");
form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const email = document.querySelector("[data-email]").value;
    const password = document.querySelector("[data-password]").value;

    if (email.lenght > 5 && password.lenght > 5) {
        window.location.href = "../producto.html";
    }else {
        alert("por favor ingrese mas de cinco caracteres en email y password ");
    }
});
*/
const btnLogin = document.querySelector("#btnLogin");

const form = document.querySelector("[data-form]");
form.addEventListener("click", (evento) => {
    evento.preventDefault();

const inputUser = document.querySelector("[data-email]");
const inputPassword = document.querySelector("[data-password]") ;




//console.log(usuario.email1,usuario.password1);

btnLogin.addEventListener("click",(evento)  => {
    const userValue = inputUser.value;
    const passwordValue = inputPassword.value;
    const usuario = new Usuario(userValue, passwordValue);
    const mensaje = JSON.stringify(usuario.validar());
    evento.preventDefault();

    if(usuario.validar() == true) {
        console.log("funciona");
        window.location.href = "/producto.html"
    }else{
        alert(mensaje);   
        evento.preventDefault();
    }

});
});