// navigation
document.onkeydown = function(event) {
  if( document.activeElement === document.querySelector("body") ){
    switch (event.keyCode) {
        case 37:
			if(e=document.getElementById("nextprev-next")){e.click()}
        break;
        case 39:
			if(e=document.getElementById("nextprev-prev")){e.click()}
        break;
        case 27:
			document.getElementById("nextprev-archive").click()
        break;
        }
  }
}

// Yt Embeds
if (document.querySelector(".yt-embed.custom")){
  var script = document.createElement('script');
  script.src = "./../meta/yt-embed.js";
  document.head.appendChild(script);
}