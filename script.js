$(document).ready(function() {
  $(".enviar").on('click', function() {
    var twit = $("textarea").val();
    $(".wall").append(''+
      '<div class="col-md-12 box row">'+
        '<img src="img/instalogo.png" alt="Logo intagram" class="avatar">'+
        '<i class="fas fa-times"></i>'+
        '<p>'+twit+'</p>'+
        '<i class="fas fa-heart"></i>'+
        '<span class="counter"> 0</span>'+
      '</div>');
  });

  $("#container-tweets").on('click', '.fa-heart', function() {
    $(this).toggleClass('fill');
    var counter = $(this).siblings('.counter').text();
    if(counter==0){
      counter++;
    }else{
      counter--;
    }
    console.log(counter);
    $(this).siblings('.counter').text(counter);
  });

  $("#container-tweets").on('click', '.fa-times', function() {
    $(this).closest('.box').remove();
  });
});
