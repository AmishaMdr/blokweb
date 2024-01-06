// JavaScript Document
console.log("HelloWorld");

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  const menu = document.querySelector('.menu');
const menu2 = document.querySelector('.menu2');

// Functie om het hamburgermenu te tonen/verbergen op basis van schermgrootte
function toggleMenuVisibility() {
    if (window.innerWidth <= 700) {
        menu.style.display = 'none';
        menu2.style.display = 'block';
    } else {
        menu.style.display = 'block';
        menu2.style.display = 'none';
    }
}

// Voer de functie uit wanneer de pagina laadt en wanneer het schermformaat wijzigt
window.onload = toggleMenuVisibility;
window.onresize = toggleMenuVisibility;

