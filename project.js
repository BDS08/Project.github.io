var typed = new Typed('.type', {
    strings: ['Websites', 'Programming', 'Certificates'],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
  });


$(document).ready(function(){
    $('.modal').modal();
    $('.sidenav').sidenav();
    $('.slider').slider();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
      
});
