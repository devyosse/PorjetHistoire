const bouton = document.getElementById('button');
bouton.addEventListener('click', result);

// for generate
let name = [
    "Erwin",
    "Eren",
    "Livai",
    "Mikasa",
    "Armin"
];

let objet = [
    "avec une Eppé",
    "avec un Equipement Tridimentionelle",
    "avec un Balais",
    "avec une Hache"
];

let temperature = [
    "sous 10°",
    "sous 20°",
    "sous 15°",
    "sous 5°",
    "sous 0°"
];

let places = [
    " à la Zone d'entrainement ",
    " aux District de Trost ",
    " aux District de Shiganshina ",
    " à l'Exterieur des murs ",
    " aux District de Stohese "
];

let verbs = [
    "Se Bat contre les Titans",
    "S'entraine",
    "Se Bat contre le Cuirasse",
    "Se Bat contre le Colossal",
    "Se Bat contre le Bestial"
];

// generate history
function result() {
    let random = Math.round(Math.random() * name.length);
    let random2 = Math.round(Math.random() * objet.length);
    let random3 = Math.round(Math.random() * temperature.length);
    let random4 = Math.round(Math.random() * places.length);
    let random5 = Math.round(Math.random() * verbs.length);

    document.getElementById('history').innerHTML = document.getElementById('input').value + " et " + name[random] + " " +verbs[random5]+ "" +places[random4]+ "" +objet[random2]+ " " +temperature[random3]+ "";
}
