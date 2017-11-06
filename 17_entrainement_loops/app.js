var app = (function app() {
    "use strict";
    var dom, entrainement3, cat, tableau;

    window.onload = function start() {
        log("ready to rock");
        dom = {};
        dom.btn = byId("executer");
        dom.list = selectAll(".item");

        tableau = ["a", "b", "c", "d", "e"];

        cat = {
          name: "kitty",
          age: 10,
          color: "black",
          colorEye: "yellow",
          hobbies: [{str: "pelotte"}, {str: "souris"}, {str: "caresses"}]
        };

        dom.btn.onclick = entrainement3;
    };

    entrainement3 = function entrainement3() {
        var i;

        log("while");
        while (cat.age !== 13) {
          log("le temps passe ...");
          cat.age += 1;
        }

        log("-------sortie du while-----------");

        log("for");
        for (i = 0; i < cat.hobbies.length; i += 1) {
          log(cat.hobbies[i].str);
        }

        log("--------sortie du for----------");

        log("forEach");
        tableau.forEach(function parse(value, j) {
          log(j);
          log(value);
        });

        dom.list.forEach(function parse(item) {
          log(item);
        });

        log("--------sortie des forEach----------");

        log("for... in");

        for (var prop in cat) {
          log(prop);
          log(cat[prop]);
        }







    };

}());
