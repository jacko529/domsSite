jQuery( document ).ready( function( $ ) {






  $('.hamburger').click(function(){
    alert(hello);
    $(this).toggleClass('is-active')
    if ($(this).hasClass('is-active')){
      $('.overlay').addClass('is-open no-delay translate').removeClass('delay')
      $('.overlay ul li').addClass('is-shown delay').removeClass('no-delay')
    }else{
      $('.overlay').removeClass('is-open no-delay translate').addClass('delay')
      $('.overlay ul li').removeClass('is-shown delay').addClass('no-delay')
    }
  })
});
