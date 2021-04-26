var submit = document.getElementById("submit2");
var submitOne = document.getElementById("submitOne");
let MyPages=["w31","reno","renoz","reno2","reno2f","rino","remo","a","r",,"reno3","reno4","reno4pro","reno3pro","renoseries","reno5","reno5f","rennof","a9","a5s","a5","a52020","a52","a53","a73","a93","a92","a15","coloros","w11"];
submit.addEventListener("submit", handle);
function handle(event) {
  event.preventDefault();
  let valueSearch = event.target.koo.value;
  let changeVAlueToArray = valueSearch.split(" ");
  let vlaueWitOutSapce = changeVAlueToArray.join("");
  let valueToLowerCase = vlaueWitOutSapce.toLowerCase();
  let reno4Array = ["r", "R", "e", "E", "N", "n", "O", "o"];
  if (
    valueToLowerCase == null ||
    valueToLowerCase == undefined ||
    valueToLowerCase == ""
  ) {
    swal({ title: "Search location is empty !!", icon: "warning" });
  } else if (valueToLowerCase == "reno") {
    let valueToLowerCase = "renoseries";
    window.location.replace(`${valueToLowerCase}.html`);
  } 
  else if (valueToLowerCase == "r") {
    let valueToLowerCase = "renoseries";
    window.location.replace(`${valueToLowerCase}.html`);
  }

 else if (valueToLowerCase == "rino") {
    let valueToLowerCase = "renoseries";
    window.location.replace(`${valueToLowerCase}.html`);
  }
  else if (valueToLowerCase == "remo") {
    let valueToLowerCase = "renoseries";
    window.location.replace(`${valueToLowerCase}.html`);
  }
  else if (valueToLowerCase == "renof") {
    let valueToLowerCase = "reno2f";
    window.location.replace(`${valueToLowerCase}.html`);
  }

else if(valueToLowerCase == "userinterfaceinoppo"){
    let valueToLowerCase = "coloros";
    window.location.replace(`${valueToLowerCase}.html`);

}

else if(valueToLowerCase == "userinterface"){
    let valueToLowerCase = "coloros";
    window.location.replace(`${valueToLowerCase}.html`);

}

else if(valueToLowerCase == "oppouserinterface"){
    let valueToLowerCase = "coloros";
    window.location.replace(`${valueToLowerCase}.html`);

}
  else if (valueToLowerCase == "renopro") {
    let valueToLowerCase = "reno3pro";
    window.location.replace(`${valueToLowerCase}.html`);
  }
  else if (valueToLowerCase == "a") {
    let valueToLowerCase = "aseries";
    window.location.replace(`${valueToLowerCase}.html`);
  }
  else if(valueToLowerCase == "a5"){
    let valueToLowerCase = "a52020";
    window.location.replace(`${valueToLowerCase}.html`);
    
  }

  else if(valueToLowerCase == "a520"){
    let valueToLowerCase = "a52020";
    window.location.replace(`${valueToLowerCase}.html`);
    
  }
  else if(valueToLowerCase == "w" || valueToLowerCase == "w1" || valueToLowerCase == "w11"){
    let valueToLowerCase = "w11";
    window.location.replace(`${valueToLowerCase}.html`);
    
  }
  else if(valueToLowerCase == "w3" || valueToLowerCase == "w13" || valueToLowerCase == "w3"){
    let valueToLowerCase = "w31";
    window.location.replace(`${valueToLowerCase}.html`);
    
  }

   else if(MyPages.find(v => (valueToLowerCase === v))){
    window.location.replace(`${valueToLowerCase}.html`);


}
  else { 
    swal({ title: "Nothing matches what you entered in the search field, please try again", icon: "warning" });
   }

}
