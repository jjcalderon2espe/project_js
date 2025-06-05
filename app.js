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
