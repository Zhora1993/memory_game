import { elemeents } from "./element.js"
import { loadItems } from "./loadItems.js";
export const itemCategorie =(count)=> {

elemeents.itemCategorieContainer=document.createElement("div");
elemeents.itemCategorieContainer.classList.add("itemCategoreContainer");

// Überschrift
const heading = document.createElement("h2");
heading.classList.add("panel-title");
heading.textContent = "🌟 Wähle eine Kategorie!";
elemeents.itemCategorieContainer.append(heading);

// Buttons-Reihe
const row = document.createElement("div");
row.classList.add("panel-btns");

elemeents.itemCategorieBtm1=document.createElement("button");
elemeents.itemCategorieBtm2=document.createElement("button");
elemeents.itemCategorieBtm3=document.createElement("button");
elemeents.itemCategorieBtm1.classList.add("itemCategorieBtn");
elemeents.itemCategorieBtm2.classList.add("itemCategorieBtn");
elemeents.itemCategorieBtm3.classList.add("itemCategorieBtn");
elemeents.itemCategorieBtm1.innerHTML="🌿 Natur";
elemeents.itemCategorieBtm2.innerHTML="🐾 Tiere";
elemeents.itemCategorieBtm3.innerHTML="🚗 Autos";

row.append(elemeents.itemCategorieBtm1);
row.append(elemeents.itemCategorieBtm2);
row.append(elemeents.itemCategorieBtm3);
elemeents.itemCategorieContainer.append(row);
elemeents.hauptGalaxy.append(elemeents.itemCategorieContainer);

elemeents.itemCategorieBtm1.addEventListener("click", ()=>{loadItems(count,"natur")});
elemeents.itemCategorieBtm2.addEventListener("click", ()=>{loadItems(count,"tiere")});
elemeents.itemCategorieBtm3.addEventListener("click", ()=>{loadItems(count,"cars")});

}
