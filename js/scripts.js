// My Scripts
// Media Element Player
$('video').mediaelementplayer();
//Lettering
$('h1').lettering();
//Curtain
function classToggle() {
    this.classList.toggle('curtain');
    this.classList.toggle('curtain2');

}
document.querySelector('.curtain').addEventListener('click', classToggle);

$(document).ready(function() {
	$('.curtain').on('click', function(){
		$('.wrapper').toggle();
	});
});
$(document).ready(function() {
	$('.curtain').on('click', function(){
		$('.clickme').toggle();
	});
});



   var baloon = $('#title .char1');
   var baloon2 = $('#title .char2');
var baloon3 = $('#title .char3');
   function runIt() {
       baloon.animate({top:'+=10'}, 2200);
       baloon.animate({top:'-=10'}, 2200, runIt);
       baloon2.animate({top:'-=5'}, 1600);
       baloon2.animate({top:'+=5'}, 1600, runIt);
       baloon3.animate({top:'-=15'}, 1900);
       baloon3.animate({top:'+=15'}, 1900, runIt);
   }


   runIt();

