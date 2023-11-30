export const  verificarFecha = (fecha:string) => {
    const fechaActual = new Date();
    const fechaPasada = new Date(fecha);
  
    const fechaActualFormateada = new Date(fechaActual.toDateString());
    const fechaPasadaFormateada = new Date(fechaPasada.toDateString());
  
    const diferenciaMilisegundos = fechaActualFormateada - fechaPasadaFormateada;
    const diferenciaDias = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));
  
    if (diferenciaDias === 0) {
      return "Hoy";
    } else {
      return `hace ${diferenciaDias} días`;
    }
  };