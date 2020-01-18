$(function() {

  $('h2').hide().slideDown();
  var $li = $('li');
  $li.hide().each(function(index) {
    $(this).delay(700 * index).fadeIn(700);
  });

  ;

});


$(function() {
  $('li[id="one"]').on('click', function() {
    $(this).animate({
      opacity: 0.0,
      paddingLeft: '+=80'
    }, 500, function() {
      $(this).remove();
	  window.open('asia.html')
    });
  });
});

$(function() {
  $('li[id="two"]').on('click', function() {
    $(this).animate({
      opacity: 0.0,
      paddingLeft: '+=80'
    }, 500, function() {
      $(this).remove();
	  window.open('america.html')
    });
  });
});

$(function() {
  $('li[id="three"]').on('click', function() {
    $(this).animate({
      opacity: 0.0,
      paddingLeft: '+=80'
    }, 500, function() {
      $(this).remove();
	  window.open('europe.html')
    });
  });
});

$(function() {
  $('li[id="four"]').on('click', function() {
    $(this).animate({
      opacity: 0.0,
      paddingLeft: '+=80'
    }, 500, function() {
      $(this).remove();
	  window.open('future.html')
    });
  });
});