var app = (function app() {
    "use strict";
    var creerCarte, dom, doWhile, parcourirDataset, observer;

    window.onload = function start() {
        log("ready to rock");
        dom = {};
        dom.exo1 = byId("do_while");
        dom.exo2_3 = byId("get_data");
        dom.cartes = byId("cartes");
        observer();
    };

    doWhile = function doWhile() {
        var quest, res, resUser;

        quest = "JS ça roxxx ?";
        res = "oui";

        do {
            resUser = window.prompt(quest);

        } while (resUser !== res);

        window.alert("oookay c'est bon voilà ton dessert !!!");

    };


    parcourirDataset = function parcourirDataset() {
      dataset1.forEach(function parse(perso) {
        creerCarte(perso);
      });
    };

    creerCarte = function creerCarte(infos) {
      var carte, i, prop, li;
      // on créé la carte et son markup HTML
      carte = document.createElement("div");
      carte.className = "carte " + infos.genre;
      carte.innerHTML = '<h2 class="nom"></h2><div class="icon"></div><h3 class="hobbies">Hobbies: </h3><ul class="list"></ul>';

      // on parcourt toutes les propriétés de l'objet infos
      for (prop in infos) {

        if (prop === "nom") {
          carte.querySelector(".nom").textContent = infos[prop];

        } else if (prop === "prenom" && infos[prop]) {
          // on teste l'existence de la valeur pour  (if info[prop] est truthy)
          carte.querySelector(".nom").textContent += infos[prop];

        } else if (prop === "icon") {
          carte.querySelector(".icon").style.background = "url(" + infos[prop] + ")";

        } else if (prop === "hobbies") {
          // hobbies est un tableau, il faut donc le parser avec une boucle
          for (i = 0;  i < infos[prop].length; i += 1 ) {
            li = document.createElement("li");
            li.className = "item";
            li.textContent = infos[prop][i];
            carte.querySelector(".list").appendChild(li);
          }
        }
      }

      dom.cartes.appendChild(carte);

    };



    observer = function observer() {
      dom.exo1.onclick = doWhile;
      dom.exo2_3.onclick = parcourirDataset;
    };

}());
