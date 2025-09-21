//General
url = window.location.pathname;
relativePath = ".";
if (url.includes("comic/")){relativePath = "./../../..";}else{
if (url.includes("blog/")||url.includes("articles/")||url.includes("library/")||url.includes("gallery/")||url.includes("topics/")||url.includes("arcade/")||url.includes("dumpster/")||url.includes("community/")||url.includes("meta/")){relativePath = "./..";}}

const cheeze = [
"Where'd the cheese go?",
"Where's the cheese gone?",
"Where the cheese be?",
"Where be my cheese?",
"Who took the cheese?",
"Who has the cheese?",
"Who's got the cheese?",
"Where's all the cheese?",
"Woah that snail is fast!!",
"Turbo F A S T that's the team you'll never beat!",
"It's mental illness luv <3",
"It's actually quite simple really",
"Mark my words, I am the true kawaii queen!",
"Tilly death do us part",
"I don't know what that means, but I'm supportive :D",
"Well here we are again. It's always such a pleasure :)",
"I'm not the boogeyman but I am the <i>boogey man</i>",
"Bad Boy's Big Bread Bridge!",
"BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK",
"Your letter has been read fully, and your thoughts have been inputed and accepted for better improvement. Thank you for your time and efforts.",
"It feels so strange not to hate you anymore",
"I am in lesbians with you",
"Bread makes you fat???",
"I AM NOT A MORON!",
"Poems are songs no one cares about",
"The cruelest lies are often said without a world. The kindest truths are often spoke but never heard",
"Remember: You're always the problem",
"Is it difficult to be an idiot? Yes but someone's gotta do it",
"Like water I wanna keep running",
"How did we end up here? You said happenstance",
"We didn't meet because of faith but rather probability",
"Oh My God, like literally, I can't even",
"I am literally the queen of moderation",
"Don't you dare tell me to stop, I've only begun to shine!",
"Those aren't boobs, those are lines from working out.",
"Why am I a cow?",
"Pups gotta eat!",
"Oooh you've come so far! The dynamic pose with the vibrant colours and lineless touches is much prettier, the clothes flow nicely (that bow detail is lovely) and more carefully constructed hands are very noticeable, a definite improvement from the squiggly on on the right"
];
const posts = [
//[ "2023-11-03-SHS-Review.html","Senior Highschool - An Honest Review"],
//[ "2024-02-24-Passion.html","Passion and My Lack of It"],
[ "2023-08-31-Art-Summary.html","August Art Summary"],
[ "2023-08-29-Pakka-Pets.html",""],
["2023-08-28-Hotdog.html",""],
["2023-08-20-Meet-the-Fellas.html",""],
["2023-08-19-Minecraft.html","Minecraft irl!?!?!?"],
[ "2023-08-15-Screaming.html","One Week Left"],
[ "2023-08-01-Art-Goals.html","August Art Goals"],
[ "2023-07-31-Hello-World.html","Well, Here We are Again"],
];
articles = [
//[ "2024-01-04-Puppychan.html","Puppychan - Pups Gotta Eat!","int"],
//[ "2024-01-04-Kittydog-Redraws.html","Simplifying Kittydogs OCS","art"],
[ "2023-11-03-Guide.html","Guide to Stupied Articles","_"],
];

function Addto(id,text,style){
	if (document.getElementById(id)) {
		document.getElementById(id).innerHTML += text;
		if (style!== null){
		document.getElementById(id).className = style;
		}
	}
}

if (document.getElementById("marq").children.length === 0) {
	r = cheeze[Math.floor(Math.random() * cheeze.length)];
	Addto("marq","<marquee>" + r + "</marquee>",'')
}

