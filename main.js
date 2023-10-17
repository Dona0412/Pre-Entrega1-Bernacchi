function cambio() {
    let clienteATransferir = 1; 
  
    while (clienteATransferir !== 0) {
      clienteATransferir = parseInt(prompt("Ingrese la cantidad de Pesos Argentinos que desea cambiar a Dólares, ingrese 0 para salir del programa"));
      
      if (clienteATransferir !== 0) {
        let dolares = clienteATransferir * 0.049;
        console.log("Cantidad en Dólares: $" + dolares.toFixed(2));
      } else {
        console.log("Saliendo del programa, que tenga un buen día");
      }
    }
  }
  cambio();

