import { elemeents } from "./element.js";
import { countCarte } from "./cartenCount.js";
export const startBtnHandle =()=>{


elemeents.ButtonComponent.remove();
elemeents.title.innerHTML="Memory Game"
countCarte();
}