if (document.getElementById("head")!== null &&document.getElementById("head").children.length === 0){
Addto("head",`<img src="${relativePath}/meta/imgs/header1.png">`,'');
}
//Temp - PLease remember to change this 
Addto("navi",'<div class="bg-white rad pad-5px" style="margin-top:10px;"><div><h3>Navigation</h3><ul><li><a href="' + relativePath + '/index.html">Home</a></li><li><a href="#">Topics</a></li><li><a href="' + relativePath + '/chat.html">ChatBox</a></li><li><a href="' + relativePath + '/articles/index.html">Articles</a></li></ul></div><div><h3>Webmaster\'s</h3><ul><li><a href="' + relativePath + '/about.html">About Me</a><li><a href="' + relativePath + '/blog/index.html' +'">Weblog</a></li></li><li><a href="' + relativePath + '/gallery/index.html">Gallery</a></li><li><a href="' + relativePath + '/library/index.html">Library</a></li></ul></div></div>');
//Addto("navi",'<div class="bg-white rad pad-5px" style="margin-top:10px;"><div><h3>Navigation</h3><ul><li><a href="' + relativePath + '/index.html">Home</a></li><li><a href="' + relativePath + '/topics/index.html">Topics</a></li><li><a href="' + relativePath + '/chat.html">ChatBox</a></li><li><a href="' + relativePath + '/articles/index.html">Articles</a></li></ul></div><div><h3>Webmaster\'s</h3><ul><li><a href="' + relativePath + '/about.html">About Me</a><li><a href="' + relativePath + '/blog/index.html' +'">Weblog</a></li></li><li><a href="' + relativePath + '/gallery/index.html">Gallery</a></li><li><a href="' + relativePath + '/library/index.html">Library</a></li></ul></div></div>');
Addto("footer",'<a href="'+relativePath+'/meta/log.html">ChangeLog</a> | <a href="'+relativePath+'/meta/sources.html">Resources</a>| <a href="'+relativePath+'/meta/sitemap.html">SiteMap</a><br>Find the rest of my shenanigans <a href="' + relativePath + '/about.html#socials">over here</a>','bg-white pad-5px bg-black');

