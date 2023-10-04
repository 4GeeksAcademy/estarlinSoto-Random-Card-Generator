/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Declaro 2 arrays con lo que necesario para generar la carta
  let logos = ["♦", "♥", "♠", "♣"];
  let cartas = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  window.generarCarta = () => {
    //Genero las posibles combinaciones de los caracteres y valorers de la carta
    let cartasRandom = cartas[Math.floor(Math.random() * cartas.length)];
    let logosRandom = logos[Math.floor(Math.random() * logos.length)];

    //Hago un control para asignarle colores a los signos de la carta generada
    if (logosRandom == "♦" || logosRandom == "♥") {
      document.getElementById("logoUp").style.color = "red";
      document.getElementById("logoDown").style.color = "red";

      document.getElementById("logoDown").innerHTML = logosRandom;
      document.getElementById("logoUp").innerHTML = logosRandom;
      document.getElementById("cartValue").innerHTML = cartasRandom;

      return;
    }
    if (logosRandom === "♠" || logosRandom === "♣") {
      document.getElementById("logoUp").style.color = "black";
      document.getElementById("logoDown").style.color = "black";
      document.getElementById("logoDown").innerHTML = logosRandom;
      document.getElementById("logoUp").innerHTML = logosRandom;
      document.getElementById("cartValue").innerHTML = cartasRandom;
    }
    //Hago  que la funcion se llame a ella misma cada 10 segundos (esto solo funciona despues de presionar el boton generar carta)
    setInterval(generarCarta, 10000);
  };

  //Aqui le asigno el alto y el ancho a la carta generada (Hay que presionar enter para que se asignen los valores)
  document.getElementById("inputAncho").addEventListener("keyup", e => {
    if (e.key === "Enter") {
      let ancho = document.getElementById("inputAncho").value;
      ancho = parseInt(ancho);
      if (Number(ancho)) {
        document.getElementById("contenedor").style.width = `${ancho}px`;
      } else {
        alert("Ingresa Un Numero");
      }
    }
  });

  document.getElementById("inputAlto").addEventListener("keyup", e => {
    if (e.key === "Enter") {
      let alto = document.getElementById("inputAlto").value;
      alto = parseInt(alto);
      if (Number(alto)) {
        document.getElementById("contenedor").style.height = `${alto}px`;
      } else {
        alert("Ingresa Un Numero");
      }
    }
  });
};
