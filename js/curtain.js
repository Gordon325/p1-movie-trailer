//curtain raise, script found on Jfiddle.com submitted by anon user
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
