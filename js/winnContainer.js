import { elemeents } from "./element.js";

export const winnContainer = (elCount) => {
     
    elemeents.itemsContainer.innerHTML = "";
    elemeents.itemsContainer.classList.add("showwinnitem");
    elemeents.itemsTitle.remove();

    // Haupt-Win-Karte
    const card = document.createElement("div");
    card.classList.add("win-card");

    // Schwebende Partikel
    const particles = ["⭐","🌟","✨","💫","🎉","🎊","⭐","🌟","✨","💫"];
    const particlesDiv = document.createElement("div");
    particlesDiv.classList.add("win-particles");
    particles.forEach((emoji, i) => {
        const p = document.createElement("span");
     
        p.classList.add("win-particle");
        p.textContent = emoji;
        p.style.setProperty("--i", i);
        particlesDiv.append(p );
    });
       let showtime= document.createElement("span");
     showtime.classList.add("win-time");
let playtime = Math.floor((Date.now() - Number(localStorage.getItem("timeStart"))) / 1000);
showtime.innerHTML = "⏱️ Deine Zeit: <strong>" + playtime + " Sekunden</strong>";
     card.append(showtime);
     let record = Number(localStorage.getItem("recordeTimeSave")) || Infinity;

    if(elCount===8){
             let record = Number(localStorage.getItem("recordeTimeSave8")) || Infinity;
         if(playtime<record){
        localStorage.setItem("recordeTimeSave8",playtime);
        localStorage.setItem("recorduser8", localStorage.getItem("user"));
     }
    }else if(elCount===16){
              let record = Number(localStorage.getItem("recordeTimeSave16")) || Infinity;
         if(playtime<record){
        localStorage.setItem("recordeTimeSave16",playtime);
        localStorage.setItem("recorduser16", localStorage.getItem("user"));
     }  
    }else if(elCount===24){
        let record = Number(localStorage.getItem("recordeTimeSave24")) || Infinity;
         if(playtime<record){
        localStorage.setItem("recordeTimeSave24",playtime);
        localStorage.setItem("recorduser24", localStorage.getItem("user"));
     }
    }
     let showRekord= document.createElement("span");
     showRekord.classList.add("showRekord");
     if(elCount===8){
   showRekord.innerHTML="🥇 Rekord mit " + elCount + " Karten: <strong>" + localStorage.getItem("recordeTimeSave8") + " s</strong> — " + localStorage.getItem("recorduser8");
     }else if(elCount===16){
   showRekord.innerHTML="🥇 Rekord mit " + elCount + " Karten: <strong>" + localStorage.getItem("recordeTimeSave16") + " s</strong> — " + localStorage.getItem("recorduser16");
     }else if(elCount===24){
   showRekord.innerHTML="🥇 Rekord mit " + elCount + " Karten: <strong>" + localStorage.getItem("recordeTimeSave24") + " s</strong> — " + localStorage.getItem("recorduser24");
     }
    card.append(showRekord);
     // Trophy
    const trophy = document.createElement("div");
    trophy.classList.add("win-trophy");
    trophy.textContent = "🏆";

    // Sterne-Reihe
    const stars = document.createElement("div");
    stars.classList.add("win-stars");
    stars.innerHTML = "⭐ ⭐ ⭐";

    // Titel
    const title = document.createElement("h2");
    title.classList.add("win-title");
    title.textContent = "Super gemacht!";

    // Untertitel
    const sub = document.createElement("p");
    sub.classList.add("win-sub");
    sub.textContent = "Du hast alle Paare gefunden! 🎉";

    // Button (mit Verzögerung einblenden)
    const btn = document.createElement("button");
    btn.classList.add("startBotton", "win-btn");
    btn.innerHTML = "🏠 Zur Startseite";
    btn.addEventListener("click", () => { window.location.href = "index.html"; });

    card.append(particlesDiv, trophy, stars, title, sub);
    elemeents.itemsContainer.append(card);

    setTimeout(() => {
        card.append(btn);
    }, 800);
};
