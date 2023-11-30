export const calcularTiempoLectura = (texto: string) => {
  const palabras = texto.trim().split(/\s+/).length;
  const velocidadLectura = 200;
  const tiempoLectura = palabras / velocidadLectura;
  return Math.round(tiempoLectura);
};
