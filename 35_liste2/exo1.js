/*jshint esversion: 6*/

var exo1 = function() {
    "use strict";

    var checkAction,
        createLi,
        createOl,
        createRadio,
        getActiveListe,
        input,
        liste,
        reset;


    checkAction = function() {
        var radio = document.querySelector("input:checked");

        if (!input.value.length) {
            return console.error("empty input");

        } else if (radio) {
            getActiveListe(radio).appendChild(
                createLi(input.value)
            );
        } else {
            liste.appendChild(createLi(input.value));
        }
    };

    createOl = function() {
        var ol = document.createElement("ol");
        ol.className = "list";
        return ol;
    };

    createLi = function(text, list) {
        var li, radio;
        li = document.createElement("li");
        li.className = "item";
        li.textContent = text;
        li.appendChild(createRadio());
        return li;
    };

    createRadio = function() {
        var radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "radio";
        return radio;
    };

    getActiveListe = function(radio) {
        let li = radio.parentElement;
        let list = li.querySelector(".list");
        return list ? list : li.appendChild(createOl());
    };

    reset = function() {
        var radio = document.querySelector("input:checked");
        if (radio) {
            radio.checked = false;
        }
    };

    (function start() {
        console.log("exo 1 ready");
        input = document.getElementById("input");
        liste = document.getElementById("racine");

        document.getElementById("insert").onclick = checkAction;
        document.getElementById("reset").onclick = reset;
    }());

};
