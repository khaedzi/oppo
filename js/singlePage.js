"use strict"


export class InfoPHone {
    constructor(image, phoneName, colors, processor, ram, rom, price) {
        this.image = `image/${image}`;
        this.phoneName = phoneName;
        this.colors = colors;
        this.processor = processor;
        this.ram = ram;
        this.rom = rom;
        this.price = price;
        this.userInterFace = "color os";

    }
    addNewInfos(partOneId, partTwoId) {

        let MyImage = document.createElement("img");
        MyImage.setAttribute("src", this.image);
        MyImage.setAttribute("class", "img-responsive");
        MyImage.classList.add("editmage");
        partOneId.appendChild(MyImage);


        let MyPhoneName = document.createElement("h4");
        let MyTextInMyPhoneName = document.createTextNode(this.phoneName);
        MyPhoneName.appendChild(MyTextInMyPhoneName);
        MyPhoneName.setAttribute("class", "overRidinGPInpartOne");
        MyPhoneName.classList.add("text-center");
        partOneId.appendChild(MyPhoneName);

        let phoneName2 = document.createElement("h4");
        let textInphoneName2 = document.createTextNode(`The phone Name is: ${this.phoneName}`);
        phoneName2.appendChild(textInphoneName2);

        partTwoId.appendChild(phoneName2);

        let Mycolors = document.createElement("h4");
        let textInMycolors = document.createTextNode(`The colors : ${this.colors}`);
        Mycolors.appendChild(textInMycolors);
        partTwoId.appendChild(Mycolors);

        let Myprocessor = document.createElement("h4");
        let textInMyprocessor = document.createTextNode(`The processor : ${this.processor}`);
        Myprocessor.appendChild(textInMyprocessor);
        partTwoId.appendChild(Myprocessor);

        let MyuserInterFace = document.createElement("h4");
        let textInMyuserInterFace = document.createTextNode(`The user InterFace : ${this.userInterFace}`);
        MyuserInterFace.appendChild(textInMyuserInterFace);
        partTwoId.appendChild(MyuserInterFace);


        let MyRam = document.createElement("h4");
        let textInMyRam = document.createTextNode(`Ram : ${this.ram}`);
        MyRam.appendChild(textInMyRam);
        partTwoId.appendChild(MyRam);

        let MyRom = document.createElement("h4");
        let textInMyRom = document.createTextNode(`Rom : ${this.rom}`);
        MyRom.appendChild(textInMyRom);
        partTwoId.appendChild(MyRom);

        let Myprice = document.createElement("h4");
        let textInprice = document.createTextNode(`price : ${this.price}`);
        Myprice.appendChild(textInprice);
        partTwoId.appendChild(Myprice);

    }
}












