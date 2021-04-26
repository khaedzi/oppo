
"use strict";

////Definitions////
let ourItems = document.getElementById("our-Items");
let firstDeviedInFirstSection = document.createElement("div");

///items consestrocrores ////
function Phone(imageOne, moudelOne ,imagetwo , moudeltwo) {
  this.imageOne = imageOne;
  this.moudelOne = moudelOne;
  this.imagetwo = imagetwo;
  this.moudeltwo=moudeltwo;
}
//////prototype////

 Phone.prototype.appendNew = function (idOne,idTwo,idThree,idFour,classOne,classTwo,hrefHtml){
  let section = document.createElement("div");
  section.setAttribute("class", "container");
  ourItems.appendChild(section);
  let con = document.createElement("div");
  con.setAttribute("class", "container");
  section.appendChild(con);
  let MyRowOne = document.createElement("div");
  MyRowOne.setAttribute("class","row");
  con.appendChild(MyRowOne);
  let firstDevied1 = document.createElement("div");
  firstDevied1.setAttribute("class", "col-md-12");
  firstDevied1.classList.add("col-xs-12");
  MyRowOne.appendChild(firstDevied1);
  let MySecondRow=document.createElement("div");
  MySecondRow.setAttribute("class","row")
  firstDevied1.appendChild(MySecondRow);
  let firstDevied = document.createElement("div");
  firstDevied.setAttribute("class", "col-xs-12");
  firstDevied.classList.add("conIage","col-sm-4");
  MySecondRow.appendChild(firstDevied);
  let borederEvery=document.createElement('div');
  borederEvery.setAttribute("class",classOne);
  borederEvery.setAttribute("id",idOne);
  firstDevied.appendChild(borederEvery);
  let A=document.createElement("a");
  A.setAttribute("href",hrefHtml);
  A.setAttribute("target","_blank")
  borederEvery.appendChild(A);

  let myImage = document.createElement("img");
  myImage.setAttribute("src",this.imageOne);
  myImage.setAttribute("class", "center-block");
  myImage.classList.add("img-responsive", "imageInOUrItem");
  A.appendChild(myImage);
  let myNewText = document.createElement("h2");
  let TextInh2 = document.createTextNode(this.moudelOne);
  myNewText.setAttribute("class", "text-center");
  myNewText.classList.add("sytleH2InOurItem");
  myNewText.appendChild(TextInh2);
  A.appendChild(myNewText);
  let conFontAoswme = document.createElement("div");
  conFontAoswme.setAttribute("class", "text-center");
  borederEvery.appendChild(conFontAoswme);
  let FontAwsomeOne =document.createElement("i");
  FontAwsomeOne.setAttribute("class", "fas");
  FontAwsomeOne.classList.add("fa-circle");
  FontAwsomeOne.setAttribute("id", idTwo);
  conFontAoswme.appendChild(FontAwsomeOne);
  let secondCicle = document.createElement("i");
  secondCicle.setAttribute("class", "fas");
  secondCicle.classList.add("fa-circle", "changeColorToBlue", "boActive");
  conFontAoswme.appendChild(secondCicle);
  let con2 = document.createElement("div");
  con2.setAttribute("class", classTwo);
  con2.setAttribute("id", idThree);


  firstDevied.appendChild(con2);


  let A2=document.createElement("a");
  A2.setAttribute("href",hrefHtml);
  A2.setAttribute("target","_blank")
  con2.appendChild(A2);
  let MySecondImg = document.createElement("img");
  MySecondImg.setAttribute("src",this.imagetwo);
  MySecondImg.setAttribute("class", "center-block");
  MySecondImg.classList.add("img-responsive", "imageInOUrItem");
  A2.appendChild(MySecondImg);
  let mySecondH2 = document.createElement("h2");
  let mySecondText = document.createTextNode(this.moudeltwo);
  mySecondH2.setAttribute("class", "text-center");
  mySecondH2.classList.add("sytleH2InOurItem");
  mySecondH2.appendChild(mySecondText);
  A2.appendChild(mySecondH2);
  let con2forFownts = document.createElement("div");
  con2forFownts.setAttribute("class", "text-center");
  con2.appendChild(con2forFownts);
  let rigthFontblack = document.createElement("i");
  rigthFontblack.setAttribute("class", "fas");
  rigthFontblack.classList.add("fa-circle", "changeColorToBlue", "boActive");
  con2forFownts.appendChild(rigthFontblack);
  let leftBlack = document.createElement("i");
  leftBlack.setAttribute("class", "fas");
  leftBlack.classList.add("fa-circle", "changeColorToBlack");
  leftBlack.setAttribute("id",idFour);
  con2forFownts.appendChild(leftBlack);
};
////inseerting New items


let PhoneThree = new Phone("image/a93aSeblack.png", "A93 black","image/a93Asewhite.png", "A93 blue");
PhoneThree.appendNew(
"borderEveryItem",
"changeColorToBlue",
"borderEveryItem3",
"changeColorToBlue0",
"borderEveryItem",
"borderEveryItem2",
"/a93.html"
);

