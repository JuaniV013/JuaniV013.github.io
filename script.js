document.addEventListener('DOMContentLoaded', function() {
    var loader = document.querySelector('.croissant');
    var background = document.querySelector('.back');
    var nav = document.querySelector('nav');
    var produccionLink = document.querySelector('a[href="Produccion.html"]');
  
    background.style.background = 'none'; 
    loader.style.display = 'block';
    nav.style.display = 'none';
  
    produccionLink.addEventListener('click', function(event) {
      event.preventDefault(); // Evita que se siga el enlace de forma predeterminada
      
      // Realiza la animación antes de redireccionar
      background.style.background = 'none'; 
      loader.style.display = 'block'
      nav.style.display = 'none'
  
      setTimeout(function() {
        // Redirecciona a la página de producción
        background.style.background = 'url("Mordiscologo.png") no-repeat top center #202325';
        window.location.href = produccionLink.href;
      }, 3000); // Espera 1 segundo antes de redireccionar (ajusta el tiempo según sea necesario)
    });
  
    setTimeout(function() {
      background.style.background = 'url("Mordiscologo.png") no-repeat center center #202325';
      loader.style.display = 'none';
      nav.style.display = 'block';
    }, 5000);
  });
  
  window.addEventListener('unload', function() {
    // Detener la animación del croissant
    var croissant = document.querySelector('.croissant');
    croissant.style.animationPlayState = 'paused';
  });
  