/** extraScroll = document.createElement("div")
if (document.body.classList.contains("check-blue")){
	extraScroll.classList.add("bg-blue3","txt-white", "pad-1rem", "rad")
} else {
	extraScroll.classList.add("bg-black","txt-white", "pad-1rem", "rad")
}

extraScroll.innerHTML='<ul style="margin:0;"><a href="#marq"><li>Go to top</li></a><a href="#footer"><li>Go to bottom</li></a></ul>'

let extraStuff;

extraNum = document.querySelector("#extra > div")
if (Array.isArray(extraNum)==true){
	extraNum = extraNum.lenght
}else{
	extraNum = 1
}

for(i=1;i-1<extraNum;i++){
	extraStuff = document.querySelector("#extra > div:nth-of-type("+i+")");
}

extraHTML = document.createElement("div")
extraHTML.append(extraScroll);
if (extraStuff!==null){
	extraHTML.append(extraStuff);
}
document.getElementById("extra").append(extraHTML); **/
//Bleeeehhhhh
const index = "./index.html";
function getIndex(z){
	currentIndex = -1;
	currentFile = url.substring(url.lastIndexOf('/'));
	currentFile = currentFile.replaceAll("/","")
	if ( ! currentFile.endsWith(".html") ) {
		currentFile += ".html";
	}

	for (i = 0; i < z.length; i++) {
		if ( z[i][0] === currentFile ) {
			currentIndex = i;
		}
	}
}
function getTitle(i, z){
if ( z[i][1] !== ""){
		title = z[i][1];
	} else {
		title = z[i][0];
		title = title.slice(11, title.lenght);
		title = title.replaceAll("-"," ");
		title = title.replaceAll(".html","");
	}
	return title;
}
function getDate(i, z){
	DATE = z[i][0].slice(0,10);
	return DATE
}
function convDate(i){
	month = i.slice(5,7);
	day = i.slice(8,10);
	year = i.slice(0,4);
		switch (month) {
			case "01":
				month = "January";
			break;
			case "02":
				month = "Febuary";
			break;
			case "03":
				month = "March";
			break;
			case "04":
				month = "April";
			break;
			case "05":
				month = "May";
			break;
			case "06":
				month = "June";
			break;
			case "07":
				month = "July";
			break;
			case "08":
				month = "August";
			break;
			case "09":
				month = "September";
			break;
			case "10":
				month = "October";
			break;
			case "11":
				month = "November";
			break;
			case "12":
				month = "December";
			break;
		}
	DATE = month + " " + day + ", " + year;
	return DATE;
}
function genNav(z){
	if ( z.length < 2 ) {
		result = "<a href='"+ index +"'>« Archive »</a>";
		
	} else if ( currentIndex === 0 ) {
		prevI= z[currentIndex+1][0];
		result = "<a href='"+ index +"'>Archive</a> | <a href='./" + prevI + "'>Previous »</a>";
		
	} else if ( currentIndex === z.length - 1 ) {
		nextI= z[currentIndex-1][0];
		result = "<a href='./" + nextI + "'>« Next</a> | <a href='"+ index +"'>Archive</a>";
		
	} else if ( 0 < currentIndex && currentIndex < z.length - 1 ) {
		prevI= z[currentIndex+1][0];
		nextI= z[currentIndex-1][0];
		result = "<a href='./" + nextI + "'>« Next</a> | <a href='"+ index +"'>Archive</a> | <a href='./" + prevI + "'>Previous »</a>";
	}
}
//Webblog
if ( url.includes("blog/") ) {
getIndex(posts)
if ( currentIndex > -1) {
genNav(posts);
currentTitle = getTitle(currentIndex, posts);
currentDate = getDate(currentIndex, posts);
if (document.title === "Stupied Stuff") {
  document.title = currentDate + " | Stupied Stuff";
}
currentDate = convDate(currentDate);
Addto('postTitle',currentTitle);
Addto('postDate',currentDate);
Addto('nextprev',result,'txt-center');
} else {
for (i = 0, result="<ul>"; i < posts.length; i++) {
	title = getTitle(i, posts);
	DATE = getDate(i, posts);
	result += '<li><a href="' + posts[i][0] + '"><span class="txt-black">' + DATE + ' » </span>' + title + '</a></li>';
}
result+="</ul>";
Addto('postList', result);
}
}
//Articles
if ( url.includes("articles/") ) {
const catagories = [
["Art","art"],
["Games","gam"],
["Internet Phenomina", "int"],
["Comic and Stories", "com"],
["Films and Shows","mov"],
["Music","mus"],
["Unsorted","_"],
];
getIndex(articles)
if ( currentIndex > -1) {
genNav(articles);
currentTitle = getTitle(currentIndex, articles);
currentDate = getDate(currentIndex, articles);
if (document.title === "Stupied Stuff") {
  document.title = currentTitle + " | Stupied Stuff";
}
currentDate = convDate(currentDate);
Addto('postTitle',currentTitle);
Addto('postDate',currentDate);
Addto('nextprev',result,'txt-center');
} else {
result = '<div class="cont"><h1 class="txt-center">Articles</h1><hr style="margin:20px 0;"><div class="articleDivider"><div class="item1"><h2>Recent</h2></div>';
for (i = 0, result+="<div class='item2'><ul>"; i < articles.length; i++){
	title = getTitle(i, articles);
	DATE = getDate(i, articles);
	result +='<li><a href="'+ articles[i][0] +'"><h3>' + title + '</h3><h5>' + DATE + '</h5></a></li>';
}
result+='</ul></div></div></div>';

//please remember to change this
for (i = 0, result+='<div class="cont">'; i < catagories.length; i++){
	catagory = catagories[i][1];
	result+='<div class="articleDivider" id ="'+catagory+'"><div class="item1"><h2>' + catagories[i][0] + '</h2></div><div class="item2"><ul>'
		for (z = 0; z < articles.length ;z++) {
			if (articles[z].includes(catagory)){
				title = getTitle(z, articles);
				result+='<li><a href="' + articles[z][0] + '"><h3>'+ title +'</h3></a></li>'
				articles.splice(z, 1);
				z--;
			}
		}
	result+="</ul></div></div>"
	if (catagory !== "_"){
		result+="<hr>"
	}
}
Addto('articleList',result);}
}
//Library

Addto("comments",' <div id="HCB_comment_box"><a href="http://www.htmlcommentbox.com">Comment Form</a> is loading comments...</div><link rel="stylesheet" type="text/css" href="https://www.htmlcommentbox.com/static/skins/bootstrap/twitter-bootstrap.css?v=0" /><style>#HCB_comment_box img{width:auto;display:inline-block;}.home-desc{display:none;}</style>',"cont")

if (document.getElementById("comments")) { if(!window.hcb_user){hcb_user={};} (function(){var s=document.createElement("script"), l=hcb_user.PAGE || (""+window.location).replace(/'/g,"%27"), h="https://www.htmlcommentbox.com";s.setAttribute("type","text/javascript");s.setAttribute("src", h+"/jread?page="+encodeURIComponent(l).replace("+","%2B")+"&mod=%241%24wq1rdBcg%24lorU9Glfj8bQyg9yk9caG%2F"+"&opts=16798&num=10&ts=1699153972795");if (typeof s!="undefined") document.getElementsByTagName("head")[0].appendChild(s);})();
}