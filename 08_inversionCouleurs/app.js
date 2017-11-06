/*global window, log, secToMillisec, byId, select, selectAll */
var invertColor = function invertColor(block) {
    // notez l'argument block ... ici et dans le HTML !
    "use strict";
    var autreBlock;
    block.classList.add("is-active"); // on ajoute une classe CSS à block
    // this représente l'élément block dans ce contexte
    // log(block); // affiche l'objet HTML
    // on peut accéder à toutes ses propriétés dans la console du navigateur
    // (onglet dom / properties)
    // log(block.id); // affiche l'ID de la balise
    // log(block.className); // la (les) classe(s) CSS appliquée(s) à l'élément
    // log(block.style); // les styles (inline) de l'élément
    // log(block.style.background); // affiche la propriété background (inline)
    // log(block.className.split(' ')); // ici, split transforme className en array
    // log(block.classList.contains("green")); // bool: block contient green (CSS)?
    // log(block.classList.contains("red")); // bool: block contient red (CSS) ?

    if (block.id === "block_g") {
        autreBlock = byId("block_r");
    } else {
        autreBlock = byId("block_g");
    }
    // log("autreBlock");
    // log(autreBlock);

    if (block.style.background === "green") {
        block.style.background = "red";
        autreBlock.style.background = "green";
    } else {
        block.style.background = "green";
        autreBlock.style.background = "red";
    }

    window.setTimeout(function delay() {
        // un timeout est une fonction déclenchant un délai
        // qui permet d'éxécuter du code après un laps de temps
        block.classList.remove("is-active"); // ici on retire la classe active
        // après le temps de l'animation
    }, 500); // exprimé en milisecondes... ici 1 demi seconde
};

var invertColorBastien = function invertColorBastien() {
    "use strict";
    byId("block_r1").classList.toggle("red");
    byId("block_r1").classList.toggle("green");
    byId("block_g1").classList.toggle("red");
    byId("block_g1").classList.toggle("green");
};
