$(document).ready(function() {
  setInterval(function() {
    var firstSlide = $('#slider li').first();
    $('#slider li').first().animate({
      left: "-=50",
      opacity: 0
    }, 300, function() {
    }).animate({
      left: "+=100",
    }, 300, function() {
    });
    $('#slider li').first().remove();
    $('#slider').append(firstSlide);
  }, 2000);
});
