"use strict";
let firstVideoInOurStory = document.getElementById("firstVideoInOurStory");
let idFor40 = document.getElementById("idFor40");
let idfor4000 = document.getElementById("idfor4000");
let sectn2hiden = document.getElementById("sectn2hiden");
let showMoreINOUrStory = document.getElementById("showMoreINOUrStory");
let showlessINOUrStory = document.getElementById("showlessINOUrStory");
let firstOne1 = document.getElementById("firstOne1");
let secondOne1 = document.getElementById("secondOne1");
let thiredOne1 = document.getElementById("thiredOne1");
let pInfirstOne = document.getElementById("pInfirstOne");
let pInsecondOne = document.getElementById("pInsecondOne");
let pInthiredOne = document.getElementById("pInthiredOne");
let oneOne = document.getElementById("oneOne");
let oneTwo = document.getElementById("oneTwo");
let oneThree = document.getElementById("oneThree");
let roya = document.getElementById("roya");
let mohema = document.getElementById("mohema");
let alqiem = document.getElementById("alqiem");
let changeBackGroundColor = document.getElementById("changeBackGroundColor");

window.addEventListener("scroll", scorllingOneInOurStoryPage);
// roya.style.zIndex="1";
pInfirstOne.addEventListener("click", () => {
  roya.style.opacity = "1";
  mohema.style.opacity = "0";
  alqiem.style.opacity = "0";
  firstOne1.style.opacity = "1";
  secondOne1.style.opacity = "0";
  thiredOne1.style.opacity = "0";
  oneOne.style.marginTop = "60px";
  oneTwo.style.marginTop = "-20px";
  oneThree.style.marginTop = "-20px";

  mohema.style.zIndex = "0";
  alqiem.style.zIndex = "0";
  roya.style.zIndex = "1";
 
});

pInsecondOne.addEventListener("click", () => {
  roya.style.opacity = "0";
  mohema.style.opacity = "1";
  alqiem.style.opacity = "0";

  oneOne.style.marginTop = "-20px";
  oneTwo.style.marginTop = "60px";
  oneThree.style.marginTop = "-20px";
  firstOne1.style.opacity = "0";
  secondOne1.style.opacity = "1";
  thiredOne1.style.opacity = "0";

  mohema.style.zIndex = "1";
  alqiem.style.zIndex = "0";
  roya.style.zIndex = "0";
 
});
pInthiredOne.addEventListener("click", () => {
  mohema.style.opacity = "0";
  alqiem.style.opacity = "1";
  roya.style.opacity = "0";

  oneOne.style.marginTop = "-20px";
  oneTwo.style.marginTop = "-20px";
  oneThree.style.marginTop = "60px";

  firstOne1.style.opacity = "0";
  secondOne1.style.opacity = "0";
  thiredOne1.style.opacity = "1";

  roya.style.zIndex = "0";
  mohema.style.zIndex = "0";
  alqiem.style.zIndex = "1";

});

function scorllingOneInOurStoryPage() {
  if (
    window.pageYOffset > 200 &&
    window.pageYOffset < 700 &&
    $(window).width() > 800
  ) 
  
{
    firstVideoInOurStory.style.transform = "scale(1.5,1)";
  } 
  
  else if( window.pageYOffset > 100 &&
    window.pageYOffset < 300 &&

    $(window).width() < 580){
      firstVideoInOurStory.style.transform = "scale(1.5,1)";


  }
  
  else {
    firstVideoInOurStory.style.transform = "scale(1)";
  }
}

window.addEventListener("scroll", () => {

  console.log(window.pageYOffset)
  if (window.pageYOffset > 1200) {
    idfor4000.style.opacity = 1;
    idFor40.style.opacity = 0;
  } 
  
  else if (window.pageYOffset > 490 && $(window).width() < 600 ) {
    idfor4000.style.opacity = 1;
    idFor40.style.opacity = 0;
  }
  else if (window.pageYOffset > 620 && $(window).width() < 800 ) {
    idfor4000.style.opacity = 1;
    idFor40.style.opacity = 0;
  }

  
  else {
    idfor4000.style.opacity = 0;
    idFor40.style.opacity = 1;
  }
});

var i = true;
showMoreINOUrStory.addEventListener("click", () => {
  sectn2hiden.style.display = "block";
  showMoreINOUrStory.style.display = "none";
  i = false;
});

showlessINOUrStory.addEventListener("click", () => {
  sectn2hiden.style.display = "none";
  showMoreINOUrStory.style.display = "block";
  i = true;
});
// window.addEventListener("scroll", () => {
//   console.log(window.pageYOffset);
//   if (window.pageYOffset > 3970 && window.pageYOffset < 5000 && i) {
//     changeBackGroundColor.style.backgroundColor = "black";
//   } else if (window.pageYOffset > 8170 && window.pageYOffset < 9170 && !i) {
//     changeBackGroundColor.style.backgroundColor = "black";
//   } 
//   else if(window.pageYOffset > 1780 && window.pageYOffset < 2490 && i && $(window).width() < 520){
//     changeBackGroundColor.style.backgroundColor = "black";
//   }

//   else if(window.pageYOffset > 3190 && window.pageYOffset < 4090 && !i && $(window).width() < 520){
//     changeBackGroundColor.style.backgroundColor = "black";
//   }


//   else if(window.pageYOffset > 3944 && window.pageYOffset < 4699 && !i && $(window).width() < 620){
//     changeBackGroundColor.style.backgroundColor = "black";
//   }

//   else if(window.pageYOffset > 2040 && window.pageYOffset < 2777 && i && $(window).width() < 620){
//     changeBackGroundColor.style.backgroundColor = "black";
//   }
//   else {
//     changeBackGroundColor.style.backgroundColor = "white";
//   }
// });
