/*global window, console, document*/
/*jslint evil: true */

var log = function log(val) {
    "use strict";
    window.console.log(val);
};

var afficherUtilisateurs = function afficherUtilisateurs(users) {
    "use strict";
    var i, div, container;
    container = document.getElementById("utilisateurs");
    for (i = 0; i < users.length; i += 1) {
        //log(users[i]);
        div = document.createElement('div');
        div.id = "user_ - " + (i + 1);
        div.className = "user";
        div.innerHTML = '<span>' + users[i].nom + '</span>';
        div.innerHTML += '<span>' + users[i].prenom + '</span>';
        //log(div);
        container.appendChild(div);
    }
};

var entrainement2 = function entrainement2() {
    //envoyer un tableau d'utilisateurs
    "use strict";
    var tableau, utilisateur1, utilisateur2, utilisateur3;

    utilisateur1 = {
        nom: "Amangoua",
        prenom: "Guillaume",
        age: 36,
        profession: "dev JS",
        couleurPref: "noir",
        hobbies: ["coder", "gaming", "skateboard"]
    };

    utilisateur2 = {
        nom: "Barg",
        prenom: "Jill",
        age: 32,
        profession: "prof d'anglais",
        couleurPref: "vert",
        hobbies: ["cuisine", "voyage"]
    };

    utilisateur3 = {
        nom: "Vador",
        prenom: "Darth",
        age: NaN,
        profession: "sith",
        couleurPref: "noir",
        hobbies: ["combat sabre laser", "télékinésie", "être père", "étrangler sous fiffe de l'empire", "détruire des planètes"]
    };

    tableau = [utilisateur1, utilisateur2, utilisateur3];
    afficherUtilisateurs(tableau);
};
