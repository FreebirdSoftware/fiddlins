
$(document).ready(function(){		
	makeCircles();
});

function makeCircles(){
// Adds coloured circles at random locations and animates them

var numRand = Math.floor(Math.random()*8)
var sHeight = window.innerHeight-500;
var sWidth = window.innerWidth-100;
var thisTop = 0;
var thisLeft = 0;
var thisDiameter = 0;

$('.circles').remove();
$('.glows').remove();

for (var i=0;i<20;i++)
	{ 
		numRand = Math.floor((Math.random()*7)+1);
		thisTop = Math.floor((Math.random()*sHeight)+100);
		thisLeft = Math.floor((Math.random()*sWidth)+1);
		thisDiameter = Math.floor((Math.random()*(sWidth/10))+50);
		
		// Add and format the circles
		$('#bg').append("<div class='circles lines"+ numRand +"' id='"+i+"'></div>");
		$("#" + i).css('height', thisDiameter);
		$("#" + i).css('width', thisDiameter);
		$("#" + i).css('border-radius', (thisDiameter/2));
		$("#" + i).css('top', thisTop);
		$("#" + i).css('left', thisLeft);
		$("#" + i).animate({opacity:0.5}, 1600);
		
		animateStuff("#" + i, 'swing', 10000);			
		
		// Add the glows
		$('#bg').append("<div class='glows' id='glow"+i+"'></div>");
		$("#glow" + i).css('top', thisTop);
		$("#glow" + i).css('left', thisLeft);
			
		animateStuff("#glow" + i, 'easeInCirc', 30000);	
	} // end for

};
		
function animateStuff(myElem, ease, duration){
// Takes the ID of the element to animate, the easing type(may include JQuery UI types if included) and the duration for the animation
	
var varHeight = window.innerHeight/10;
var varWidth = window.innerWidth/10;

var upOrDown = isEven(Math.floor((Math.random()*666)+1));
var plusOrMinus = "";
	
if (upOrDown)
	plusOrMinus = "+=";
else
	plusOrMinus = "-=";
	
	$(myElem).animate({
		left: plusOrMinus+ Math.floor((Math.random()*varWidth)+1),
		top: plusOrMinus+ Math.floor((Math.random()*varHeight)+1)
		}, duration, ease, function() {
		animateStuff(myElem, ease, duration); // calls itself
	});
};	

function isEven(value) {
if (value%2 == 0)
	return true;
else
	return false;
}