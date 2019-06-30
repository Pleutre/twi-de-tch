//todo add comment

document.onclick= function(event) {
    // Compensate for IE<9's non-standard event model
    //
    if (event===undefined) event= window.event;
    var target= 'target' in event? event.target : event.srcElement;

	if (target.className == "player-button qa-theatre-mode-button"){
		//alert("Changed Theater mode");		
		if(document.querySelector("#icon_theatre_deactivate") != null) {
			document.querySelector(".right-column--beside").style.width = "78rem";
			document.querySelector(".persistent-player--theatre").style.width = "calc(100% - 78rem)";
			document.querySelector(".right-column--beside .channel-root__right-column").style.width = "78rem";
			document.querySelector(".video-player__container").style.bottom = "0rem";
		}
		else {
			document.querySelector(".right-column--beside").style.width = "34rem";
			document.querySelector(".persistent-player--theatre").style.width = "calc(100% - 34rem)";
			document.querySelector(".right-column--beside .channel-root__right-column").style.width = "34rem";
			document.querySelector(".video-player__container").style.bottom = "0rem";
		}
	}
};
