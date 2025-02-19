import { useState, useEffect } from 'react';

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler para actualizar el tamaño de la pantalla
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Agrega el listener para el evento resize
    window.addEventListener('resize', handleResize);

    // Llama al handler inmediatamente para obtener el tamaño inicial
    handleResize();

    // Elimina el listener en el cleanup para evitar memory leaks
    return () => window.removeEventListener('resize', handleResize);
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar el componente

  return {windowSize};
}