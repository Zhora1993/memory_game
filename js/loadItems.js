import { elemeents } from "./element.js";
import { createItem } from "./createItem.js";
export const loadItems = (count, categorie)=>{
console.log(count);
elemeents.hauptGalaxy.innerHTML="";
elemeents.hauptGalaxy.classList.remove("hauptGalaxy");
elemeents.hauptGalaxy.classList.add("hauptGalaxyFlex");
elemeents.hauptGalaxy.classList.add("#");
elemeents.itemsTitle=document.createElement("h1");
elemeents.itemsTitle.innerHTML="Memory Game";
elemeents.itemsTitle.classList.add("game-title")
elemeents.hauptGalaxy.append(elemeents.itemsTitle);
//elemeents.itemsContainer=document.createElement("div");
//elemeents.itemsContainer.classList.add("itemContainer_flex");
elemeents.itemsContainer=createItem(count,categorie);
elemeents.hauptGalaxy.append(elemeents.itemsContainer);

//createItem(count,categorie);
} 