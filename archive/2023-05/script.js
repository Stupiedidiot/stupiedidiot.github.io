//Navigation
let url = window.location.pathname;
const postDateFormat = /\d{4}\-\d{2}\-\d{2}\-/;
const cheesetext = ["Where'd the cheese go?","Where's the cheese gone?","Where the cheese be?","Where be my cheese?","Who took the cheese?","Who has the cheese?","Who's got the cheese?","Where's all the cheese?"];

let relativePath = ".";
if ( url.includes("/posts") ) {
  relativePath = "..";
}
if ( url.includes("/cl/") ) {
  relativePath = "..";
}
if ( url.includes("/pl4y/") ) {
  relativePath = "..";
}

let NOM ='<ul> <li class="icon"><a onclick="navexp()">&#9776</a></li><li><a href="' + relativePath + '/index.html">/Home/</a></li>' + 
'<li class="navkeep"><a href="' + relativePath + '/about.html">/About/</a></li>' +
'<li class="navkeep"><a href="' + relativePath + '/blog.html">/Blog/</a></li>'+
'<li><a href="' + relativePath + '/cl/index.html">/CL/</a></li><li><a href="'+ relativePath +
'/pl4y/index.html">/pl4y/</a></li><li><a href="' + relativePath + '/slug.html">/Slug/</a></li> </ul>';

if (document.getElementById("navcon")) {
document.getElementById("navcon").innerHTML = NOM;

}

function navexp() {
  var x = document.getElementById("navcon");
  if (x.className === "topnav") {
    x.className += "Res";
  } else {
    x.className = "topnav";
  }
}

random = Math.floor(Math.random() * 3);

document.getElementById("navbanner").innerHTML = '<a href="'+ relativePath + '/index.html"><img src="'+ relativePath +'/banner'+ random +'.png"></a>';

let miniannHTML = "";

if (document.getElementById("miniann")) {
  document.getElementById("miniann").innerHTML = miniannHTML;
}
//Footer
let footerHTML = '<h3>Need to contact me?</h3><p> My discord is Cheezeits#1167 or check out my <a href="' + relativePath + '/about.html#socials">socials</a> :3</p>';

if (document.getElementById("footer")) {
  document.getElementById("footer").innerHTML = footerHTML;
}

random = Math.floor(Math.random() * cheesetext.length);

if (document.getElementById("homenews")){
	document.getElementById("homenews").innerHTML= cheesetext[random];
}

//Blog 
let postsArray = [["posts/2025-07-29-Future.html","Notes from the Future"],["posts/2023-04-12-Popcorn.html","NOM NOM NOM"],["posts/2023-04-11-Jollibot.html","Robots are dumb"],["posts/2023-04-09-Musically-Dependant.html","Musically Dependant"],["posts/2023-04-08-16th-Birthday.html", "Sickly 16th Screaming"],["posts/2023-04-07-First-Blog-Post.html", "Hello World!"],["posts/0000-00-00-Site-Log.html", "Website Log"]];

if (document.getElementById("postshistory")){
	document.getElementById("posthistory").innerHTML= history;
}

let currentIndex = -1;
let currentFilename = url.substring(url.lastIndexOf('posts/'));

if ( ! currentFilename.endsWith(".html") ) {
    currentFilename += ".html";
}
let i;
for (i = 0; i < postsArray.length; i++) {
  if ( postsArray[i][0] === currentFilename ) {
    currentIndex = i;
  }
}
function formatPostTitle(i) {
  if ( postsArray[i].length > 1 ) {
    return decodeURI(postsArray[i][1]);
  } else { 
	if (  postDateFormat.test ( postsArray[i][0].slice( 6,17 ) ) ) {
	  return postsArray[i][0].slice(17,-5).replace(/-/g," ");
    } else {
      return postsArray[i][0].slice(6,-5).replace(/-/g," ");
    }
  }
}

let currentPostTitle = "";
let niceDate = "";
if ( currentIndex > -1 ) {
  currentPostTitle = formatPostTitle( currentIndex );
  if (  postDateFormat.test ( postsArray[currentIndex][0].slice( 6,17 ) ) ) {
    let monthSlice = postsArray[currentIndex][0].slice( 11,13 );
    let month = "";
    if ( monthSlice === "01") { month = "Jan";}
    else if ( monthSlice === "02") { month = "Feb";}
    else if ( monthSlice === "03") { month = "Mar";}
    else if ( monthSlice === "04") { month = "Apr";}
    else if ( monthSlice === "05") { month = "May";}
    else if ( monthSlice === "06") { month = "Jun";}
    else if ( monthSlice === "07") { month = "Jul";}
    else if ( monthSlice === "08") { month = "Aug";}
    else if ( monthSlice === "09") { month = "Sep";}
    else if ( monthSlice === "10") { month = "Oct";}
    else if ( monthSlice === "11") { month = "Nov";}
    else if ( monthSlice === "12") { month = "Dec";}
	niceDate = postsArray[currentIndex][0].slice( 14,16 ) + " " + month + ", " + postsArray[currentIndex][0].slice( 6,10 );
  }
}

