// My Scripts
// Media Element Player
$('video').mediaelementplayer();
//Lettering
$('h1').lettering();


//Curtain Raise class toggle
function classToggle() {
    this.classList.toggle('curtain');
    this.classList.toggle('curtain2');
}
document.querySelector('.curtain').addEventListener('click', classToggle);


// The replaces the wrapper when clicking the curtain page, this allows all content to stay hidden until the curtain begins to rise
$(document).ready(function() {
	$('.curtain').on('click', function(){
		$('.wrapper').toggle();
	});
});


// Remove "click to start" box on curtain page
$(document).ready(function() {
	$('.curtain').on('click', function(){
		$('.clickme').toggle();
	});
});


//Floating Letters for the title
   var float = $('#title .char1');
   var float2 = $('#title .char2');
   var float3 = $('#title .char3');
   var float5 = $('#title .char5');
   var float6 = $('#title .char6');
   var float7 = $('#title .char7');
   var float8 = $('#title .char8');
   var float9 = $('#title .char9');
   var float10 = $('#title .char10');
   var float11 = $('#title .char11');
   var float12 = $('#title .char12');
   function runIt() {
       float.animate({top:'+=10'}, 2200);
       float.animate({top:'-=10'}, 2200, runIt);
       float2.animate({top:'-=5'}, 1600);
       float2.animate({top:'+=5'}, 1600, runIt);
       float3.animate({top:'-=15'}, 1900);
       float3.animate({top:'+=15'}, 1900, runIt);
       float5.animate({top:'+=15'}, 2200);
       float5.animate({top:'-=15'}, 2200, runIt);
       float6.animate({top:'-=10'}, 1600);
       float6.animate({top:'+=10'}, 1600, runIt);
       float7.animate({top:'-=5'}, 1900);
       float7.animate({top:'+=5'}, 1900, runIt);
       float8.animate({top:'+=5'}, 2800);
       float8.animate({top:'-=5'}, 1800, runIt);
       float9.animate({top:'-=10'}, 2300);
       float9.animate({top:'+=10'}, 2300, runIt);
       float10.animate({top:'-=15'}, 1700);
       float10.animate({top:'+=15'}, 1700, runIt);
       float11.animate({top:'+=5'}, 2100);
       float11.animate({top:'-=5'}, 2100, runIt);
       float12.animate({top:'-=15'}, 1400);
       float12.animate({top:'+=15'}, 1400, runIt);

   }
runIt();

