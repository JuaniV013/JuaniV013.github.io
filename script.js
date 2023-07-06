document.addEventListener('DOMContentLoaded', function() {
  var loader = document.querySelector('.croissant');
  var background = document.querySelector('.back');
  var nav = document.querySelector('nav');
  var produccionLink = document.querySelector('a[href="Produccion.html"]');

  // Verifica si la página anterior fue la página de producción
  var previousPage = sessionStorage.getItem('previousPage');
  if (previousPage === 'Produccion.html') {
    // Muestra el croissant y oculta la página anterior
    background.style.background = 'none'; 
    loader.style.display = 'block';
    nav.style.display = 'none';
  }

  produccionLink.addEventListener('click', function(event) {
    event.preventDefault(); // Evita que se siga el enlace de forma predeterminada
    
    // Realiza la animación antes de redireccionar
    background.style.background = 'none'; 
    loader.style.display = 'block';
    nav.style.display = 'none';

    setTimeout(function() {
      // Redirecciona a la página de producción
      sessionStorage.setItem('previousPage', 'Produccion.html');
      window.location.href = produccionLink.href;
    }, 3000); // Espera 3 segundos antes de redireccionar (ajusta el tiempo según sea necesario)
  });

  window.addEventListener('unload', function() {
    // Detener la animación del croissant
    var croissant = document.querySelector('.croissant');
    croissant.style.animationPlayState = 'paused';
  });
});


