function saludar(nombre) {
  if (!nombre) {
    console.warn("No se proporcionó un nombre");
    return;
  }

  const mensaje = `¡Hola, ${nombre}! Bienvenido.`;
  console.log(mensaje);
}

saludar("Lincolm");
