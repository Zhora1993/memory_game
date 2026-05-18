import { elemeents } from "./element.js";
import { startBtnHandle } from "./startbtnhandle.js";
function init (){

console.log(elemeents.ButtonComponent);
elemeents.startBtn.addEventListener("click", startBtnHandle);

 }

 document.addEventListener("DOMContentLoaded", init);