jQuery(document).ready(function() {
	checkParrot();
});

window.onscroll = function() {
	checkParrot();
}

window.onresize = function() {
	checkParrot();
}
function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}

checkParrot = function() {
	$('#parrot').addClass('parrot_on');
	$('#micstick').addClass('parrot_on');
	var gap1 = 210;
//	var gap2 = 100;
	var gap3 = getDocHeight() - $(window).height()- 114;
	var D = document;
//	var gap3 = Math.max(D.body.scrollHeight, D.documentElement.scrollHeight);
	var scroll = $(window).scrollTop();
//	console.log("scroll: " + scroll + " / " + gap3);

	$('#parrot').removeClass('sticky');
	$('#parrot').removeClass('stickbot');
	$('#micstick').removeClass('stickbot');

	if(scroll > gap3) {
		$('#parrot').addClass('stickbot');
		$('#micstick').addClass('stickbot');
	} else if(scroll > gap1) {
		$('#parrot').addClass('sticky');
	}

/*	if(scroll > gap2) {
		$('#micstick').addClass('sticky');
	} else {
		$('#micstick').removeClass('sticky');
	}*/
}
