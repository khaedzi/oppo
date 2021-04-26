let marginTopForW11des = document.getElementById("marginTopForW11des");
let hideThiredSection = document.getElementById("hideThiredSection");
let displayFirstheaderInSection4 = document.getElementById(
  "displayFirstheaderInSection4"
);
let addWidthForP = document.getElementById("addWidthForP");
let inlineblockForDiv = document.getElementById("inline-blockForDiv");
let resizeHeightForimageFourInSectionFourW11 = document.getElementById(
  "resizeHeightForimageFourInSectionFourW11"
);

let inlineblockForDiv2=document.getElementById("inline-blockForDiv2");

let grayBackgroundForSection5=document.getElementById("grayBackgroundForSection5");

let resizeHeightForimageFourInSectionSevenW11=document.getElementById("resizeHeightForimageFourInSectionSevenW11");

let sectionSeven=document.getElementById("sectionSeven");


window.addEventListener("scroll", scroolling);

function scroolling() {
  if (
    window.pageYOffset > 460 &&
    window.pageYOffset < 1200 &&
    $(window).width() > 650
  ) {
    marginTopForW11des.style.opacity = 1;
  } else if (
    window.pageYOffset > 190 &&
    window.pageYOffset < 560 &&
    $(window).width() < 650
  ) {
    marginTopForW11des.style.opacity = 1;
  } else {
    marginTopForW11des.style.opacity = 0;
    console.log(window.pageYOffset);
  }
}

window.addEventListener("scroll", scrollingTwo);

function scrollingTwo() {
  if (
    window.pageYOffset > 1590 &&
    window.pageYOffset < 2500 &&
    $(window).width() > 650
  ) {
    hideThiredSection.style.opacity = 1;
  } else if (
    window.pageYOffset > 1090 &&
    window.pageYOffset < 3000 &&
    $(window).width() < 650
  ) {
    hideThiredSection.style.opacity = 1;
  } else if (
    window.pageYOffset > 1200 &&
    window.pageYOffset < 3000 &&
    $(window).width() > 666
  ) {
  } else {
    hideThiredSection.style.opacity = 0;
  }
}

window.addEventListener("scroll", scrollingThree);
function scrollingThree() {
  if (
    window.pageYOffset > 2400 &&
    window.pageYOffset < 3600 &&
    $(window).width() > 650
  ) {
    displayFirstheaderInSection4.style.opacity = 1;
    addWidthForP.style.opacity = 1;
     inlineblockForDiv.style.opacity = 1;
     inlineblockForDiv2.style.opacity=1;
     resizeHeightForimageFourInSectionFourW11.style.opacity = 1;
} else if (
    window.pageYOffset > 1500 &&
    window.pageYOffset < 2900 &&
    $(window).width() < 650
  ) {
     displayFirstheaderInSection4.style.opacity = 1;
     addWidthForP.style.opacity = 1;
     inlineblockForDiv.style.opacity= 1;
     inlineblockForDiv2.style.opacity=1;
     resizeHeightForimageFourInSectionFourW11.style.opacity = 1;
  }
 
  else {
    displayFirstheaderInSection4.style.opacity = 0;
    addWidthForP.style.opacity = 0;
     inlineblockForDiv.style.opacity = 0;
     inlineblockForDiv2.style.opacity = 0;
     resizeHeightForimageFourInSectionFourW11.style.opacity = 0;
  }
}



window.addEventListener("scroll", scrollingFour);
function scrollingFour() {
  if (
    window.pageYOffset > 3500 &&
    window.pageYOffset < 4700 &&
    $(window).width() > 650
  ) {
    grayBackgroundForSection5.style.opacity = 1;
 
} else if (
    window.pageYOffset > 2500 &&
    window.pageYOffset < 3500 &&
    $(window).width() < 650
  ) {
    grayBackgroundForSection5.style.opacity = 1;
   
  }
 
  else {
    grayBackgroundForSection5.style.opacity = 0;
    
  }
}

window.addEventListener("scroll", scrollingFive);
function scrollingFive() {
  if (
    window.pageYOffset > 4500 &&
    window.pageYOffset < 5100 &&
    $(window).width() > 650
  ) {
    resizeHeightForimageFourInSectionSevenW11.style.opacity = 1;
 
} else if (
    window.pageYOffset > 2900 &&
    window.pageYOffset < 3400 &&
    $(window).width() < 650
  ) {
    resizeHeightForimageFourInSectionSevenW11.style.opacity = 1;
   
  }
 
  else {
    resizeHeightForimageFourInSectionSevenW11.style.opacity = 0;
    
  }
}






// window.addEventListener("scroll", scrollingSix);
// function scrollingSix() {
//   if (
//     window.pageYOffset > 5100 &&
//     window.pageYOffset < 5700 &&
//     $(window).width() > 650
//   ) {
//     sectionSeven.style.opacity = 1;
 
// } else if (
//     window.pageYOffset > 3300 &&
//     window.pageYOffset < 3800 &&
//     $(window).width() < 650
//   ) {
//     sectionSeven.style.opacity = 1;
   
//   }
 
//   else {
//     sectionSeven.style.opacity = 0;
    
//   }
// }