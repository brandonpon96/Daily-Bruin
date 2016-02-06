$(document).ready(function() {
  $('#overlay').fadeIn(800);
  $('#overlay').animate({
  	//opacity: 1.0,
  	top:'+=70'
  },800);


  	$("a.button").hover(
		function(){
			$(this).stop().animate({width: 160, height: 160, 'margin-left': '80','margin-top': '5'}, 100);
		},
		function(){
			$(this).stop().animate({width: 150, height: 150, 'margin-left': '85','margin-top': '10'}, 300);
	});

	$('#overlay').hover(
		function(){
			$(this).css('color', 'yellow');
		},
		function(){
			$(this).css('color', 'white');
	});
});

// function pop(){
// 	$('a.button').animate({width: 160, height: 160, 'margin-left': '80','margin-top': '5'}, 100);
// 	$('a.button').stop().animate({width: 150, height: 150, 'margin-left': '85','margin-top': '10'}, 100,pop);
// }



