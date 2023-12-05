export const calcularTiempoLectura = (texto: string) => {
  console.log("no entro")
  const palabras = texto.trim().split(/\s+/).length;
  const velocidadLectura = 200;
  const tiempoLectura = palabras / velocidadLectura;
  console.log(tiempoLectura)
  return Math.round(tiempoLectura);
};