function formatPostLink(i) {
  let postTitle_i = "";
  if ( postsArray[i].length > 1 ) {
    postTitle_i = decodeURI(postsArray[i][1]);
  } else {
	if (  postDateFormat.test ( postsArray[i][0].slice( 6,17 ) ) ) {
	  postTitle_i = postsArray[i][0].slice(17,-5).replace(/-/g," ");
    } else {
      postTitle_i = postsArray[i][0].slice(6,-5).replace(/-/g," ");
    }
  }
  if (  postDateFormat.test ( postsArray[i][0].slice( 6,17 ) ) ) {
    return '<li><a href="' + relativePath + '/'+ postsArray[i][0] +'">' + '<span style="color:black;font-family:inherit;">'+postsArray[i][0].slice(6,16) +" \u00BB " + "</span>" + postTitle_i + '</a></li>';
  } else {
    return '<li><a href="' + relativePath + '/'+ postsArray[i][0] +'">' + postTitle_i + '</a></li>';
  }
}

let postHistoryHTML = "<ul>";
for ( let i = 0; i < postsArray.length; i++ ) {
  postHistoryHTML += formatPostLink(i);
}
postHistoryHTML += "</ul>";

let recentPostsCutoff = 3; 
let recentpostHistoryHTML = "<h2>Recent Blog Posts:</h2><ul>";
let numberOfRecentPosts = Math.min( recentPostsCutoff, postsArray.length );
for ( let i = 0; i < numberOfRecentPosts; i++ ) {
  recentpostHistoryHTML += formatPostLink(i);
}

if ( postsArray.length > recentPostsCutoff ) {
  recentpostHistoryHTML += '<li class="moreposts"><a href=' + relativePath + '/blog.html><span style="color:#aeaeae;font-family:inherit;">\u00BB more posts</span></a></li></ul>';
} else {
  recentpostHistoryHTML += "</ul>";
}

let nextprevHTML = "";
let nextlink = "";
let prevlink = "";

if ( postsArray.length < 2 ) {
  nextprevHTML = '<a href="' + relativePath + '/index.html">Home</a>';
} else if ( currentIndex === 0 ) {
  prevlink = postsArray[currentIndex + 1][0];
  nextprevHTML = '<a href="' + relativePath + '/index.html">Home</a> | <a href="'+ relativePath + '/' + prevlink +'">Previous Post \u00BB</a>';
} else if ( currentIndex === postsArray.length - 1 ) {
  nextlink = postsArray[currentIndex - 1][0];
  nextprevHTML = '<a href="' + relativePath + '/' + nextlink +'">\u00AB Next Post</a> | <a href="' + relativePath + '/index.html">Home</a>';
} else if ( 0 < currentIndex && currentIndex < postsArray.length - 1 ) {
  nextlink = postsArray[currentIndex - 1][0];
  prevlink = postsArray[currentIndex + 1][0];
  nextprevHTML = '<a href="' + relativePath + '/'+ nextlink +'">\u00AB Next Post</a> | <a href="' + relativePath + '/index.html">Home</a> | <a href="' + relativePath + '/'+ prevlink +'">Previous Post \u00BB</a>';
}

if (document.getElementById("nextprev")) {
  document.getElementById("nextprev").innerHTML = nextprevHTML;
}
if (document.getElementById("postHistory")) {
  document.getElementById("postHistory").innerHTML = postHistoryHTML;
}
if (document.getElementById("recentpostHistory")) {
  document.getElementById("recentpostHistory").innerHTML = recentpostHistoryHTML;
}

if (document.getElementById("blogTitleH1")) {
  document.getElementById("blogTitleH1").innerHTML = blogTitle;
}
if (document.getElementById("postTitleH1")) {
  document.getElementById("postTitleH1").innerHTML = currentPostTitle;
}
if (document.getElementById("postDate")) {
  document.getElementById("postDate").innerHTML = niceDate;
}

if (document.title === "Blog Post") {
  document.title = currentPostTitle;
}
//Original code by Marina Kittaka - Zonelets

var exp = document.getElementsByClassName("catcontainer");

for (i = 0; i < exp.length; i++) {
  exp[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
