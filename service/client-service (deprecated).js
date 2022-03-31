const crearNuevaLinea = (nombre, email) => {
    const linea = document.createElement('tr')
    const contenido = `<td class="td" data-td>${nombre}</td>
            <td>${email}</td>
            <td>
              <ul class="table__button-control">
                <li>
                  <a
                    href="../screens/editar_cliente.html"
                    class="simple-button simple-button--edit"
                    >Editar</a
                  >
                </li>
                <li>
                  <button
                    class="simple-button simple-button--delete"
                    type="button"
                  >
                    Eliminar
                  </button>
                </li>
              </ul>
            </td>`
            linea.innerHTML = contenido;
            return linea;
}

const table = document.querySelector('[data-table');


// CRUD means :
// Create   - POST
// Read     - GET
// Update   - PUT/PATCH
// Delete   - DELETE

//  Crear una función listaClientes

const listaClientes = () => {
    const promise = new Promise((resolve, reject) => {
        //  Abrir http
        const http = new XMLHttpRequest;
        http.open("GET",  "http://localhost:3000/perfil")
        //  Enviamos la petición
        http.send()
        //  Una vez que cargue vas a ejecutar la siguiente función 
        http.onload = () => {
            const response = JSON.parse(http.response);
            if (http.status >= 400){
                reject(response);
            }
            else{
                resolve(response);
            }
        };
    })
    return promise;
}

listaClientes().then((data) => {
    data.forEach(perfil => {
        const nuevaLinea = crearNuevaLinea(perfil.nombre,perfil.email);
        table.appendChild(nuevaLinea);
    });
}).catch((error) => {
    alert("Ocurrió un error")
});



