import { elemeents } from "./element.js";
import { itemCompare } from "./itemcompare.js";
export const createItem =(count,categorie)=>{

console.log(count);
console.log(categorie);
elemeents.itemsContainer=document.createElement("div");
elemeents.itemsContainer.classList.add("itemContainer_flex");
appendItemsToContainer(count, categorie);
return elemeents.itemsContainer;

 }

 const appendItemsToContainer =(count, categorie)=>{
setGrid(count);
localStorage.setItem("timeStart", Date.now());
  const numbers = [];

    while (numbers.length < count) {
        const rand = Math.floor(Math.random() * 12); // 0–11

        if (!numbers.includes(rand)) {
            numbers.push(rand);
        }
    }
        // Paare erstellen
    const doubled = [...numbers, ...numbers];

    // Mischen
    let doubls=doubled.sort(() => Math.random() - 0.5);
    console.log(doubls);
    
doubls.map((el)=>{
   
    
   let item= document.createElement("div");
   item.classList.add("item-img");
   item.setAttribute("data-doubleattr",el );
   let img= document.createElement("img");
   img.src="../img/"+categorie+"/bild"+el+".svg";
   item.append(img);
   elemeents.itemsContainer.append(item);

})
  let counter=0;
let myEls=elemeents.itemsContainer.querySelectorAll(".item-img");
myEls.forEach((el)=>{
    el.addEventListener("click",()=> {
                 let img= el.querySelector("img");
    img.style.visibility= "visible";
    el.classList.add("aufgedeckt");

      
        if(counter==0){
  
            
             localStorage.setItem("doubleatr",el.getAttribute("data-doubleattr"));
             counter ++;
             elemeents.firstClickItem=el;
        }else{
          counter=0;
          
        itemCompare(el, el.getAttribute("data-doubleattr"));
        }
    })
})

 }

const setGrid = (count) => {
    console.log(count);
    
    let cols;

    if (count === 4) cols = 4;
    if (count === 8) cols = 4;
    if (count === 12) cols = 6;

    elemeents.itemsContainer.style.gridTemplateColumns = `repeat(${cols}, 140px)`;
};