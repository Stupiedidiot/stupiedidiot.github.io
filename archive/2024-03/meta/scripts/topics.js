//*Title, folder name, file name, description, tags
//available tags: #artists #webseries #games #puzzles #animations #art #animals #indie #webmasters-stuff #horror #gore #mystery #female-creator #comedy #comics #notes #classics #nostalgia

//Change this as well you moron
catPages = [
	//["","","",""],
	//["Insaniquarium","","MY FISHIES KEEP DYING WAAAH FUCK YOU GUS I HOPE YOU ROT IN HELL","#animals #games #classics #nostalgia"],
	["Mopsy Modes","mopsy","Archive of all the full-paged paper dolls from a quirkly comic published on the early 1940s","#female-creator #comdey #comics #art #artists"],
	//["Wishlist","","Physical items I wish I had but don't :(","#webmasters-stuff"],
	//["Math Notes","","Multitasking at it's finest","#webmasters-stuff #notes"],
	//["The World of Literal Hat","literal-hat","Quite literally the hattiest hatty hat hatson","#artists #animations #webseries #indie #art"],
	["Lily's Well","","Awoken by a strange noise by the well, Lily decides to investigate.","#horror #games #indie #gore #mystery female-creator"],
	//["Handshakes","","Fun sokoban puzzle game by Pet Pumpkin","#games #puzzles #indie"],
	//["Jigsaw Central","","Archive of all the puzzles I've solved. Both physical and digital ones","#games #puzzles #webmasters-stuff"],
	//["Mitoza","","A surreal 'toy'","#games #art #indie"],
	//["Spore","","Funny animal maker game that I can't access online features to!!!!","#games #animals"],
	//["Harvester","","Ultra-violent point and clicker game","#mystery #horror #puzzles #games #gore"],
	//["Who's Lila?","","","#indie #horror #puzzles #games #mystery"],
	//["Doki Doki Literature Club","ddlc","Cute dating sim :)","","#horror #games #indie #gore"],
	//["Food Fighters","memedokies","","Silly lil webseries by memedokies!","#artists #webseries #animations #art #indie #female-creator"],
	//["Ghost Trick: Phantom Detective","ghost-trick","","One of the greatest puzzle games you never played","#puzzles #games #mystery"],
	//["Cool Free Video Games!","free","Looking to have some fun but not have the money?","#games #puzzles #indie"],
]
relativePathCat = "../";
indexTopics = relativePathCat + "index.html"; 
const home = "/index.html"; 

addEventListener("DOMContentLoaded", (event) => {
if (document.getElementById("cat")){
	
	for (let i=0; i < catPages.length ; i++) {
		
		fold = catPages[i][1];
		fold = foldConv(fold, i);
		title = catPages[i][0];
		desc = catPages[i][2];
		result = '<a href="' + fold + home + '"><div><h3>' + title + '</h3><p>' + desc + '</p></div></a>';
		
		document.getElementById("cat").innerHTML += result;
	}
	
}

if (document.getElementById("nextprev")){
	current=window.location.pathname;
	s=current.split("/");
	
	for (i=0, c=false; c==false; i++){
		fold=catPages[i][1];
		if (catPages[i][1]==""){
				fold = foldConv(fold, i);
			}
		if ( current.includes(fold)) {
			currentIndex = i;
			c=true;
		}
	}
	
	if (s.indexOf(fold)!==s.length-2){
		relativePathCat = "../../";
		indexTopics = relativePathCat + "index.html"; 
	}
	
	if ( catPages.length < 2 ) {
		result = "<a href='"+ indexTopics +"'>« Go Back »</a>";
	} else if ( currentIndex === 0 ) {
		prevI= currentIndex+1;
		prev=catPages[prevI][1];
		result = "<a href='"+ indexTopics +"'>Go Back</a> | <a href='"+ relativePathCat + prev + home + "'>Prior »</a>";
	} else if ( currentIndex === catPages.length - 1 ) {
		nextI= currentIndex-1;
		next=catPages[nextI][1];
		next=foldConv(next, nextI);
		result = "<a href='"+relativePathCat+"" + next + home + "'>« Next</a> | <a href='"+ indexTopics +"'>Go Back</a>";
		
	} else if ( 0 < currentIndex && currentIndex < catPages.length - 1 ) {
		prevI= currentIndex+1;
		prev=catPages[prevI][1];
		prev=foldConv(prev, prevI);
		
		nextI= currentIndex-1;
		next=catPages[nextI][1];
		next=foldConv(next, nextI);
		result = "<a href='"+relativePathCat+"" + next + home + "'>« Next</a> | <a href='"+ indexTopics +"'>Go Back</a> | <a href='"+relativePathCat+"" + prev + home + "'>Prior »</a>";;
	}

	document.getElementById("nextprev").innerHTML += result;	
}

function foldConv(l, I){
	if(l==""){
		l = catPages[I][0];
		l = l.toLowerCase();
		l = l.replaceAll(" ","-");
		l = l.replaceAll("'","");
		l = l.replaceAll("?","");
		l = l.replaceAll("!","");
	}
	return l;
}
});