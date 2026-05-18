import { elemeents } from "./element.js"

import { cartChooseMini , cartChooseMild, cartChooseMaxi } from "./cardChoose.js";
export const countCarte =()=>{

elemeents.cartenCountComponent=document.createElement("div");
elemeents.cartenCountComponent.classList.add("cartenCountComponent");
elemeents.playerContainer= document.createElement("div");
elemeents.playerContainer.classList.add("playerContainer");

let player= document.createElement("input");
let playerFileShow= document.createElement("span");
playerFileShow.innerHTML="";

const playerTitle= document.createElement("h1");
playerTitle.classList.add("playerTitle");
playerTitle.innerHTML="Player";
player.setAttribute("type", "text");
player.classList.add("playerName");
elemeents.playerContainer.append(playerTitle, player,playerFileShow);

// Überschrift
const heading = document.createElement("h2");
heading.classList.add("panel-title");
heading.textContent = "🎮 Wie viele Karten?";
elemeents.cartenCountComponent.append(heading);

// Buttons-Reihe
const row = document.createElement("div");
row.classList.add("panel-btns");

elemeents.cartenCountBtm1=document.createElement("button");
elemeents.cartenCountBtm2=document.createElement("button");
elemeents.cartenCountBtm3=document.createElement("button");
elemeents.cartenCountBtm1.classList.add("cartenCountBtn");
elemeents.cartenCountBtm2.classList.add("cartenCountBtn");
elemeents.cartenCountBtm3.classList.add("cartenCountBtn");
elemeents.cartenCountBtm1.innerHTML="🃏 8 Karten";
elemeents.cartenCountBtm2.innerHTML="🃏 16 Karten";
elemeents.cartenCountBtm3.innerHTML="🃏 24 Karten";

row.append(elemeents.cartenCountBtm1);
row.append(elemeents.cartenCountBtm2);
row.append(elemeents.cartenCountBtm3);
elemeents.cartenCountComponent.append(row);
elemeents.hauptGalaxy.append( elemeents.playerContainer, elemeents.cartenCountComponent);




elemeents.cartenCountBtm1.addEventListener("click",()=>{
    if(player.value !== ""){
 localStorage.setItem("user",player.value);

      elemeents.playerContainer.remove();

        cartChooseMini();
    }else{
        console.log("fehler bei input");
        playerFileShow.innerHTML="gib dein Name ein!";
     
      
    }
})
elemeents.cartenCountBtm2.addEventListener("click",()=>{
    if(player.value !== ""){
                localStorage.setItem("user",player.value);

                elemeents.playerContainer.remove();

        cartChooseMild();
    }else{
        console.log("fehler bei input");
               playerFileShow.innerHTML="gib dein Name ein!";

    }
})
elemeents.cartenCountBtm3.addEventListener("click",()=>{
    if(player.value !== ""){

        localStorage.setItem("user",player.value);
        elemeents.playerContainer.remove();
        cartChooseMaxi();
    }else{
        console.log("fehler bei input");
   playerFileShow.innerHTML="gib dein Name ein!";


        
    }
})

}
