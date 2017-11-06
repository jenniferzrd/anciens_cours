/*global window, log, select, selectAll, byId, document*/
// app est une IIFE : Immediatly Invoqued Function Expression
var app = (function app() {
    "use strict";
    var dom = {}, observer, looper1, looper2, looper3, looperBonus;

    window.onload = function start() {
        log("started !!!");
        dom.btns = selectAll(".submit");
        observer();
    };

    looper1 = function looper1() {
        var i = 0, t1 = [1, "yop", false, 123, true, "bien ou bien ?", "hello Nawal !!!"];

        log("--- looper 1 : entrée de boucle ---");
        while (i < t1.length) {
            log(t1[i] + " - cette valeur est un(e) " + typeof t1[i]);
            i += 1;
        }
        log("--- sortie de boucle ---");
        log("nb d'itérations (tours de boucle) : " + i);
    };

    looper2 = function looper2() {
        var i, t2, resultBool = [], resultNumber = [];
        t2 = ["ola", NaN, 1000, "yop", false, null, 1.23, false, "bien ou bien ?", true, true, 15 + 44, 10000];

        for (i = 0; i < t2.length; i += 1) {
            if (!isNaN(t2[i]) && typeof t2[i] === "number") {
                resultNumber.push(t2[i]);
            } else if (typeof t2[i] === "boolean") {
                resultBool.push(t2[i]);
            }
        }

        log(resultNumber);
        log(resultBool);
        log("Le tableau de booléens contient " + resultBool.length + " cases");
        log("Le tableau de nombres contient " + resultNumber.length + " cases");
        if (resultNumber.length > resultBool.length) {
            log("le tableau de nombres est le plus long");
        } else if (resultNumber.length < resultBool.length) {
            log("le tableau de booléens est le plus long");
        } else {
            log("les deux tableaux sont de tailles égales");
        }
    };

    looper3 = function looper3() {
        var divs, parags, lists, parseList;
        divs = document.getElementsByTagName("div");
        parags = document.getElementsByTagName("p");
        lists = document.getElementsByTagName("ul");

        parseList = function parseList(nodeList) {
            var i, id, name;
            for (i = 0; i < nodeList.length; i += 1) {
                // log(nodeList[i]);
                // log(typeof nodeList[i]);
                // log(nodeList[i].nodeName);
                name = nodeList[i].nodeName;
                if (name === "DIV") {
                    id = "div_" + (i + 1);
                } else if (name === "P") {
                    id = "p_" + (i + 1);
                } else {
                    id = "ul_" + (i + 1);
                }
                nodeList[i].id = id;
            }
        };

        parseList(divs);
        parseList(parags);
        parseList(lists);
    };

    looperBonus = function looperBonus() {
        var cible, destination, trouverLaDestination;

        cible = byId("cible");

        trouverLaDestination = function trouverLaDestination() {
            destination = this.parentElement;
            log("on remonte l'arbre HTML jusqu'a la cible ... ");
            while (destination.id !== "bonus") {
                destination = destination.parentElement;
                log(destination);
            }
            log("fin de boucle !");
        };

        cible.onclick = trouverLaDestination;
    };

    observer = function observer() {
        dom.btns[0].onclick = looper1;
        dom.btns[1].onclick = looper2;
        dom.btns[2].onclick = looper3;
        dom.btns[3].onclick = looperBonus;
    };
}());
