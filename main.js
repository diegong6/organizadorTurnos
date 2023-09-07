const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".bot1");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const botonApretado = boton.textContent;

    if (boton.id === "c") {
      pantalla.textContent = "0";
      return;
    }

    if (boton.id === "borrar") {
      if (
        pantalla.textContent.length === 1 ||
        pantalla.textContent === "Error!"
      ) {
        pantalla.textContent = "0";
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
      }
      return;
    }

    if (boton.id === "igual") {
      try {
        pantalla.textContent = eval(pantalla.textContent);
      } catch {
        pantalla.textContent = "Error!";
      }
      return;
    }

    if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
      pantalla.textContent = botonApretado;
    } else {
      pantalla.textContent += botonApretado;
    }
  });
});

//CHAT BOT

window.addEventListener("mouseover", initLandbot, { once: true });
window.addEventListener("touchstart", initLandbot, { once: true });
var myLandbot;
function initLandbot() {
  if (!myLandbot) {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.addEventListener("load", function () {
      myLandbot = new Landbot.Popup({
        configUrl:
          "https://storage.googleapis.com/landbot.online/v3/H-1714810-YAC5365KK4G0A2NQ/index.json",
      });
    });
    s.src = "https://cdn.landbot.io/landbot-3/landbot-3.0.0.js";
    var x = document.getElementsByTagName("script")[0];
    x.parentNode.insertBefore(s, x);
  }
}

// INTRO

const intro1 = document.querySelector(".intro1");
document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    intro1.classList.add("display-none");
  }, 900);
});
