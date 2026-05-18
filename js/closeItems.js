import { elemeents } from "./element.js";
export const closeItems =(el,elAtr)=>{
      let firstItemClick=localStorage.getItem("doubleatr");
      console.log(firstItemClick);
        let img =el.querySelector("img");
        let firstImg= elemeents.firstClickItem.querySelector("img");
           setTimeout(() => {
            img.style.visibility = "hidden";
            el.classList.remove("aufgedeckt");
            console.log(elemeents.firstClickItem);
            firstImg.style.visibility="hidden";
            elemeents.firstClickItem.classList.remove("aufgedeckt");
        }, 500);
    

    console.log(el);
    console.log(elAtr);
    
    console.log(elemeents);
    
}