import { clienteService } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");



formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    clienteService.crearCliente(nombre,email).then( respuesta => {
        console.log(respuesta);
        window.location.href = "/screens/registro_completado.html"
    }).catch(error => {
        alert(error)
    })
})