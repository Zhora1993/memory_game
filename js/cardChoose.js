import { elemeents } from "./element.js";
import { itemArr } from "./itemArr.js";
import { itemCount } from "./itemCount.js";
import { itemCategorie } from "./itemCategore.js";
//elemeents.cartenShowCompnent=document.createElement("div");
//elemeents.cartenShowCompnent.classList.add("cartenShowComponent");

export const cartChooseMini =()=>{
    elemeents.cartenCountComponent.remove();
    elemeents.title.innerHTML="Please select the category"
    itemCategorie(4); 
//itemCount(4)
    
}
export const cartChooseMild =()=>{
  elemeents.cartenCountComponent.remove();   
  //itemCount(8) 
   itemCategorie(8); 
}
export const cartChooseMaxi =()=>{
  elemeents.cartenCountComponent.remove();   
   itemCategorie(12); 
//  itemCount(12); 
}