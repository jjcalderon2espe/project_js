alert("Abre la consola (F12) para usar la aplicación.\nLuego escribe iniciarPrograma(); para comenzar.");

let usuarios = [];

function mostrarMenu() {
  console.log("=== Menú de Gestión de Usuarios y Tareas ===");
  console.log("1. Ver usuarios existentes");
  console.log("2. Agregar nuevo usuario");
  console.log("3. Ver tareas de un usuario");
  console.log("4. Agregar nueva tarea a un usuario");
  console.log("5. Marcar tarea como completada");
  console.log("6. Eliminar una tarea");
  console.log("7. Salir del programa");
}

function obtenerUsuarioPorId(id) {
  for (let usuario of usuarios) {
    if (usuario.id === id) {
      return usuario;
    }
  }
  return null;
}

function verUsuarios() {
  if (usuarios.length === 0) {
    console.log("No hay usuarios registrados.");
  } else {
    console.log("Usuarios:");
    for (let usuario of usuarios) {
      console.log(`ID: ${usuario.id}, Nombre: ${usuario.nombre}`);
    }
  }
}

function agregarUsuario() {
  let nombre = prompt("Ingrese el nombre del nuevo usuario:");
  if (nombre) {
    let id = usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1;
    usuarios.push({ id: id, nombre: nombre, tareas: [] });
    console.log("Usuario agregado correctamente.");
  } else {
    console.log("Nombre inválido.");
  }
}
