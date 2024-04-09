
const fechaActual = () => {
    const fecha = new Date().toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    return fecha;
  };
  
  export default fechaActual;
  