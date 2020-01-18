$(function() {

  $('div').hide().delay(500).slideDown();
  var $tr=$('tr')
  $tr.hide().each(function(index){$(this).delay(1000*(index+1)).fadeIn(1000);})
  

  

});// JavaScript Document