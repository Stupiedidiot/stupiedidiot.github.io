url = window.location.pathname;
relativePath = ".";
if (url.includes("artwork/")){relativePath = "..";}

function Addto(id,text,style){
	if (document.getElementById(id)) {
		document.getElementById(id).innerHTML += text;
		if (style!== null){
		document.getElementById(id).className = style;
		}
	}
}
Addto("navi",'<div><a href="'+relativePath+'/../index.html"><div><img src="https://cdn.discordapp.com/attachments/1152541873274093610/1152542019902775326/home-white.png"></a><a onclick="openNav()"></div><div><img src="https://cdn.discordapp.com/attachments/1152541873274093610/1152542020242526248/menu-white.png"></a><a href="'+relativePath+'/index.html"></div><div><img src="https://cdn.discordapp.com/attachments/1152541873274093610/1152542020968128552/pencil-white.png"></a><a href="#"></div><div><img src="https://cdn.discordapp.com/attachments/1152541873274093610/1152542020640981112/pay-white.png"></a><a href="#"></div><div><img src="https://cdn.discordapp.com/attachments/1152541873274093610/1152542019533684776/heart-white.png"></a></div></div>')
sideNavHTML = document.createElement('div');
sideNavHTML.id = 'sideNav';
sideNavHTML.innerHTML='<div><h1>Welcome!</h1><p>Enjoy your stay :D</p></div><h2><a onclick="closeNav()">&times;</a></h2><h2><a href="'+relativePath+'/index.html">Featured</a></h2><div class="art"><h2><a href="'+relativePath+'">Artworks</a></h2><ul><li><a href="'+relativePath+'/artwork/2023.html">2023</a></li><li><a href="'+relativePath+'/artwork/2022.html">2022</a></li><li><a href="'+relativePath+'/artwork/2021.html">2021</a></li><li><a href="'+relativePath+'/artwork/2020.html">2020</a></li><li><a href="'+relativePath+'/artwork/2019.html">2019</a></li><li><a href="'+relativePath+'/artwork/2018.html">2018</a></li></ul><h2><a href="'+relativePath+'">Commissions</a></h2><ul><li><a href="'+relativePath+'/commission/info.html">Information</a></li><li><a href="'+relativePath+'commission/tos.html">Terms of Service</a></li></ul></div><h2><a href="'+relativePath+'">Fanart</a></h2>'
document.body.appendChild(sideNavHTML);

function getNav(z){
	 if ( z === 2023 ) {
		prevI= z-1;
		result = "| <a href='./" + prevI + ".html'>Previous Year »</a>";
	} else if ( z === 2018 ) {
		nextI= z+1;
		result = "<a href='./" + nextI + ".html'>« Next Year</a>";
	} else {
		prevI= z-1;
		nextI= z+1;
		result = "<a href='./" + nextI + ".html'>« Next Year</a> | <a href='./" + prevI + ".html'>Previous Year »</a>";
		}
		return result
	}

if (url.includes("artwork/")){
	artNav = document.createElement('div')
	artNav.id = "artworkNav"
	artLink = url.slice(url.lastIndexOf("/")+1,url.lenght)
	if (artLink.includes(".html")){
		artLink = artLink.replaceAll(".html","")
	}
	artLink = parseInt(artLink);
	artNav.innerHTML = getNav(artLink)
	$(artNav).append(artNav).appendTo("#body")
}

$(function() {$( ".art" ).accordion({collapsible: true,heightStyle: "content",active: false});});

function openNav() {
  document.getElementById("sideNav").style.width = "250px";
}
function closeNav() {
  document.getElementById("sideNav").style.width = "0";
}