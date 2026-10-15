
(function () {
  'use strict';

  const anioSpan = document.getElementById('anio-actual');
  if (anioSpan) {
    anioSpan.textContent = new Date().getFullYear();
  }

  const proyectosVacio = document.getElementById('proyectos-vacio');
  const experienciaVacio = document.getElementById('experiencia-vacio');

  if (proyectosVacio && !proyectosVacio.querySelector('span')) {
    const span = document.createElement('span');
    span.setAttribute('aria-hidden', 'true');
    span.textContent = '📭';
    proyectosVacio.prepend(span);
  }

  if (experienciaVacio && !experienciaVacio.querySelector('span')) {
    const span = document.createElement('span');
    span.setAttribute('aria-hidden', 'true');
    span.textContent = '🌱';
    experienciaVacio.prepend(span);
  }

 
  console.log('✅ Portfolio de Kevin Ronquillo Pérez cargado correctamente.');
})();