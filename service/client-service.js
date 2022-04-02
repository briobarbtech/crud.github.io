// CRUD means :
// Create   - POST
// Read     - GET
// Update   - PUT/PATCH
// Delete   - DELETE

//  Crear una función listaClientes

function listaClientes () {
    return fetch("http://localhost:3000/perfil").then( respuesta => {
      return respuesta.json() 
    })
}

const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "content-Type": "application/json"
    },
    body: JSON.stringify({nombre,email, id: uuid.v4() })
  })
}

const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE",
  })
}

const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json())
}

const actualizarCliente = (nombre, email, id) => {
  return fetch( `http://localhost:3000/perfil/${id}`,{
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({nombre, email}),
  }).then((respuesta) => console.log(respuesta)).catch((error) => console.log(error))
}

export const clienteService = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
}