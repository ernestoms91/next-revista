export const formatearFecha = (fechaString: string): string => {
    const meses = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
      'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];
  
    const partes = fechaString.split('T')[0].split('-');
    const dia = partes[2];
    const mes = meses[parseInt(partes[1], 10) - 1];
    const año = partes[0];
  
    return `${dia}-${mes}-${año}`;
  };
  
  