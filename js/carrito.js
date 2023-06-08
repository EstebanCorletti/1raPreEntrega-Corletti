let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
let direccion = prompt("Ingrese su dirección:");
let telefono = prompt("Ingrese su número de teléfono:");

if (nombre && apellido && direccion && telefono) {
  console.log("Información del usuario:");
  console.log("Nombre: " + nombre);
  console.log("Apellido: " + apellido);
  console.log("Dirección: " + direccion);
  console.log("Teléfono: " + telefono);

  let bienvenida = prompt("¡Bienvenido a Breaking Bar" + " " + nombre + " " + apellido + "\n\n" + "Por favor ingrese el número de la opción que " + "\n\n" + "1 - Reservar Mesa" + "\n" + "2 - Ordenar Algo" + "\n" + "3 - Solo estoy de paso");

  if (bienvenida == 1) {

    const capacidadMaxima = 14;
    let mesasDisponibles = capacidadMaxima;

    for (let i = 1; i <= capacidadMaxima; i++) {
      let cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas para la reservación de la mesa " + i + " o selecciona 0 para salir:"));

      if (cantidadPersonas == 0) {
        console.log("Reserva cancelada");
        alert("¡Perfecto!. Gracias por su visita");
        break;
      } else if (cantidadPersonas > 0 && cantidadPersonas <= capacidadMaxima) {
        if (cantidadPersonas <= mesasDisponibles) {
          mesasDisponibles -= cantidadPersonas;
          console.log("Mesa " + i + " reservada para " + cantidadPersonas + " personas a nombre de " + nombre);
          console.log("Mesas disponibles: " + mesasDisponibles);
          alert("Felicidades. La mesa numero " + i + " está reservada para " + cantidadPersonas + " a tu nombre " + nombre)
        } else {
          console.log("No hay suficiente capacidad para esa cantidad de personas.");
          alert("Lo sentimos, pero no hay sufuciente capacidad. Vuelve a intentarlo en otra oportunidad cuando las mesas se liberen.")
        }
      } else {
        console.log("Cantidad inválida.");
        alert("La cantidad de personas no valida. Por favor, ingrese un número válido dentro del rango de capacidad.")
      }
    }

    if (mesasDisponibles === 0) {
      console.log("No quedan mesas disponibles.");
      alert("Lo sentimos, no quedan mas mesas disponibles, vulve a intentarlo en otra ocación.")
    }

  }

  else if (bienvenida == 2) {

    let seguirOrdenando = true;

    while (seguirOrdenando) {
      let opcion = parseInt(prompt("Ingrese el número de la comida que desea ordenar (0 para salir):\n1. Grande de Muzarella - $1100\n2. Asado completo - $1000\n3. Ensalada Mediterranea - $876.00\n4. Napolitana con fritas - $420.00\n5. Sorrentinos con salsa blanca - $504.00\n6. Bife de ternera con fritas - $400.00\n7. Isla Flotante - $420.00\n8. Pollo al Spiedo - $785.00\n9. Rabas - $324.00\n10. Helado - $500.00"));

      if (opcion === 0) {
        seguirOrdenando = false;
        console.log("Orden finalizada.");
        alert("Orden finalizada. ¡Gracias por tu visita!")
      } else if (opcion >= 1 && opcion <= 10) {
        let comidaSeleccionada;
        let precio;

        if (opcion === 1) {
          comidaSeleccionada = "Grande de Muzarella";
          precio = 1100.00;
        } else if (opcion === 2) {
          comidaSeleccionada = "Asado completo";
          precio = 1000.00;
        } else if (opcion === 3) {
          comidaSeleccionada = "Ensalada Mediterranea";
          precio = 876.00;
        } else if (opcion === 4) {
          comidaSeleccionada = "Napolitana con fritas";
          precio = 420.00;
        } else if (opcion === 5) {
          comidaSeleccionada = "Sorrentinos con salsa blanca";
          precio = 504.00;
        } else if (opcion === 6) {
          comidaSeleccionada = "Bife de ternera con fritas";
          precio = 400.00;
        } else if (opcion === 7) {
          comidaSeleccionada = "Isla Flotante";
          precio = 1000.00;
        } else if (opcion === 8) {
          comidaSeleccionada = "Pollo al spiedo con fritas";
          precio = 785.00;
        } else if (opcion === 9) {
          comidaSeleccionada = "Rabas";
          precio = 324.00;
        }
        else if (opcion === 10) {
          comidaSeleccionada = "Helado";
          precio = 500.00;
        }

        console.log("Ha ordenado: " + comidaSeleccionada);
        console.log("Monto a pagar: $" + precio.toFixed(2));
        alert("Acabas de ordenar " + comidaSeleccionada + ", por un total de " + precio.toFixed(2));
        break
      } else {
        console.log("Opción inválida. Por favor, ingrese un número válido.");
        alert("Comando invalido. Porfavor intentalo nuevamente")
      }
    }

  }

  else if (bienvenida == 3) {
    alert("¡Copiado, espero que disfrutes lo que encontraras aquí!");
    console.log("El usuario solo va a chusmear")
  }
  else {

    alert("Porfavor ingresa una orden valida")
    console.log("La orden no es valida")
  }
}












































