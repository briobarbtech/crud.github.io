// CRUD means :
// Create   - POST
// Read     - GET
// Update   - PUT/PATCH
// Delete   - DELETE

//  Crear una función listaClientes

const listaClientes = () => {
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

export const clienteService = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
}