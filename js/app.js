"use strict"

console.log("hello world");

//**** Dom ****// 
let plusIcon = document.getElementById("showMoreIcon");
let fatherShowMore=document.getElementById("fatheShowMore");
let hideShowMore=document.getElementById("hideShowMore");
let hideShowLess=document.getElementById("hideShowLess");
let showlessIcon=document.getElementById("showlessIcon");



let mynewDiv=document.createElement("div");
let once=true;
function dhowmoreBestThings(){
    mynewDiv.style.display="block"
    if(once){
mynewDiv.setAttribute("class","col-sm-12");
mynewDiv.setAttribute("class","hideMyDiv");
let myNewImage=document.createElement("img");
myNewImage.setAttribute("src","https://image.oppo.com/content/dam/oppo/en/mkt/homepage/universe/pc/4-Charging_RGB.png");
myNewImage.setAttribute("class","img-responsive");
let myNewParagragh=document.createElement("h2");
let myTextInParagragh=document.createTextNode("vooc 4")
myNewParagragh.setAttribute("class","text-center");
myNewParagragh.appendChild(myTextInParagragh);
mynewDiv.appendChild(myNewImage);
mynewDiv.appendChild(myNewParagragh);
fatherShowMore.appendChild(mynewDiv);
once=false;    
}
hideShowMore.style.display="none";
hideShowLess.style.display="block";


}

function hideShowLessIcon(){
    mynewDiv.style.display="none"
    hideShowMore.style.display="block";
hideShowLess.style.display="none";

}

showlessIcon.addEventListener('click',hideShowLessIcon);

plusIcon.addEventListener('click',dhowmoreBestThings);

console.log("khaled");

// breadcrumb.style.display="none";