//todo add comment

document.onclick = function(event) {
    // Compensate for IE<9's non-standard event model
    //
    if (event===undefined) event= window.event;
    var target= 'target' in event? event.target : event.srcElement;

	//alert(document.querySelector(".video-player--theatre"));

	if(document.querySelector(".video-player--theatre") != null) {
		//alert("Mode Theater selected");
		document.querySelector(".right-column--beside").style.width = "70.3rem";
		document.querySelector(".persistent-player--theatre").style.width = "calc(100% - 70rem)";
		document.querySelector(".right-column--beside .channel-root__right-column").style.width = "70.3rem";
		document.querySelector(".video-player__container").style.bottom = "0rem";		
	}
	else {
		document.querySelector(".right-column--beside").style.width = "34rem";
		document.querySelector(".right-column--beside .channel-root__right-column").style.width = "34rem";
	}
};
