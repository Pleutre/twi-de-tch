//todo add comment

document.onclick = function(event) {
    // Compensate for IE<9's non-standard event model
    //
    if (event===undefined) event= window.event;
    var target= 'target' in event? event.target : event.srcElement;

	/* Calculated value for the new width of the chat column */
	var tmp_width = window.innerWidth - 16/9*window.innerHeight;
	var font_size = parseInt(window.getComputedStyle(document.querySelector('html')).getPropertyValue("font-size"));
	
	alert("Width="+window.innerWidth+
		"; height="+window.innerHeight+
		";\nratio="+(window.innerWidth/window.innerHeight)+
		";\ntmp_width ="+tmp_width+
		";\nfont-size ="+font_size);
		
	tmp_width = tmp_width/font_size;	//

	if(document.querySelector(".video-player--theatre") != null && (tmp_width > 34)) {
		//alert("Mode Theater selected");
		
		//alert("calc(100% - "+String(tmp_width)+"rem)");
		document.querySelector(".persistent-player--theatre").style.width = "calc(100% - "+String(tmp_width)+"rem)";
		document.querySelector(".right-column--beside").style.width = String(tmp_width)+"rem";
		document.querySelector(".right-column--beside .channel-root__right-column").style.width = String(tmp_width)+"rem";
		document.querySelector(".video-player__container").style.bottom = "0rem";		
	}
	else {
		document.querySelector(".right-column--beside").style.width = "34rem";
		document.querySelector(".right-column--beside .channel-root__right-column").style.width = "34rem";
		document.querySelector(".persistent-player--theatre").style.width = "calc(100% - 34rem)";
	}
};
