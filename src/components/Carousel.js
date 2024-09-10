import React, { useState, useEffect } from 'react';
import '../styles/carousel.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = () => {
  const [imagenes] = useState([
    { url: 'https://i.postimg.cc/pdNc1qdF/1.jpg' },
    { url: 'https://i.postimg.cc/Wbg5q08p/0.jpg' },
    { url: 'https://i.postimg.cc/jjKQ795Z/12-6.jpg' },
    { url: 'https://i.postimg.cc/nzSvNh1P/2.jpg' },
    { url: 'https://i.postimg.cc/3wC1fh6s/3.jpg' },
  ]);
  const [indiceActual, setIndiceActual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceActual((indiceActual + 1) % imagenes.length);
    }, 5000);

    return () => clearInterval(intervalo);
  }, [indiceActual, imagenes.length]);

  const handleFlechaIzquierda = () => {
    setIndiceActual((indiceActual - 1 + imagenes.length) % imagenes.length);
  };

  const handleFlechaDerecha = () => {
    setIndiceActual((indiceActual + 1) % imagenes.length);
  };

  return (
    <div className="carrusel">
      <div className="contenedor-imagenes">
        {imagenes.map((imagen, i) => (
          <img
            key={imagen.url}
            src={imagen.url}
            alt=""
            className={i === indiceActual ? 'imagen-activa' : 'imagen-oculta'}
          />
        ))}
        <button className="flecha izquierda" onClick={handleFlechaIzquierda}>
          <FaChevronLeft />
        </button>
        <button className="flecha derecha" onClick={handleFlechaDerecha}>
          <FaChevronRight />
        </button>
      </div>
      <div className="puntos">
        {imagenes.map((imagen, i) => (
          <button
            key={imagen.url}
            className={`punto ${i === indiceActual ? 'activo' : ''}`}
            onClick={() => setIndiceActual(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

