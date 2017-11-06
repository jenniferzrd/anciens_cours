/*global window, console, document*/
/*jslint evil: true */

var log = function log(val) {
    "use strict";
    window.console.log(val);
};

// rédiger une fonction afficherInfosUtilisateur(user)
// cette fonction utilise document.write pour afficher la carte
// d'identité complète d'un objet utilisateur passé en paramètre
// exécutez cette fonction pour les 2 objets utilisateurs
var afficherInfosUtilisateur = function afficherInfosUtilisateur(user) {
    "use strict";
    document.write("------------------------------------------<br>");
    document.write("l'utilisateur se nomme : " + user.nom + " " + user.prenom + ", son âge est : " + user.age + " ans.  <br> Son métier est  " + user.profession + ". <br> Sa couleur favorite est " + user.couleurPref + "<br>");
};


var comprendreReturn = function comprendreReturn(a1) {
    "use strict";
    return typeof a1;
};

var entrainement1 = function entrainement1() {
    "use strict";
    var str, bool, nb, und, isnull, obj, utilisateur1, utilisateur2, utilisateur3, res, hobbies, compteur, x;

    document.write("<h1>Entrainement 1</h1>");

    str = "un chaîne de caracs";
    bool = typeof str === "string";
    und = log('woot');
    nb = window.innerWidth;
    isnull = document.getElementById("vide");
    obj = {};
    document.write("la valeur de str = " + str + '<br>');
    document.write("la valeur de bool = " + bool + '<br>');
    document.write("la valeur de nb = " + nb + '<br>');
    document.write("la valeur de und = " + und + '<br>');
    document.write("la valeur de isnull = " + isnull + '<br>');
    document.write("la valeur de obj = " + obj + '<br>');

    obj.estPratique = true;
    obj.estMultiforme = true;
    obj.estDifficile = false;

    document.write("les objets sont pratique ? " + obj.estPratique + "<br>");

    utilisateur1 = {
        nom: "Amangoua",
        prenom: "Guillaume",
        age: 36,
        profession: "dev JS",
        couleurPref: "noir"
    };

    utilisateur2 = {
        nom: "Barg",
        prenom: "Jill",
        age: 32,
        profession: "prof d'anglais",
        couleurPref: "vert"
    };

    afficherInfosUtilisateur(utilisateur1);
    afficherInfosUtilisateur(utilisateur2);

    if (utilisateur1.nom === "Amangoua") {
        document.write("l'user 1 se nomme Barg");
    } else if (utilisateur2.prenom === "jill") {
        document.write("l'user 1 se prénomme Barg");
    } else {
        document.write("mauvaises réponses");
    }

    // si je met un if, suis-je obligé de mettre un else ?
    log(comprendreReturn("un exemple..."));
    res = comprendreReturn(true);
    log(res); // on a capturé la valeur de retour de la fonction...

    // utiliser la fonction comprendreReturn
    // avec un objet en argument et faire un test sur la valeur de retour
    // si c'est "object" -> lancer alert('c'\est un objet');

    if (comprendreReturn({name: "Jack"}) === "object") {
        log("C'est un objet !");
    }

    // dire ici en JS => si res vaut "object"

    utilisateur3 = {
        nom: "Vador",
        prenom: "Darth",
        age: NaN,
        profession: "sith",
        couleurPref: "noir",
        hobbies: ["combat sabre laser", "télékinésie", "être père", "étrangler sous fiffe de l'empire", "détruire des planètes"]
    };

    log(utilisateur3);
    // log(utilisateur3.hobbies);
    // log(utilisateur3.hobbies[0]);
    // log(utilisateur3.hobbies[1]);
    // log(utilisateur3.hobbies[2]);
    // log(utilisateur3.hobbies[3]);
    // log(utilisateur3.hobbies[4]);
    // log(utilisateur3.hobbies[777]); // affiche undefined ...
    hobbies = utilisateur3.hobbies;
    // log(hobbies[0] + " et " + hobbies[1]);
    // afficher dans la console les hobbies
    log('parcours avec une boucle while ');
    compteur = 0;
    while (compteur < hobbies.length) {
        log('tour de boucle n° ' + (compteur + 1));
        log(hobbies[compteur]);
        compteur += 1;
    }
    log('fin de boucle while ^^');
    log('------------------------------');
    log('parcours avec une boucle for ');

    for (compteur = 0; compteur < hobbies.length; compteur += 1) {
        log('tour de boucle n° ' + (compteur + 1));
        log(hobbies[compteur]);
    }

    log('fin de boucle for ^^');
    log('------------ CREATION ELEMENT HTML ------------------');
    x = document.createElement('div');
    x.id = "mon_element_cree_dynamiquement_par_js";
    x.className = "module test";
    x.textContent = "Je suis une div créée en JS !";
    // on a créé dynamiquement une div depuis JS
    // on lui appliqué un id et 2 classes CSS
    log(x);
    document.body.appendChild(x);
    // puis on l'insère dans le document avec appendChild




};

entrainement1();
