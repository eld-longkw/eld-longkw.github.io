window.onload = loadPage;

if (sessionStorage.getItem("loaded") !== "loaded"){
    sessionStorage.setItem("heartcount",3);
    sessionStorage.setItem("loaded","loaded");
}

function loadPage(){
    playerLoad();
    changeColor();
    jsCheck();
}

function jsCheck(){
    document.getElementById("jscheck").style.display = "none";
}
function playerLoose(){
    sessionStorage.setItem("heartcount", sessionStorage.getItem("heartcount")-1);
    if (sessionStorage.getItem("heartcount") == 2){
        document.getElementById("heart1").style.display = "none";
        document.getElementById("noheart1").style.display = "inline";
    }
    if (sessionStorage.getItem("heartcount") == 1){
        document.getElementById("heart2").style.display = "none";
        document.getElementById("noheart2").style.display = "inline";
    }
    if (sessionStorage.getItem("heartcount") <= 0){
        document.getElementById("heart3").style.display = "none";
        document.getElementById("noheart3").style.display = "inline";
        setTimeout(playerDie, 300);
    }

}
function playerDie(){
    popup();
}

function playerReset(){
    sessionStorage.setItem("loaded","reset");
    window.location.replace("index.html");
}
function playerResetm(){
    document.getElementById("popuptitle").innerHTML ="You are being reset.";
    document.getElementById("popupmessage").innerHTML ="This will reset your lives and send you back to the beginning. (Reload the page if you do not wish to reset)";
    popup();
}

function playerLoad(){
    if (sessionStorage.getItem("heartcount") <= 2){
        document.getElementById("heart1").style.display = "none";
        document.getElementById("noheart1").style.display = "inline";
    }
    if (sessionStorage.getItem("heartcount") <= 1){
        document.getElementById("heart2").style.display = "none";
        document.getElementById("noheart2").style.display = "inline";
    }
    if (sessionStorage.getItem("heartcount") <= 0){
        document.getElementById("heart3").style.display = "none";
        document.getElementById("noheart3").style.display = "inline";
        setTimeout(playerDie, 300);
    }
}
function changeColor() {
    var colors = ['royalblue','crimson','darkorange','darkslateblue','turquoise','firebrick','gold','coral','rebeccapurple','springgreen'];
    color = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('left').style.background = color;
}

function popup(){
    document.getElementById("popup").style.display = "inline";
    document.getElementById("cheatfilter").style.display = "inline";
}