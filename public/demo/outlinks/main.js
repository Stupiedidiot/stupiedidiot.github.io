scrollToTop()
    
webgarden = '<iframe src="https://stupied.neocities.org/webgarden.html" height="250px" width="250px" scrolling="no" loading="lazy"></iframe>'
button = '<a href="https://stupied.neocities.org/" target="_blank"><img src="https://stupied.neocities.org/meta/button.png"></a>'
link = '<a href="https://stupied.neocities.org/" target="_blank">Stupied</a>'

selected = document.getElementById("solar-system")
selectedStyle = getComputedStyle(selected)

speedZoom = 25
speedY = 25
speedX = 50

document.onkeydown = function(event) {
    if( document.activeElement === document.querySelector("body") ){
        switch (event.keyCode) {
            case 65: // left
                changeX(speedX)
            break;
            case 87: // up
                changeY(speedY)
            break;
            case 68: // right
                changeX(-speedX)
            break;
            case 83: // down
                changeY(-speedY)
            break;

            case 73: // letter i
                changeScale(speedZoom)
            break;
            case 79: // letter o
                changeScale(-speedZoom)
            break;
        }

    }
}

onresize = scrollToTop

function changeX(speed){
    valueCurrent = parseInt(selectedStyle.getPropertyValue("--x"))
    valueNew = (valueCurrent + speed) + "deg"
    selected.style.setProperty('--x', valueNew)
}

function changeY(speed){
    valueCurrent = parseInt(selectedStyle.getPropertyValue("--y"))
    valueNew = (valueCurrent + speed)

    if (valueNew > 70){
        valueNew = 70
    } else if(valueNew < 30) {
        valueNew = 30
    }

    valueNew = valueNew + "deg"
    selected.style.setProperty('--y', valueNew)
}

function changeScale(speed) {
    valueCurrent = parseInt(selectedStyle.getPropertyValue("--zoom"))
    valueNew = (valueCurrent + speed)

    if (valueNew > 150){
        valueNew = 150
    } else if(valueNew < 50) {
        valueNew = 50
    }

    valueNew = valueNew + "%"
    selected.style.setProperty('--zoom', valueNew)
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

viewer = document.getElementById("view")
function closeView() {
    if (viewer.contains(event.target) === false) {
        window.location.replace("#")
    }
}

function copyText(text){
    navigator.clipboard.writeText(text);
    alert("You have copied the following: \n" + text + "\n\n Kindly paste it on your website");
}