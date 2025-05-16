// Exo 1

let prenom = prompt(`Quel est votre prénom ?`)
let age = prompt(`Et quel est votre âge ?`)
let agePlus = age++

console.log(`Je m'appelle ${prenom} et j'aurai ${age} ans l'an prochain.`)

// Exo 2

let longueur = 14
let largeur = 20
let surface = longueur * largeur

console.log(`Le rectangle de ${longueur} cm de long et de ${largeur} cm de large a pour surface ${surface} cm².`)

// Exo 3

let temperatureCelsius = 15
let temperatureKelvin = temperatureCelsius + 273.15

console.log(`La température de ${temperatureCelsius}° vaut ${temperatureKelvin} en Kelvin.`)

// Exo 4

let x = prompt("Saississez un nombre appelé `x` :")
let y = prompt("Saississez un nombre appelé `y` :")
let message

if (x > y) {
    message = `${x} est plus grand que ${y}.`
    } else {
    message = `${x} est plus petit que ${y}.`
    }

let paragraphe = document.getElementById("p1");
paragraphe.innerHTML=message;