let PhoneTwo = new Phone("image/a15AseBlack.png", "A15 Black" ,"image/a15Seblue.png", "A15 Blue" );
PhoneTwo.appendNew(
"borderEveryItem1",
"changeColorToBlue1",
"borderEveryItem4",
"changeColorToBlack1",
"borderEveryItem",
"borderEveryItem2",
"/a15.html"
);

let PhoneFour = new Phone("image/a53ASeblack.png", "A53 Black" ,"image/a53ASeblue.png", "A53 Blue" );
PhoneFour.appendNew(
"borderEveryItem2",
"changeColorToBlue2",
"borderEveryItem5",
"changeColorToBlack2",
"borderEveryItem",
"borderEveryItem2",
"/a53.html"
);


let PhoneFive = new Phone("image/a73 white .png", "A73 White" ,"image/a73ASeblack.png", "A73 Black" );
PhoneFive.appendNew(
"borderEveryItem7",
"changeColorToBlue8",
"borderEveryItem9",
"changeColorToBlack10",
"borderEveryItem",
"borderEveryItem2",
"/a73.html"
);

let PhoneSix = new Phone("image/a92ASeBlack.jfif", "A92 black" ,"image/a92ASeblue.jpg", "A92 Blue" );
PhoneSix.appendNew(
"borderEveryItem8",
"changeColorToBlue9",
"borderEveryItem10",
"changeColorToBlack11",
"borderEveryItem",
"borderEveryItem2",
"/a92.html"
);

let firs=document.getElementById("borderEveryItem");
let ss=document.getElementById("changeColorToBlue");
let firs2=document.getElementById("borderEveryItem3");
let ss2=document.getElementById("changeColorToBlue0");
let firs1=document.getElementById("borderEveryItem1");
let ss1=document.getElementById("changeColorToBlue1");
let firs21=document.getElementById("borderEveryItem4");
let ss21=document.getElementById("changeColorToBlack1");
let hide1=document.getElementById("borderEveryItem2");
let font1=document.getElementById("changeColorToBlue2");
let hide2=document.getElementById("borderEveryItem5");
let font2=document.getElementById("changeColorToBlack2");
let hide3=document.getElementById("borderEveryItem7");
let font3=document.getElementById("changeColorToBlue8");
let hide4=document.getElementById("borderEveryItem9");
let font4=document.getElementById("changeColorToBlack10");
let hide5=document.getElementById("borderEveryItem8");
let font5=document.getElementById("changeColorToBlue9");
let hide6=document.getElementById("borderEveryItem10");
let font6=document.getElementById("changeColorToBlack11");

/////The Events liscner
font5.addEventListener("click", function () {
  chan(hide6,hide5);
});
font6.addEventListener("click", function () {
  chan2(hide6,hide5);
});

font3.addEventListener("click", function () {
  chan(hide4,hide3);
});
font4.addEventListener("click", function () {
  chan2(hide4,hide3);
});
font1.addEventListener("click", function () {
  chan(hide2,hide1);
});
font2.addEventListener("click", function () {
  chan2(hide2,hide1);
});
ss.addEventListener("click", function () {
    chan(firs2,firs);
  });
  ss2.addEventListener("click", function () {
    chan2(firs2,firs);
  });
  
  ss1.addEventListener("click", function () {
    chan(firs21,firs1);
  });
  ss21.addEventListener("click", function () {
    chan2(firs21,firs1);
  });

  //adding classes Section for locations
  firs.classList.add("classMe1","wow",'animate__lightSpeedInLeft');
  firs2.classList.add("classMe1","wow",'animate__lightSpeedInLeft')
firs1.classList.add("class1","classMe2","wow",'animate__lightSpeedInLeft'); 
firs21.classList.add("class1","classMe2","wow",'animate__lightSpeedInLeft'); 
hide1.classList.add("class2","classMe3","wow",'animate__lightSpeedInLeft');
hide2.classList.add("class2","classMe3","wow",'animate__lightSpeedInLeft');
hide3.classList.add("changeTopForTheFourth","wow","classMe4",'animate__lightSpeedInLeft');
hide4.classList.add("changeTopForTheFourth","wow","classMe4",'animate__lightSpeedInLeft');
hide5.classList.add("changeTopForTheFourth","wow","class1","classMe5","wow","animate__fadeInLeft",'animate__lightSpeedInLeft');
hide6.classList.add("changeTopForTheFourth","wow","class1","classMe5","wow","animate__fadeInLeft",'animate__lightSpeedInLeft');



////function to change color//
  function chan(one, two) {
  two.style.zIndex = 0;
  one.style.zIndex = 2;
  console.log("dd");
}
function chan2(one, two) {
  two.style.zIndex = 2;
  one.style.zIndex = 0;
  console.log("dd");
}
