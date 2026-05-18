import { delateItems } from "./delateItems.js";
import { closeItems } from "./closeItems.js";
export const itemCompare =(el,elAtr)=>{
  let firstItemClick=localStorage.getItem("doubleatr");
  console.log(el.getAttribute("doubleattr"));

  console.log(firstItemClick);
  
  
   
    if(el.getAttribute("data-doubleattr")===firstItemClick){
 delateItems(el);
    }else{
     closeItems(el,elAtr);
        
    }
    
 }