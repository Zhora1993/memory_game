import { elemeents } from "./element.js"
import { winnContainer } from "./winnContainer.js";
export const delateItems=(el)=>{
    let itemClass=el.getAttribute("class").split(" ")[0];
    let elscount=document.querySelectorAll("."+itemClass);

  
    let elAtr= el.getAttribute("data-doubleattr")
    console.log(elAtr);
    const els = document.querySelectorAll(`[data-doubleattr="${elAtr}"]`);
    els.forEach(el => {
 
       setTimeout(()=>{
  el.style.visibility = "hidden";
       console.log(el);
       
       let img =el.querySelector("img");
       console.log(img);
       
       img.style.visibility = "hidden";
       },500)
});


setTimeout(()=>{
    console.log(elemeents);
const allHidden = [...elemeents.itemsContainer.children].every(el =>
        el.style.visibility === "hidden"

);

if (allHidden) {
    elemeents.itemsContainer.innerHTML="";
    winnContainer(elscount.length);
}
},550)

}