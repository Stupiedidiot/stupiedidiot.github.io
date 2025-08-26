url = window.location.pathname;
relativePath = ".";
if (url.includes("characters/")||url.includes("gallery/")){
	relativePath = "..";
}

if (x = document.getElementById("sideNav")){
	x.innerHTML += '<a onclick="closeNav()">&times;</a><a href="'+relativePath+'/index.html">Overview</a><a href="'+relativePath+'/characters/index.html">Characters</a><a href="'+relativePath+'/gallery/index.html">Gallery</a></a>';
	function openNav(){
		document.getElementById("sideNav").style.width = "300px" ;
	}
	function closeNav(){
		document.getElementById("sideNav").style.width = "0" ;
	}
}
