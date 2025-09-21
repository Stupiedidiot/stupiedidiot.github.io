comicTitle = "Psych!"

// PAGE TEMPLATE
const url = window.location.pathname;
relativePath = "./" 

const template =`
<div id="container">
    <main></main>
    <aside>
        <div id="aside-main">
            <span class="title outline"><a href="#">PSYCH!</a></span>
            <nav>
                <a href="#">/ARCHIVE/</a>
                <a href="#">/ABOUT/</a>
                <a href="#">/CHARCTERS/</a>
                <a href="#">✮</a>
            </nav>
        </div>
        <img class="outline" src="${relativePath}img/snail.png">
    </aside>
</div>
`

const templateViewer =`
<div id="container">
    <div id="top">
        <header></header>
        <div id="nextprev"></div>
        <div id="extra">
            <a href="https://stupied.neocities.org/index.html">✮</a>
        </div>
    </div>
    <main></main>
    <div id="bottom">
        <aside>
            <nav id="next"></nav>
            <div id="info"></div>
        </aside>
        <div>
            <div id="c_widget"></div>
        </div>
    </div>
    <footer>
        <a href="https://stupied.neocities.org/about/index.html">about</a>
        <a href="https://stupied.neocities.org/map.html">map</a>
        <a href="https://stupied.neocities.org/feed.xml">rss</a>
    </footer>
</div>
`

e = document.querySelector("body")
if(e.id==="comicViewer"){
    e.innerHTML+=templateViewer
} else {
    e.id = "main"
    e.innerHTML+=template
}

main=document.querySelectorAll(".main-content");
for(i=0; i<main.length; i++){
    document.querySelector("#container main").append(main[i]);
}

// Justified Gallery
function wrap(el, wrapper) {el.parentNode.insertBefore(wrapper, el);wrapper.appendChild(el);}
images = document.querySelectorAll(".justified-gallery img")
for(i=0;i<images.length;i++){
    linkHTML = document.createElement("a")
    linkHTML.style.setProperty("--width",images[i].style.getPropertyValue("--width"))
    linkHTML.style.setProperty("--height",images[i].style.getPropertyValue("--height"))
    linkHTML.href = images[i].src
    wrap(images[i],linkHTML)
}
