//@codekit-prepend "libs/jquery-1.8.2.min.js";
//@codekit-prepend "libs/jquery.backstretch.js";
//@codekit-prepend "libs/jquery.fittext.js";
//@codekit-prepend "libs/jquery.flexslider.js";
//@codekit-prepend "libs/jquery.api.instagram.js";
//@codekit-prepend "libs/jquery.api.twitter.js";
//@codekit-prepend "libs/jquery.twitter.js";
//@codekit-prepend "libs/jquery.prettyForms.js";
//@codekit-prepend "libs/jquery.counter.js";
//@codekit-prepend "libs/jquery.tipTip.js";
//@codekit-prepend "libs/jquery.api.rdio.js";
//@codekit-prepend "libs/konami.js";

// "libs/ss-social.js", "libs/ss-standard.js", "libs/jquery.lettering.js", "libs/jhere.js";

//Social API Vars
var twitterAPI = $('#twitter');
var instagramAPI = $('#instagram');
var rdioAPI = $('#rdio');
var readmillAPI = $('#readmill');
var twitterID = $('#twitter').prop('id');
var instagramID = $('#instagram').prop('id');
var rdioID = $('#rdio').prop('id');
var readmillID = $('#readmill').prop('id');

$('#readmill').prepend('<p id="readmill-book">Currently Reading: "<a href="http://readmill.com/manikrathee/reads/the-lean-startup-how-todays-entrepreneurs-use-continuous-innovation-to-create-radically-successful-businesses-1" title="The Lean Startup">The Lean Startup</a>"</p>');

// This adds the logo spans which are targetted with symbolset. It is called in api.twitter.js after twitter.html();
function logofyAPI(){
    setTimeout(function(){
        if (instagramActive = true){
        	$(".social-api").prepend('<span class="ss-icon logo"></span>');
        	twitterAPI.find('span.logo').prepend(twitterID);
        	instagramAPI.find('span.logo').prepend(instagramID);
        	rdioAPI.find('span.logo').prepend(rdioID);
        	readmillAPI.find('span.logo').prepend(readmillID);
        	activateAPI();
        }
        else{
        	return;
        }
    }, 1000);
 }
 
 // Callback function for after API js has run to display the API containers
 function activateAPI(){
 	$('.social-api').addClass("run");
	$(".social-api").delay(4500).queue(function(next){
		$(this).addClass('inactive');
		next();
	});
 }

// Nav Hover
function checkWidth() {
	if ($(window).width() > 769){
		$('#portfolio').hover(function(){
			$('.copy').addClass('fade');
			$('#current').addClass('fade');
		}, function(){
			$('.copy').removeClass('fade');
			$('#current').removeClass('fade');
		});
		// TipTip
		$(".tooltip").tipTip({maxWidth: "auto", edgeOffset: 10});
	}
	else{
		$('.copy').removeClass('fade');
	}
};

$(window).resize(function() {
	checkWidth();
});
checkWidth();


// Mobile Nav
var navHook = $('#nav');
var navMenu = $('#navigation');

navHook.click(function(e){
	e.preventDefault();
	e.stopPropagation();
	if (navMenu.hasClass('show')){
	   navMenu.removeClass('show');
   	}
   	else{
		navMenu.addClass('show');
   	}
});

navMenu.click(function(e){
	e.stopPropagation();
});

$(document).click(function() {
   if (navMenu.hasClass('show')){
	   navMenu.removeClass('show');
   }
});


// Rdio API
// R.ready(function() {
// 	R.request({
// 		method: "getTopCharts",
// 		content: {
// 		type: "Track", 
// 		start: 0, 
// 		count: 1
// 		},
// 		success: function(response) {
// 			var top = response.result[0];
// 			console.log(top.name + " by " + top.artist);
// 		},
// 		error: function(response) {
// 			console.log("error");
// 		}
// 	});
// });

// Konami Code
konami = new Konami()
konami.code = function() {
    $('body').addClass('konami');
}

konami.load()


//Slider
$('.flexslider').flexslider();


// TipTip
$(".tooltip").tipTip({maxWidth: "auto", edgeOffset: 10});


// ScrollTop Function
var toTop = $('#top');
toTop.click(function(e) {
	e.preventDefault();
	$('body,html').animate({scrollTop:0},800);
});	


//FitText
// $(".interior h2").fitText(1.2);
$('.interior h3').fitText(1.3);
$('.fit').fitText(1.2);
$('.fit-light').fitText(0.8);


//Counter
var numberOne = $('#about-data').find('#number-one');
var numberOneValue = numberOne.text();
var numberTwo = $('#about-data').find('#number-two');
var numberTwoValue = numberTwo.text();
var numberThree = $('#about-data').find('#number-three');
var numberThreeValue = numberThree.text();
var numberFour = $('#about-data').find('#number-four');
var numberFourValue = numberFour.text();
var numberFive = $('#about-data').find('#number-five');
var numberFiveValue = numberFive.text();
var numberSix = $('#about-data').find('#number-six');
var numberSixValue = numberSix.text();


function startCount() {
	numberOne.countTo({
	    from: 0,
	    to: numberOneValue,
	    speed: 1400,
	    refreshInterval: 5,
	    onComplete: function(value) {
	        // console.debug(this);
	    }
	});
	
	numberTwo.countTo({
	    from: 0,
	    to: numberTwoValue,
	    speed: 1400,
	    refreshInterval: 5,
	    onComplete: function(value) {
	        // console.debug(this);
	    }
	});
	
	numberThree.countTo({
	    from: 0,
	    to: numberThreeValue,
	    speed: 1400,
	    refreshInterval: 5,
	    onComplete: function(value) {
	        // console.debug(this);
	    }
	});
	
	numberFour.countTo({
	    from: 0,
	    to: numberFourValue,
	    speed: 1400,
	    refreshInterval: 5,
	    onComplete: function(value) {
	        // console.debug(this);
	    }
	});
	
	numberFive.countTo({
	    from: 0,
	    to: numberFiveValue,
	    speed: 1400,
	    refreshInterval: 5,
	    onComplete: function(value) {
	        // console.debug(this);
	    }
	});
	
	numberSix.countTo({
	    from: 0,
	    to: numberSixValue,
	    speed: 1400,
	    refreshInterval: 5,
	    onComplete: function(value) {
	        // console.debug(this);
	    }
	});
}

startCount();


// Twitter Button
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
 
 
 // Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-19400273-3']);
_gaq.push(['_trackPageview']);
(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();



// jHere - Maps
// $('#map').jHERE({
//     center: [41.756459, -87.637939],
//     type: 'map',
//     appId: 'kWWUmJFcPYJoF6ayltNy', 
//     authToken: 'VPzI9NANqQaOHgaNF5li1g'
// });