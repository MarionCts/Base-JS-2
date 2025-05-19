// Exo 1

let prenom = prompt(`Quel est votre prénom ?`);
let age = prompt(`Et quel est votre âge ?`);

console.log(`Je m'appelle ${prenom} et j'aurai ${Number(age) + 1} ans l'an prochain.`);

// Exo 2

let longueur = Number(prompt(`Quelle est la longueur ?`));
let largeur = Number(prompt(`Et quel est la largeur ?`));
let surface = (longueur) * (largeur);

console.log(`Le rectangle de ${longueur} cm de long et de ${largeur} cm de large a pour surface ${surface} cm².`)

// Exo 3

let temperatureCelsius = Number(prompt(`Entrez la température actuelle en degrés Celsius, je vais la convertir en Kelvin :`));
let temperatureKelvin = temperatureCelsius + 273.15

console.log(`La température de ${temperatureCelsius}° vaut ${temperatureKelvin} en Kelvin.`)

Exo 4

let x = Number(prompt("Saississez un nombre appelé `x` :"));
let y = Number(prompt("Saississez un nombre appelé `y` :"));
const message = document.getElementById("p1");

if (x > y) {
    message.textContent = `${x} est plus grand que ${y}.`
    } else {
    message.textContent = `${x} est plus petit que ${y}.`
    }
