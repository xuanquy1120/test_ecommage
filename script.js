$(document).ready(function () {
  $('.list-item').hide();
  $('.list-item:first-child').fadeIn();
  $('.item-menu').click(function () {
    
    $('.item-menu').removeClass('active-item');
    $(this).addClass('active-item');
    let id_content = $(this).children('a').attr('href');
    $('.list-item').hide();
    $(id_content).fadeIn();
    return false;
  } );
});

