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

function verTareasUsuario() {
  let id = parseInt(prompt("Ingrese el ID del usuario:"));
  let usuario = obtenerUsuarioPorId(id);
  if (usuario) {
    if (usuario.tareas.length === 0) {
      console.log("Este usuario no tiene tareas.");
    } else {
      console.log(`Tareas de ${usuario.nombre}:`);
      for (let i = 0; i < usuario.tareas.length; i++) {
        let tarea = usuario.tareas[i];
        console.log(`${i + 1}. ${tarea.descripcion} - ${tarea.estado}`);
      }
    }
  } else {
    console.log("Usuario no encontrado.");
  }
}

function agregarTarea() {
  let id = parseInt(prompt("Ingrese el ID del usuario:"));
  let usuario = obtenerUsuarioPorId(id);
  if (usuario) {
    let descripcion = prompt("Ingrese la descripción de la tarea:");
    if (descripcion) {
      usuario.tareas.push({ descripcion: descripcion, estado: "pendiente" });
      console.log("Tarea agregada.");
    } else {
      console.log("Descripción inválida.");
    }
  } else {
    console.log("Usuario no encontrado.");
  }
}

function marcarTareaCompletada() {
  let id = parseInt(prompt("Ingrese el ID del usuario:"));
  let usuario = obtenerUsuarioPorId(id);
  if (usuario) {
    if (usuario.tareas.length === 0) {
      console.log("Este usuario no tiene tareas.");
      return;
    }
    for (let i = 0; i < usuario.tareas.length; i++) {
      let tarea = usuario.tareas[i];
      console.log(`${i + 1}. ${tarea.descripcion} - ${tarea.estado}`);
    }
    let indice = parseInt(prompt("Ingrese el número de la tarea a marcar como completada:")) - 1;
    if (indice >= 0 && indice < usuario.tareas.length) {
      usuario.tareas[indice].estado = "completada";
      console.log("Tarea marcada como completada.");
    } else {
      console.log("Índice inválido.");
    }
  } else {
    console.log("Usuario no encontrado.");
  }
}
