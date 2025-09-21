if (x=document.getElementById("game")){
    settingsHTML = document.createElement("div")
    settingsHTML.id="settings"
    settingsHTML.classList="note red"
    settingsHTML.innerHTML= '<a href="./../index.html"><h1>Mopsy</h1></a><h3> - </h3><a href="./index.html">CHANGE DOLL?</a>'

    screenHTML = document.createElement("div")
    screenHTML.id="screen"
    screenHTML.classList="paper"

    optionsHTML = document.createElement("div")
    optionsHTML.id="options"

    layersHTML = document.createElement("div")
    layersHTML.id="layers"
    layersHTML2 = document.createElement("div")
    layersHTML2.classList="note red"
    layersHTML2.innerHTML="<p>If you want to save you work just long press the doll and save as. I can't code this in for you because... yeah.. I have the world's tiniest brain</p></div>"
    layersHTML.appendChild(layersHTML2)

    x.appendChild(settingsHTML)
    x.appendChild(screenHTML)
    x.appendChild(optionsHTML)
    x.appendChild(layersHTML)
}

function updateContent(){
    item=this
    itemIndex=checkArray(item.id)
    console.log(itemIndex)
    
    if (itemIndex==false&&itemIndex!==0){
    //item.parentElement.childNodes.forEach(e => e.classList.remove('active'))
    item.className="active"
    if (item.parentElement.id=="HATS"){
        layers.unshift([item.id,item.querySelector("img").cloneNode(true)])
    }else{
        layers.push([item.id,item.querySelector("img").cloneNode(true)])
    }
    redrawLOL()
    console.log("updated! item - "+item.id)
    //updateList()
    } else {
        layers.splice(itemIndex,1)
        item.classList.remove("active")
        redrawLOL()
        console.log("removed! item - "+item.id)
        //updateList()
    }
}

function redrawLOL(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    for(i=0;i<layers.length;i++){
        c.drawImage(layers[i][1], imageX, imageY, imageScaleX, imageScaleY)
    }
}

function checkArray(x){
    found=false
    for(i=0;i<layers.length;i++){
        if (layers[i][0]==x){
            found=i
            return found
        }
    }
    return found
}

loadOptions(dresses,"DRESSES")
loadOptions(tops,"TOPS")
loadOptions(bottoms,"BOTTOMS")
loadOptions(hats,"HATS")


const doll = new Image()
doll.src= currentDoll

function loadOptions(optionList, optionLabel){
if (optionList!== undefined && optionList.length>0){
    optionName = optionLabel

    for (i=0 , optionLabel=[];i<optionList.length;i++)
{
optionLabel.push(new Image())
optionLabel[i].src = optionList[i]
}
len = optionLabel.length;
loadCounter = 0;

[].forEach.call( optionLabel, function( img ) {
    if(img.complete)
      incrementCounter();
    else
      img.addEventListener( 'load', incrementCounter, false );
} );

function incrementCounter() {
	allLoad = false
    loadCounter++;
    if ( loadCounter === len ) {
    allLoad = true
    }
}

newDiv = document.createElement("div");
    newDiv.id = optionName

for(i=0;i<optionLabel.length;i++){
    newDivItem = document.createElement("div")
    newDivItem.appendChild(optionLabel[i]);
    newDivItem.id=optionName+"-"+i
    newDivItem.addEventListener("click",updateContent);
    newDiv.appendChild(newDivItem)
}

document.getElementById("options").appendChild(newDiv);
newDiv = document.createElement("div")
newDiv.innerHTML = "<h3>"+optionName+"</h3>"
newDiv.className="note"
document.getElementById("options").insertBefore(newDiv,document.getElementById(optionName));
}
}

const canvas = document.createElement("canvas")
const c = canvas.getContext('2d')
layers = [["DOLL",doll]]

/** LOAD THE CANVAS **/
doll.onload = () => {

window.addEventListener("load", resizeCanvas)
window.addEventListener("resize", resizeCanvas)

function resizeCanvas(){
w=window.innerWidth

if (w>620){
canvas.width = document.getElementById("game").offsetWidth/2;
}else{
canvas.width = document.getElementById("game").offsetWidth;
}
imageScaleX = canvas.width/1.5;
imageScaleY = (imageScaleX/doll.width)*doll.height;
canvas.height = imageScaleY;
setupContent()
}

function setupContent(){
document.getElementById("screen").className = "paper"
document.getElementById("screen").appendChild(canvas)
imageOffsetX = imageScaleX/2
imageOffsetY = imageScaleY/2

imageX = canvas.width/2 - imageOffsetX
imageY = canvas.height/2 - imageOffsetY;
//updateList()
redrawLOL()
}
}

jqueryScripts = document.createElement('script');
jqueryScripts.setAttribute('src','./../../../meta/scripts/jquery.js');
document.head.appendChild(jqueryScripts);

jqueryScripts = document.createElement('script');
jqueryScripts.setAttribute('src','./../../../meta/scripts/jquery-ui.min.js');
document.head.appendChild(jqueryScripts);

jqueryScripts.onload = () => {
$( function() {
    $( "#options" ).accordion({
      heightStyle: "content",
      collapsible: true,
    });
  } );
}
